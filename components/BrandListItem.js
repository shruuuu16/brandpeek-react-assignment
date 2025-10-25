// components/BrandListItem.js
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur'; // 1. Import BlurView

const BrandListItem = ({ brand, onPress }) => (
  // 2. Wrap everything in a Pressable for the tap effect
  <Pressable
    style={({ pressed }) => [
      styles.pressable,
      { opacity: pressed ? 0.7 : 1.0 },
    ]}
    onPress={onPress}
  >
    {/* 3. Use BlurView for the frosted glass effect */}
    <BlurView intensity={20} tint="dark" style={styles.container}>
      <Image source={{ uri: brand.logo }} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{brand.name}</Text>
        <Text style={styles.description}>{brand.description_short}</Text>
      </View>
      <Feather name="chevron-right" size={24} color="#777" />
    </BlurView>
  </Pressable>
);

const styles = StyleSheet.create({
  pressable: {
    marginHorizontal: 16, // Add horizontal margin for spacing
    marginVertical: 8, // Add vertical margin
    borderRadius: 16, // Rounded corners for the glass effect
    overflow: 'hidden', // This is CRUCIAL for BlurView to respect borders
  },
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    // We don't need 'backgroundColor' anymore, the blur takes care of it
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600', // '600' (semibold) often looks cleaner
    color: '#FFFFFF',
  },
  description: {
    fontSize: 14,
    color: '#CCCCCC',
    marginTop: 4,
  },
});

export default BrandListItem;