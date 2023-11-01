import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import styles from './AuthStyles'; // Assuming you've already defined this
import { useAuth } from '@/contexts/Auth/AuthContexts';

import { Auth } from 'aws-amplify';

interface AuthScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
  const { setUserId } = useAuth(); // Get setUserId function from AuthContext
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogin = async () => {
    try {
      await Auth.signIn(username, password);
      const currentUser = await Auth.currentAuthenticatedUser();
      setUserId(currentUser.attributes.sub); // Assuming 'sub' is the unique ID for the user. Adjust if different.
      navigation.navigate('HomePage');
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error logging in:', error.message);
      }
    }
  };

  const handleSignUp = async () => {
    try {
      await Auth.signUp({
        username,
        password,
      });
      setShowConfirmation(true); // Show confirmation input and button
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error signing up:', error.message);
      }
    }
  };

  const handleConfirmation = async () => {
    try {
      await Auth.confirmSignUp(username, confirmationCode); // Confirm the sign-up
      Alert.alert('Registration confirmed! Please log in.');
      setShowConfirmation(false); // Hide the confirmation input and button
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error confirming registration:', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      {showConfirmation && ( // Conditionally render confirmation input and button
        <>
          <TextInput
            value={confirmationCode}
            onChangeText={setConfirmationCode}
            placeholder="Confirmation Code"
            style={styles.input}
          />
          <Button title="Verify" onPress={handleConfirmation} />
        </>
      )}
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default AuthScreen;
