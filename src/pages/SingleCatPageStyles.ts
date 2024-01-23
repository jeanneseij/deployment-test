import styled from 'styled-components';

// Container component for the main content area
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  max-width: 570px;
  margin: auto;
`;

// Container for displaying an image with styling
export const ImageContainer = styled.div`
  position: relative;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  height: 570px;
  width: 1200px;
  display: flex;
  justify-content: center;
`;

// Button component for navigation
export const BackButton = styled.button`
  position: absolute;
  top: 10px;
  left: 30px;
  width: 55px;
  height: 55px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: #f3dace;
  color: #333;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.3s ease;
  overflow: hidden;

  &:before {
    content: '←';
    position: absolute;
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  &:hover {
    width: 100px;
    background-color: #e1bba7;

    &:before {
      opacity: 0;
    }

    &:after {
      content: 'Back';
      position: absolute;
      opacity: 1;
      transition: opacity 0.3s ease;
    }
  }
`;

// Image component
export const CatImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0.3, 0.4);
`;

// Container for displaying details
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 10px;
  background: #f3f3f3;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

// Individual detail item within the DetailsContainer
export const DetailItem = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #333;
`;
