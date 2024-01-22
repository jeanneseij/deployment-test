import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const scaleUp = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

export const WelcomeContainer = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  color: #5a3825;
  padding: 0 1rem;
  text-align: center;
`;

export const BrandName = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center; 
  font-size: 2.5rem;
  margin-top: 70px;
  margin-bottom: 0;
  padding-right: 15px;
  font-weight: 700;

  img {
    height: 100px;
    margin-right: 0px;
    margin-bottom: 0;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 400;
`;

export const SlideshowContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 90%;
  height: 500px;
  margin: 0;
  background-color: transparent;
  box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.1);
`;

export const SlideshowImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  position: absolute;
  opacity: 0;
  border-radius: 5px;

  &.fadeIn {
    animation: ${fadeIn} 5s ease-in-out forwards;
  }
`;

export const ExploreButton = styled(Link)`
  background-color: #5a3825;
  color: #f3dace;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #7c5948;
    animation: ${scaleUp} 0.3s ease forwards;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;