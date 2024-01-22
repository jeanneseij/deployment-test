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
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setLoading(true); // Set loading to true when starting to fetch
      try {
        if (catId) {
          const data = await fetchCatData(catId);
          if (data === null) {
            setApiError(true);
            setLoading(false); // Set loading to false when fetch is complete
          } else {
            setCatData(data);
            setApiError(false);
            setLoading(false); // Set loading to false when fetch is complete
          }
        }
      } catch {
        setApiError(true);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, [catId]);

  if (loading) return <Container><LoadingIcon /></Container>;
  if (apiError) return <Container><ApiErrorAlert message="🐾 Apologies but we could not load the cat's details at this time! Miau!" /></Container>;

  const breed = catData?.breeds[0];

  const goBackToHomePage = () => {
    if (breed) {
      navigate(`/home?breedId=${breed.id}`);
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
            {/* Use optional chaining for catData and breed */}
            <CatImage src={catData?.url} alt={catData?.breeds[0]?.name ?? 'Cat'} />
          </ImageContainer>
          <DetailsContainer>
            {/* Similarly, check each property */}
            <DetailItem>Name: {catData?.breeds[0]?.name}</DetailItem>
            <DetailItem>Origin: {catData?.breeds[0]?.origin}</DetailItem>
            <DetailItem>Temperament: {catData?.breeds[0]?.temperament}</DetailItem>
            <DetailItem>Description: {catData?.breeds[0]?.description}</DetailItem>
          </DetailsContainer>
        </>
      ) : (
        apiError && <ApiErrorAlert message="🐾 Apologies but we could not load the cat's details at this time! Miau!" />
      )}
    </Container>
  );
};

export default SingleCatPage;