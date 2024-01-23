import styled from 'styled-components';

// Container for the main content, centered vertically and horizontally
export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding-top: 80px;
  gap: 20px;
`;

// Styled select component with custom styles
export const StyledSelect = styled.div`
  width: 300px;

  .react-select__control {
    min-height: 38px;
  }

  .react-select__menu {
    width: 300px;
  }
`;

// Container for a grid of images
export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: center;
  gap: 50px;
  padding: 10px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

// Container for an individual image with hover effect
export const ImageContainer = styled.div`
  position: relative;
  padding-top: 50px;
  width: 100%;
  height: 300px;
  border-radius: 5px;
  overflow: visible;
  transition: transform 0.3s ease;
  margin-bottom: 40px;

  &:hover {
    transform: translateY(-13px);

    .view-details-button {
      opacity: 1;
      bottom: -30px;
    }
  }
`;

// Image within the ImageContainer
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  border-radius: 5px;
  border: solid gray;
`;

// Load more button with hover and focus effects
export const LoadMoreButton = styled.button`
  background-color: #f3dace;
  color: #5c5c5c;
  border: 2px solid #f3dace;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: #e8c1b0;
    border-color: #e8c1b0;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(243, 218, 206, 0.5);
  }

  &:disabled {
    background-color: #f8e6dc;
    color: #a8a8a8;
    border-color: #f8e6dc;
    cursor: not-allowed;
  }
`;

// Button to view details with hover effect
export const ViewDetailsButton = styled.button`
  opacity: 0;
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.3s ease, bottom 0.3s ease;

  background-color: #f3dace;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateX(-50%) scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
