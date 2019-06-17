import { createGlobalStyle } from 'styled-components';

export const colorPalette = {
  primary: '#eb2f64',
  primaryLight: '#FF3366',
  primaryDark: '#BA265D',
  greyLight1: '#faf9f9',
  greyLight2: '#f4f2f2',
  greyLight3: '#f0eeee',
  greyLight4: '#ccc',
  greyDark1: '#333',
  greyDark2: '#777',
  greyDark3: '#999'
};

export default createGlobalStyle`
  :root {
    --color-primary: #eb2f64;
    --color-primary-light: #FF3366;
    --color-primary-dark: #BA265D;
    --color-grey-light-1: #faf9f9;
    --color-grey-light-2: #f4f2f2;
    --color-grey-light-3: #f0eeee;
    --color-grey-light-4: #ccc;
    --color-grey-dark-1: #333;
    --color-grey-dark-2: #777;
    --color-grey-dark-3: #999;

    --shadow-dark: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: var(--color-grey-dark-2);
    background-image: linear-gradient(to right bottom, var(--color-primary-light), var(--color-primary-dark));
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
  }
`;
