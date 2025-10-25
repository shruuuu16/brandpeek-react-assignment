// services/api.js
import axios from 'axios';

// 🛑 This is your NEW, correct API base URL
const API_BASE_URL = 'https://68fc78da96f6ff19b9f53686.mockapi.io/api/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

/**
 * Fetches the list of brands
 */
export const getBrands = async () => {
  try {
    // This correctly points to '/brands'
    const response = await apiClient.get('/brands');
    return response.data;
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw new Error('Failed to fetch brands.');
  }
};

/**
 * Fetches the details for a single brand by its ID
 */
export const getBrandById = async (id) => {
  try {
    // This also correctly points to '/brands/:id'
    const response = await apiClient.get(`/brands/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching brand with id ${id}:`, error);
    throw new Error('Failed to fetch brand details.');
  }
};