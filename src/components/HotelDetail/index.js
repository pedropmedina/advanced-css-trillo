import React from 'react';

// components
import HotelDetailDescription from '../HotelDetailDescription';
import HotelDetailReview from '../HotelDetailReview';

// styles
import * as Styled from './styled';

// text data for description and reviews
import textdata from '../../assets/text.json';
const { descriptions, features, reviews } = textdata;

const HotelDetail = () => (
  <Styled.Container>
    <HotelDetailDescription descriptions={descriptions} features={features} />
    <HotelDetailReview reviews={reviews} />
  </Styled.Container>
);

export default HotelDetail;
