import styled from 'styled-components';

import { mediaQueries } from '../../stylesShare';

export const Container = styled.div`
  max-width: 120rem;
  margin: 8rem auto;
  background-color: var(--color-grey-light-2);
  box-shadow: var(--shadow-dark);
  min-height: 50rem;

  ${mediaQueries.desktopL`
    margin: 0;
    max-width: 100%;
    width: 100%;
  `}
`;

export const Content = styled.div`
  display: flex;

  ${mediaQueries.tabletL`
    flex-direction: column;
  `}
`;
