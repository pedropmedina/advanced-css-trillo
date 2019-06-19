import React from 'react';

// components
import HotelOverview from './HotelOverview';
import HotelDetail from './HotelDetail';

// blocks and elements
import Main from '../elements/Main';
import Gallery from '../blocks/Gallery';

// assets
import hotel1 from '../img/hotel1.jpg';
import hotel2 from '../img/hotel2.jpg';
import hotel3 from '../img/hotel3.jpg';

const HOTEL_IMGS = [
  { src: hotel1, alt: 'Photo for hotel 1' },
  { src: hotel2, alt: 'Photo for hotel 2' },
  { src: hotel3, alt: 'Photo for hotel 3' }
];

const HotelInfo = () => (
  <Main.HotelView>
    <Gallery>
      {HOTEL_IMGS.map(({ src, alt }, i) => (
        <Gallery.Figure key={i}>
          <Gallery.Image src={src} alt={alt} />
        </Gallery.Figure>
      ))}
    </Gallery>
    <HotelOverview />
    <HotelDetail />
  </Main.HotelView>
);

export default HotelInfo;
