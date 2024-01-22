import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    overflow-x: hidden;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
