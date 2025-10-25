// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  SafeAreaView 
} from 'react-native';
import { getBrands } from '../services/api';
import RadialGradientBackground from '../components/RadialGradient'; 
import BrandListItem from '../components/BrandListItem';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorDisplay from '../components/ErrorDisplay';

const HomeScreen = ({ navigation }) => {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getBrands();
        setBrands(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBrands();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return <ErrorDisplay message={error} />;
    }
    return (
      <FlatList
        data={brands}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <BrandListItem
            brand={item}
            onPress={() =>
              navigation.navigate('BrandDetail', { brandId: item.id })
            }
          />
        )}
        // Add some padding to the top and bottom of the list
        contentContainerStyle={{ paddingTop: 10, paddingBottom: 30 }}
      />
    );
  };

  return (
    <RadialGradientBackground> 
      <SafeAreaView style={styles.container}>
        {/* We'll render the header outside the list for a cleaner look */}
        <Text style={styles.header}>Top Brands Today</Text> 
        <View style={styles.listContainer}>{renderContent()}</View>
      </SafeAreaView>
    </RadialGradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 32, // Make the header larger
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 30, // More space at the top
    paddingBottom: 10, // Space between header and list
  },
  listContainer: {
    flex: 1,
  },
});

export default HomeScreen;