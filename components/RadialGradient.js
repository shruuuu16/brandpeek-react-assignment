// components/RadialGradient.js
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Svg, Defs, Rect, RadialGradient, Stop } from 'react-native-svg';

const { height, width } = Dimensions.get('window');

/**
 * Creates a radial gradient background that matches the assignment preview.
 */
const RadialGradientBackground = ({ children }) => {
  // This is the "bluish dark" color from the original preview image
  // Changed from the "purple" hex code to a "midnight blue" hex code
  const topColor = '#191970'; 
  const bottomColor = '#000000'; // Fades to pure black

  return (
    <View style={styles.container}>
      <Svg height={height} width={width} style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient
            id="grad"
            cx="50%"   // Center horizontally
            cy="0%"    // Position at the top edge
            r="75%"    // Make the radius 75% for a focused glow
          >
            <Stop offset="0" stopColor={topColor} stopOpacity="1" />
            <Stop offset="1" stopColor={bottomColor} stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width={width} height={height} fill="url(#grad)" />
      </Svg>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fallback background
  },
});

export default RadialGradientBackground;