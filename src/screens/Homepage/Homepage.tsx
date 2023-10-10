import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import styles from './styles';
import { useTheme } from '@/hooks';

type ChartData = {
  progress: number;
  progressColor: string;
  startAngle: number;
};


const HomePage: React.FC = () => {
  const [isFasting, setIsFasting] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [startTime, setStartTime] = useState<Date>(new Date()); // Set to the current time initially
  const [targetFasting, setTargetFasting] = useState<number>(16); // For example, 16 hours
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  const { Colors, Fonts } = useTheme();

  const STAGES = [
    { name: "Fed State", duration: 3 * 60 }, // 3 hours in minutes
    { name: "Early Fasting State", duration: 18 * 60 }, // 18 hours in minutes
    { name: "Fasting State", duration: 48 * 60 }, // 48 hours in minutes
    { name: "Long-term Fasting State", duration: 48 * 60 } // Same as the previous stage, since it's the last one
  ];


  const dataJSON = `[
    {
      "progress": 0,
      "progressColor": "${Colors.progressCircleColor}",
      "startAngle": -2.5
    }
  ]`;

  const calculateProgress = () => {
    if (!isFasting) return 0;

    const currentTime = new Date();
    const timeProgress = (currentTime.getTime() - startTime.getTime()) / (1000 * 60); // Difference in minutes
    const totalTargetMinutes = targetFasting * 60; // Convert target fasting hours to minutes
    return timeProgress / totalTargetMinutes;
  };



  const getCurrentStage = (minutesElapsed: number) => {
    if (!isFasting) return "Eating Period";

    for (let stage of STAGES) {
      if (minutesElapsed <= stage.duration) return stage.name;
      minutesElapsed -= stage.duration;
    }
    return "Long-term Fasting State";
  };

  // time formatting function
  const formatTime = (seconds: number) => {
    seconds = Math.floor(seconds); // Ensure seconds are always rounded down to the nearest integer
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  useEffect(() => {
    if (isFasting) {
      const intervalId = setInterval(() => {
        const currentTime = new Date();
        const secondsElapsed = (currentTime.getTime() - startTime.getTime()) / 1000;
        setElapsedSeconds(secondsElapsed);
        setProgress(calculateProgress());
      }, 1000); // update every second
      return () => clearInterval(intervalId); // cleanup on unmount
    } else {
      setElapsedSeconds(0); // Reset elapsed time when not fasting
    }
  }, [isFasting, startTime]);





  const data: ChartData[] = JSON.parse(dataJSON);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={Fonts.titleLarge}>Fasttt</Text>
      </View>
      <View style={styles.chartContainer}>
        <ProgressCircle
          style={styles.chart}
          progress={calculateProgress()}
          progressColor={Colors.progressCircleColor}
          backgroundColor={isFasting ? Colors.progressCircleBackgroundColorActive : Colors.progressCircleBackgroundColorInactive}
          strokeWidth={10}
        />
        <Text style={styles.timeText}>
          {formatTime(elapsedSeconds)}
        </Text>
        <Text style={styles.stageText}>
          {getCurrentStage(calculateProgress() * STAGES[STAGES.length - 1].duration / 60)}
        </Text>
      </View>


      <Button
        title={isFasting ? 'Stop Fasting' : 'Start Fasting'}
        onPress={() => {
          setIsFasting(!isFasting);
          if (!isFasting) {
            setStartTime(new Date()); // Reset the start time when starting fasting
          } else {
            setProgress(0); // Reset progress when stopping fasting
          }
        }}
        color={Colors.primary}
      />


    </View>
  );
};

export default HomePage;