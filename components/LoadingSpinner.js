// components/LoadingSpinner.js
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingSpinner = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#FFFFFF" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingSpinner;