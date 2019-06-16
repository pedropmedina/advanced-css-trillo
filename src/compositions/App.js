import { hot } from 'react-hot-loader/root';
import React from 'react';
import styled from 'styled-components';

import GlobalStyles from '../baseStyles';

const Container = styled.div`
  color: #fff;
`;

const App = () => (
  <>
    <GlobalStyles />
    <Container>hello from App!!</Container>
  </>
);

export default hot(App);
