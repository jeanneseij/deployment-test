import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, ImageContainer, CatImage, DetailsContainer, DetailItem, BackButton } from './SingleCatPageStyles';
import { fetchCatData, CatData } from '../services/catApi';
import ApiErrorAlert from '../components/ApiErrorAlertComponent';
import LoadingIcon from '../components/LoadingIconComponent'


const SingleCatPage = () => {
  const { catId } = useParams<{ catId: string }>();
  const [catData, setCatData] = useState<CatData | null>(null);
  const [apiError, setApiError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    //Fetch Cat Details and set loading state
    async function fetchData() {
      setIsLoading(true);
      try {
        if (catId) {
          const data = await fetchCatData(catId);
          if (data === null) {
            setApiError(true);
            setIsLoading(false);
          } else {
            setCatData(data);
            setApiError(false);
            setIsLoading(false);
          }
        }
      } catch {
        setApiError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [catId]);

  if (isLoading) return <Container><LoadingIcon /></Container>;
  if (apiError) return <Container><ApiErrorAlert message="🐾 Apologies but we could not load the cat's details at this time! Miau!" /></Container>;

  const breed = catData?.breeds[0];

  //Passing params to /home for immediate breed selection based on previously selected breed
  const goBackToHomePage = () => {
    if (breed) {
      navigate(`/home`);
    } else {
      navigate(-1);
    }
  };

  return (
    <Container>
      {catData ? (
        <>
          <ImageContainer>
            <BackButton onClick={goBackToHomePage}></BackButton>
            <CatImage src={catData?.url} alt={catData?.breeds[0]?.name ?? 'Cat'} />
          </ImageContainer>
          <DetailsContainer>
            <DetailItem>Name: {catData?.breeds[0]?.name}</DetailItem>
            <DetailItem>Origin: {catData?.breeds[0]?.origin}</DetailItem>
            <DetailItem>Temperament: {catData?.breeds[0]?.temperament}</DetailItem>
            <DetailItem>Description: {catData?.breeds[0]?.description}</DetailItem>
          </DetailsContainer>
        </>
      ) : (
        <>
        apiError && <ApiErrorAlert message="🐾 Apologies but we could not load the cat's details at this time! Miau!" /> {/*Return Alert Banner when in ecnountering API error*/}
        </>
      )}
    </Container>
  );
};

export default SingleCatPage;