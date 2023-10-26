// screens/Auth/AuthScreen.tsx

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import styles from './AuthStyles'; // You'll define this later

import { Auth } from 'aws-amplify';

interface AuthScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await Auth.signIn(username, password);
      // Navigate to the main app screen
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
      Alert.alert('Registration successful! Please log in.');
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error signing up:', error.message);
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
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default AuthScreen;
