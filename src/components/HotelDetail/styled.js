import styled from 'styled-components';

import { mediaQueries } from '../../stylesShare';

export const Container = styled.div`
  display: flex;
  padding: 4.5rem;
  background-color: var(--color-grey-light-1);
  border-bottom: var(--line);
  font-size: 1.4rem;

  ${mediaQueries.tabletL`
    padding: 3rem;
  `}

  ${mediaQueries.phoneL`
    flex-direction: column;
  `}
`;
