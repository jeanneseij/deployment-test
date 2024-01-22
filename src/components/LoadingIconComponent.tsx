import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import axios from 'axios';
import { LOADING_ANIMATION_URL } from '../constants/urls';

type LoadingIconProps = {
  url?: string;
};

const LoadingIcon = ({ url = LOADING_ANIMATION_URL }: LoadingIconProps) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await axios.get(url);
        setAnimationData(response.data);
      } catch (error) {
        console.error('Error fetching Lottie animation:', error);
      }
    };

    fetchAnimationData();
  }, [url]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    animationData && <Lottie options={defaultOptions} height={150} width={150} />
  );
};

export default LoadingIcon;
