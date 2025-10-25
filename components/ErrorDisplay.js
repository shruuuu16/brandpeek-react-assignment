// components/ErrorDisplay.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorDisplay = ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>Oops! Something went wrong.</Text>
    <Text style={styles.errorMessage}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B',
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default ErrorDisplay;