import React from 'react';

// styles
import * as Styled from './styled';
import { InfiniteBtn } from '../../stylesShare';

// icons
import svgicons from '../../assets/sprite.svg';

const HotelOverview = () => (
  <Styled.Container>
    <Styled.Heading>Hotel, Las Palmas</Styled.Heading>

    <Styled.Stars>
      {[...Array(5)].map((_, i) => (
        <Styled.Icon key={i}>
          <use href={svgicons + '#icon-star'}></use>
        </Styled.Icon>
      ))}
    </Styled.Stars>

    <Styled.Location>
      <Styled.Icon>
        <use href={svgicons + '#icon-location-pin'}></use>
      </Styled.Icon>
      <InfiniteBtn>Albufeira, Portugal</InfiniteBtn>
    </Styled.Location>

    <Styled.Rating>
      <Styled.RatingAvg>8.6</Styled.RatingAvg>
      <Styled.RatingCount>246</Styled.RatingCount>
    </Styled.Rating>
  </Styled.Container>
);

export default HotelOverview;
