import React, { useEffect, useState } from 'react';
import { fetchCatImages, CatImage } from '../services/catApi';
import { CAT_LOGO_URL } from '../constants/urls';
import ApiErrorAlert from '../components/ApiErrorAlertComponent';
import LoadingIcon from '../components/LoadingIconComponent'
import {
  WelcomeContainer,
  BrandName,
  Description,
  SlideshowContainer,
  SlideshowImage,
  ExploreButton,
} from './WelcomePageStyles';

const WelcomePage = () => {
  const [catImages, setCatImages] = useState<CatImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const loadCatImages = async () => {
      setIsLoading(true);
      try {
        const images = await fetchCatImages();
        if (!images || images.length === 0) {
          setError(true);
        } else {
          setCatImages(images);
        }
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadCatImages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % catImages.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [catImages.length]);

  const currentImage = catImages[currentImageIndex];
  const nextImage = catImages[(currentImageIndex + 1) % catImages.length];

  return (
    <WelcomeContainer>
      <BrandName>
        <img src={CAT_LOGO_URL} alt="Cat Ears Logo" /> 
        App
      </BrandName>
      <SlideshowContainer>
        {isLoading ? (
          <LoadingIcon />
        ) : error ? (
          <ApiErrorAlert message="Apologies but we could not load new cats for you at this time! Miau!" />
        ) : (
          <>
            {currentImage && (
              <SlideshowImage
                key={currentImage.id}
                src={currentImage.url}
                alt={`Random Cat ${currentImage.id}`}
                className="fadeOut"
              />
            )}
            {nextImage && (
              <SlideshowImage
                key={nextImage.id}
                src={nextImage.url}
                alt={`Random Cat ${nextImage.id}`}
                className="fadeIn"
              />
            )}
          </>
        )}
      </SlideshowContainer>
      <Description>Welcome to the Cat App, your source for all things cat-related...</Description>
      <ExploreButton to="/home">Explore</ExploreButton>
    </WelcomeContainer>
  );
};

export default WelcomePage;