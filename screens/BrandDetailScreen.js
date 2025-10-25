// screens/BrandDetailScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable, // 1. Import Pressable
  Linking, // 2. Import Linking
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { Feather } from '@expo/vector-icons'; // 3. Import icons
import { BlurView } from 'expo-blur'; // 4. Import BlurView
import { getBrandById } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorDisplay from '../components/ErrorDisplay';

const BrandDetailScreen = ({ route }) => {
  const { brandId } = route.params;
  const [brand, setBrand] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        setIsLoading(true); 
        setError(null);
        const data = await getBrandById(brandId); 
        setBrand(data);
      } catch (e) {
        setError(e.message); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchBrand();
  }, [brandId]);

  // 5. Use the darker gradient colors
  const gradientColors = ['#0d001a', '#000000'];

  // 6. Define the content separately
  let content;
  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (error || !brand) {
    content = <ErrorDisplay message={error || 'Brand not found.'} />;
  } else {
    // This is the successful content
    content = (
      // 7. This BlurView creates the "frosted glass card"
      <BlurView intensity={20} tint="dark" style={styles.card}>
        <Image source={{ uri: brand.logo }} style={styles.logo} />
        <Text style={styles.name}>{brand.name}</Text>
        
        <Pressable
          style={({ pressed }) => [
            styles.followButton,
            { backgroundColor: pressed ? '#0069d9' : '#1E90FF' },
          ]}
        >
          <Text style={styles.followButtonText}>Follow</Text>
        </Pressable>

        <Text style={styles.description}>{brand.description_full}</Text>
        
        <Pressable 
          style={styles.websiteContainer} 
          onPress={() => Linking.openURL(brand.website)}
        >
          <Feather name="link-2" size={14} color="#1E90FF" />
          <Text style={styles.website}>{brand.website}</Text>
        </Pressable>
      </BlurView>
    );
  }

  // 8. Render the gradient background with the content on top
  return (
    <LinearGradient colors={gradientColors} style={styles.flex}>
      <SafeAreaView style={styles.flex}>
        {/* ScrollView allows content to scroll if it gets too long */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {content}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center', // Center the card vertically
    padding: 20, // Add padding around the card
  },
  // 9. This is the new "frosted glass" card style
  card: {
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    overflow: 'hidden', // Crucial for blur effect
    width: '100%',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)', // Adds a nice highlight
  },
  name: {
    fontSize: 28, // Slightly larger
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  followButton: {
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 25,
    marginBottom: 25,
  },
  followButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#B0B0B0',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  websiteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  website: {
    fontSize: 14,
    color: '#1E90FF',
    fontStyle: 'italic',
    marginLeft: 5,
  },
});

export default BrandDetailScreen;