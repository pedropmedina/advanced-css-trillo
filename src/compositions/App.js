import { hot } from 'react-hot-loader/root';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #eee;
  color: blue;
`;

const App = () => <Container>hello from App!</Container>;

export default hot(App);
