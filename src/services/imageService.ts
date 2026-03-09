import axios from 'axios';
/**
 * Service to handle image fetching from the server
 */

export interface ImageItem {
  id: string;
  url: string;
  title: string;
  description: string;
  category: string;
}

export const fetchImages = async (): Promise<ImageItem[]> => {
  try {
    const response = await axios.get('/api/images');
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    // Fallback to empty array or throw
    throw error;
  }
};
