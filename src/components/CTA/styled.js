import styled from 'styled-components';

// pulsate animation and media queries
import { pulsate, mediaQueries } from '../../stylesShare';

export const Container = styled.div`
  padding: 3.5rem 0;
  text-align: center;

  ${mediaQueries.tabletL`
    padding: 2.5rem 0;
  `}
`;

export const Text = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
`;

export const Button = styled.button`
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: uppercase;
  border-radius: 100px;
  border: none;
  background-image: linear-gradient(
    to right,
    var(--color-primary-light),
    var(--color-primary-dark)
  );
  color: #fff;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  > * {
    display: inline-block;
    height: 100%;
    width: 100%;
    transition: all 0.2s;
  }

  > span:first-child {
    padding: 2rem 7.5rem;
  }

  > span:last-child {
    display: inline-block;
    position: absolute;
    padding: 2rem 0;
    left: 0;
    top: -100%;
  }

  &:hover {
    background-image: linear-gradient(
      to left,
      var(--color-primary-light),
      var(--color-primary-dark)
    );
  }

  &:hover > span:first-child {
    transform: translateY(100%);
  }

  &:hover > span:last-child {
    top: 0;
  }

  &:focus {
    outline: none;
    animation: ${pulsate} 1s infinite;
  }
`;
