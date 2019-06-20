import { hot } from 'react-hot-loader/root';
import React from 'react';

// styles
import * as Styled from './styled';
import GlobalStyles from '../../stylesBase';

// components
import Header from '../Header';
import Sidebar from '../Sidebar';
import HotelView from '../HotelView';

const App = () => (
  <>
    <GlobalStyles />
    <Styled.Container>
      <Header />
      <Styled.Content>
        <Sidebar />
        <HotelView />
      </Styled.Content>
    </Styled.Container>
  </>
);

export default hot(App);
