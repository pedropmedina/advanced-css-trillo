import React from 'react';

// blocks and elements
import Overview from '../blocks/Overview';
import Button from '../elements/Button';

// assets
import svgIcons from '../img/sprite.svg';

const HotelOverview = () => (
  <Overview>
    <Overview.Heading>Hotel Las Palmas</Overview.Heading>
    <Overview.Starts>
      {[...Array(5)].map((_, i) => (
        <Overview.Icon key={i}>
          <use href={svgIcons + '#icon-star'}></use>
        </Overview.Icon>
      ))}
    </Overview.Starts>
    <Overview.Location>
      <Overview.Icon>
        <use href={svgIcons + '#icon-location-pin'}></use>
      </Overview.Icon>
      <Button.Infinite>Albufeira, Portugal</Button.Infinite>
    </Overview.Location>
    <Overview.Rating>
      <Overview.RatingAvg>8.6</Overview.RatingAvg>
      <Overview.RatingCount>429 votes</Overview.RatingCount>
    </Overview.Rating>
  </Overview>
);

export default HotelOverview;
