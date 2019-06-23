import styled from 'styled-components';

import { mediaQueries } from '../../stylesShare';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: var(--line);
`;

export const Heading = styled.h1`
  font-size: 2.25rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 1.5rem 3rem;

  ${mediaQueries.phoneL`
    font-size: 1.8rem;
    padding: 1.25rem 2rem;
  `}
`;

export const Stars = styled.div`
  margin-right: auto;
  display: flex;
`;

export const Location = styled.div`
  font-size: 1.2rem;
  display: flex;
  vertical-align: center;
`;

export const Icon = styled.svg`
  width: 1.75rem;
  height: 1.75rem;
  fill: var(--color-primary);
  margin-right: 0.5rem;
`;

export const Rating = styled.div`
  background-color: var(--color-primary);
  color: #fff;
  margin-left: 3rem;
  padding: 0 2.25rem;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mediaQueries.phoneL`
    padding: 0 1.5rem;
  `}
`;

export const RatingAvg = styled.div`
  font-size: 2.25rem;
  font-weight: 300;
  margin-bottom: -3px;

  ${mediaQueries.phoneL`
    font-size: 1.8rem;
  `}
`;

export const RatingCount = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;

  ${mediaQueries.phoneL`
    font-size: 0.5rem;
  `}
`;
