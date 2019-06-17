import { hot } from 'react-hot-loader/root';
import React from 'react';

// global styles
import GlobalStyles from '../baseStyles';

// elements
import Div from '../elements/Div';

// components
import Topbar from './Topbar';
import HotelInfo from './HotelInfo';
import Nav from './Nav';

const App = () => (
  <>
    <GlobalStyles />
    <Div.Container>
      <Topbar />
      <Div.Content>
        <Nav />
        <HotelInfo />
      </Div.Content>
    </Div.Container>
  </>
);

export default hot(App);
