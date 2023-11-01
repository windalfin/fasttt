import React, { useState, useEffect } from 'react';
import { API, GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import * as mutations from '@/api/graphql/mutations';
import * as queries from '@/api/graphql/queries';
import { CreateFastingEventMutation } from '@/api/API'; // Assuming this type is defined in your API.ts file

import { Auth } from 'aws-amplify';
import { View, Text, Platform } from 'react-native';
import styles from './styles';
import { useTheme } from '@/hooks';
import { Button, Appbar } from 'react-native-paper';

import FastingProgressGauge from '@/components/HomePage/FastingProgressGauge';
import HeaderBar from '@/components/Main/Header/HeaderBar';

const HomePage: React.FC = () => {
  const [userId, setUserId] = useState(null);
  const [cognitoUser, setCognitoUser] = useState(null);
  const [isFasting, setIsFasting] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [startTime, setStartTime] = useState<Date>(new Date()); // Set to the current time initially
  const [targetFasting, setTargetFasting] = useState<number>(16); // For example, 16 hours
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [fastingEvents, setFastingEvents] = useState([]);

  const { Colors, Fonts } = useTheme();

  const STAGES = [
    { name: 'Fed State', duration: 3 * 60 }, // 3 hours in minutes
    { name: 'Early Fasting State', duration: 18 * 60 }, // 18 hours in minutes
    { name: 'Fasting State', duration: 48 * 60 }, // 48 hours in minutes
    { name: 'Long-term Fasting State', duration: 48 * 60 }, // Same as the previous stage, since it's the last one
  ];

  const calculateProgress = () => {
    if (!isFasting) return 0;

    const currentTime = new Date();
    const timeProgress =
      (currentTime.getTime() - startTime.getTime()) / (1000 * 60); // Difference in minutes
    const totalTargetMinutes = targetFasting * 60; // Convert target fasting hours to minutes
    return timeProgress / totalTargetMinutes;
  };

  const getCurrentStage = (minutesElapsed: number) => {
    if (!isFasting) return 'Eating Period';

    for (let stage of STAGES) {
      if (minutesElapsed <= stage.duration) return stage.name;
      minutesElapsed -= stage.duration;
    }
    return 'Long-term Fasting State';
  };

  const logout = async () => {
    try {
      await Auth.signOut();
      setCognitoUser(null);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setCognitoUser(user);
      } catch (error) {
        console.log('Error fetching Cognito user:', error);
        setCognitoUser(null);
      }
    };

    checkUser();
  }, []);

  const handleFastingToggle = async () => {
    setIsFasting(!isFasting);
    if (!isFasting) {
      setStartTime(new Date()); // Reset the start time when starting fasting
    } else {
      const endTime = new Date();
      const duration = (endTime.getTime() - startTime.getTime()) / (1000 * 60); // in minutes
      const fastingEventData = {
        userId: cognitoUser.attributes.sub,
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        duration: duration,
      };
      try {
        await API.graphql<GraphQLQuery<CreateFastingEventMutation>>({
          query: mutations.createFastingEvent,
          variables: { input: fastingEventData },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        });
      } catch (error) {
        console.error('Error recording fasting event:', error);
      }
      setProgress(0); // Reset progress
    }
  };

  useEffect(() => {
    const fetchFastingEvents = async () => {
      try {
        if (cognitoUser) {
          const response = await API.graphql<GraphQLQuery<any>>({  // Adjust the generic type based on the expected response type
            query: queries.listFastingEvents,
            variables: {
              filter: { userId: { eq: cognitoUser.attributes.sub } },
            },
            authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
          });
          if ('data' in response) {
            setFastingEvents(response.data.listFastingEvents.items);
          }
        }
      } catch (error) {
        console.error('Error fetching fasting events:', error);
      }
    };
    fetchFastingEvents();
  }, [cognitoUser]);


  useEffect(() => {
    if (isFasting) {
      const intervalId = setInterval(() => {
        const currentTime = new Date();
        const secondsElapsed =
          (currentTime.getTime() - startTime.getTime()) / 1000;
        setElapsedSeconds(secondsElapsed);
        setProgress(calculateProgress());
      }, 1000); // update every second
      return () => clearInterval(intervalId); // cleanup on unmount
    } else {
      setElapsedSeconds(0); // Reset elapsed time when not fasting
    }
  }, [isFasting, startTime]);

  return (
    <View style={{ flex: 1 }}>
      <HeaderBar />
      <View style={styles.container}>
        <View style={styles.chartContainer}>
          <FastingProgressGauge
            progress={calculateProgress()}
            isFasting={isFasting}
            elapsedSeconds={elapsedSeconds}
            getCurrentStage={getCurrentStage}
          />
        </View>

        <Button mode="contained" onPress={handleFastingToggle}>
          {isFasting ? 'Stop Fasting' : 'Start Fasting'}
        </Button>
      </View>
      <Button mode="contained" onPress={logout}>
        Logout
      </Button>
    </View>
  );
};

export default HomePage;
