import axios from 'axios';

export type CatImage = {
  id: string;
  url: string;
};

export type BreedOption = { 
  value: string; 
  label: string; 
};

export type ImageType = { 
  url: string; 
  id: string; 
};

type CatBreed = {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  description: string;
};

export type CatData = {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds: CatBreed[];
};

const baseUrl = process.env.REACT_APP_CAT_API_BASE_URL;
const apiKey = process.env.REACT_APP_CAT_API_KEY;
const headers = {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
  }

// Fetching of 10 random cat images from API
export const fetchCatImages = async (): Promise<CatImage[]> => {
  try {
    if (!baseUrl || !apiKey) {
      throw new Error('API configuration is missing');
    }

    const response = await axios.get(`${baseUrl}/images/search?limit=10`, {
      headers: headers,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error fetching cat images:', error);
    return [];
  }
};

//Fetching of different breed options
export const fetchBreedOptions = async (): Promise<BreedOption[]> => {
  try {
    if (!baseUrl || !apiKey) {
      throw new Error('API configuration is missing');
    }
    
    const response = await axios.get(`${baseUrl}/breeds`, {
      headers: headers,
    });

    return response.data.map((breed: any) => ({
      value: breed.id,
      label: breed.name,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

//Fetching of cat images of selected breed
export const fetchBreedImages = async (breedId: string): Promise<ImageType[]> => {
  try {
    const response = await axios.get(`${baseUrl}/images/search?breed_ids=${breedId}&limit=50`, {
      headers: headers,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error fetching images');
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

//Fetching of cat details
export const fetchCatData = async (catId: string): Promise<CatData | null> => {
  try {
    if (!baseUrl || !apiKey) {
      throw new Error('API configuration is missing');
    }

    const response = await axios.get(`${baseUrl}/images/${catId}`, {
      headers: headers,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error fetching data');
    }
  } catch (error) {
    console.error('Error fetching cat data:', error);
    return null;
  }
};