import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import axios from 'axios';
import { COMING_SOON_ANIMATION_URL } from '../constants/urls'; 

const LottieAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await axios.get(COMING_SOON_ANIMATION_URL);
        setAnimationData(response.data);
      } catch (error) {
        console.error('Error fetching Lottie animation:', error);
      }
    };

    fetchAnimationData();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    animationData && <Lottie options={defaultOptions} height={600} width={600} />
  );
};

export default LottieAnimation;
