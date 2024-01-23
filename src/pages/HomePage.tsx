import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { CenteredContainer, StyledSelect, ImagesContainer, ImageContainer, Image, LoadMoreButton, ViewDetailsButton} from './HomePageStyles';
import { BreedOption, ImageType, fetchBreedOptions, fetchBreedImages } from '../services/catApi';
import ApiErrorAlert from '../components/ApiErrorAlertComponent';
import LoadingIcon from '../components/LoadingIconComponent'
import { useCatBreedContext } from '../contexts/CatBreedContext';

const HomePage = () => {
  const [breedOptions, setBreedOptions] = useState<BreedOption[]>([]);
  const [images, setImages] = useState<ImageType[]>([]);
  const [displayCount, setDisplayCount] = useState<number>(5); //Initially display only 5 images of the selected breed
  const [breedOptionsError, setBreedOptionsError] = useState<boolean>(false);
  const [breedImagesError, setBreedImagesError] = useState<boolean>(false);
  const [isFetchingBreeds, setIsFetchingBreeds] = useState<boolean>(true);
  const [isFetchingImages, setIsFetchingImages] = useState<boolean>(false);
  const { selectedBreed, setSelectedBreed } = useCatBreedContext();

  const navigate = useNavigate();

  useEffect(() => {
    //Fetch Breed Options from API
    async function fetchData() {
      setIsFetchingBreeds(true);
      try {
        const options = await fetchBreedOptions();
        if (options.length === 0) {
          setBreedOptionsError(true);
        } else {
          setBreedOptions(options);
          setBreedOptionsError(false);
        }
      } catch (error) { 
        setBreedOptionsError(true);
      } finally {
        setIsFetchingBreeds(false);
      }
    }
  
    fetchData();
  }, []);

  useEffect(() => {
    //Fetch Images based on selected breed from API
    const loadImages = async () => {
      if (selectedBreed) {
        setIsFetchingImages(true);
        try {
          const breedImages = await fetchBreedImages(selectedBreed.value);
          if (breedImages.length === 0) {
            setBreedImagesError(true);
          } else {
            setImages(breedImages);
            setBreedImagesError(false);
          }
        } catch (error) {
          setBreedImagesError(true);
        } finally {
          setIsFetchingImages(false);
        }
      }
    };
  
    loadImages();
  }, [selectedBreed]);

  const handleLoadMore = () => {
    //Display 5 more images of the selected breed
    setDisplayCount(prevCount => Math.min(prevCount + 5, images.length));
  };

  return (
    <CenteredContainer>
      {isFetchingBreeds ? (
        <div>
          <CenteredContainer>
            <LoadingIcon /> {/*Return Loading Animation when in Loading State*/}
          </CenteredContainer>
        </div>
      ) : breedOptionsError ? (
        <>
        <ApiErrorAlert message="Apologies but we could not load cat breeds for you at this time! Miau!" /> {/*Return Alert Banner when in ecnountering API error*/}
        </>
      ) : (
        <StyledSelect>
          <Select
            options={breedOptions}
            onChange={option => setSelectedBreed(option)}
            value={selectedBreed}
            placeholder="Select Breed To Explore"
            isSearchable
          />
        </StyledSelect>
      )}
      {isFetchingImages ? (
        <div>
          <CenteredContainer>
            <LoadingIcon />
          </CenteredContainer>
        </div>
      ) : breedImagesError ? (
        <>
        <ApiErrorAlert message="Apologies but we could not load images for this breed at this time! Miau!" /> {/*Return Alert Banner when in ecnountering API error*/}
        </>
      ) : (
        <>
          <ImagesContainer>
            {images.slice(0, displayCount).map((image, index) => (
              <ImageContainer key={index}>
                <Image className="image" src={image.url} alt="Cat" />
                <ViewDetailsButton 
                  className="view-details-button" 
                  onClick={() => navigate(`/cat/${image.id}`)}>
                  View Details
                </ViewDetailsButton>
              </ImageContainer>
            ))}
          </ImagesContainer>
          {displayCount < images.length && (
            <>
            <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton> {/*Hide when all Images of that breed is displayed*/}
            </>
          )}
        </>
      )}
    </CenteredContainer>
  );
};

export default HomePage;