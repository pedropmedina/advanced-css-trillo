import styled, { keyframes, css } from 'styled-components';

// screen sizes
const screenSizes = {
  desktopL: 1200,
  desktopS: 1100,
  tabletL: 900,
  tabletS: 700,
  phoneL: 600,
  phoneS: 500
};

// media queries factory object for each screen size
export const mediaQueries = Object.keys(screenSizes).reduce((queries, size) => {
  queries[size] = (...args) => css`
    @media only screen and (max-width: ${screenSizes[size] / 16}em) {
      ${css(...args)}
    }
  `;
  return queries;
}, {});

// pulsate animation
export const pulsate = keyframes`
  0% {
    transform: scale(1);
    box-shadow: none;
  }

  50% {
    transform: scale(1.05);
    box-shadow: 0 1rem 4rem rgba(0,0,0,.25);
  }

  100% {
    transform: scale(1);
    box-shadow: none;
  }
`;

// Inifinite button component
export const InfiniteBtn = styled.button`
  border: none;
  color: var(--color-primary);
  font-size: inherit;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
  display: inline-block;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: var(--color-grey-dark-1);
  }

  &:focus {
    outline: none;
    animation: ${pulsate} 1s infinite;
  }
`;
