import styled from 'styled-components';

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;  // Arrange children in a column
  justify-content: flex-start;  // Align children to the start of the column
  align-items: center;  // Center-align children horizontally
  height: 100vh;  // Full viewport height
  padding-top: 80px; // Add some space at the top
  gap: 20px; // Space between child elements
`;

export const StyledSelect = styled.div`
  width: 300px; // Set the fixed width here

  .react-select__control {
    min-height: 38px; // Adjust the height of the select box if needed
  }

  .react-select__menu {
    width: 300px; // Ensure the dropdown menu width matches the select box
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); // Adjust '200px' based on your desired image width
  justify-content: center; // Center items when they can't fill a full row
  gap: 50px; // Adds space between images
  padding: 10px 0; // Padding around the images
  max-width: 1200px; // Adjust the width to fit 5 images (200px each + 10px gap)
  margin: 0 auto; // Center the container
`;

export const ImageContainer = styled.div`
  position: relative;
  padding-top: 50px;
  width: 100%;
  height: 300px; // Adjust height as needed
  border-radius: 5px;
  overflow: visible; // Allow the button to show outside the container
  transition: transform 0.3s ease;
  margin-bottom: 40px; // Space for the button

  &:hover {
    transform: translateY(-13px); // Move up slightly on hover

    .view-details-button {
      opacity: 1; // Fully visible on hover
      bottom: -30px; // Position at the bottom of the image container
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  border-radius: 5px;
  border: solid gray;
`;

export const LoadMoreButton = styled.button`
  background-color: #f3dace;  // Soft peach primary color
  color: #5c5c5c;  // Darker text for contrast
  border: 2px solid #f3dace; // Border to maintain consistency
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
  
  &:hover {
    background-color: #e8c1b0;  // A slightly darker shade for hover
    border-color: #e8c1b0; // Darken the border as well on hover
    transform: scale(1.05);  // Slightly enlarge button on hover
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(243, 218, 206, 0.5);  // Focus ring matching the button color
  }

  &:disabled {
    background-color: #f8e6dc;
    color: #a8a8a8;
    border-color: #f8e6dc;
    cursor: not-allowed;
  }
`;

export const ViewDetailsButton = styled.button`
  opacity: 0;
  position: absolute;
  bottom: -40px; // Start below the image container
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