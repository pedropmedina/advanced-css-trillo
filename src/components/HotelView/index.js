import React from 'react';

// components
import HotelGallery from '../HotelGallery';
import HotelOverview from '../HotelOverview';
import HotelDetail from '../HotelDetail';
import CTA from '../CTA';

// styles
import * as Styled from './styled';

const HotelView = () => (
  <Styled.Main>
    {/*  Gallery shows hotel photos  */}
    <HotelGallery />
    {/* Hotel Overview provides brief description of the hotel */}
    <HotelOverview />
    {/* Detailed informating including recommendations ans user's reviews */}
    <HotelDetail />
    {/* Call To Action */}
    <CTA />
  </Styled.Main>
);

export default HotelView;
