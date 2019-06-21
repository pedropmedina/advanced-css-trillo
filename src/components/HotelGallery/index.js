import React from 'react';

// styles
import * as Styled from './styled';

// assets
import hotel1 from '../../assets/hotel1.jpg';
import hotel2 from '../../assets/hotel2.jpg';
import hotel3 from '../../assets/hotel3.jpg';

// hotel and friends images metadata
const HOTEL_IMGS = [
  { src: hotel1, alt: 'Photo for hotel 1' },
  { src: hotel2, alt: 'Photo for hotel 2' },
  { src: hotel3, alt: 'Photo for hotel 3' }
];

const HotelGallery = () => (
  <Styled.GalleryContainer>
    {HOTEL_IMGS.map(({ src, alt }, i) => (
      <figure key={i}>
        <Styled.GalleryPhoto src={src} alt={alt} />
      </figure>
    ))}
  </Styled.GalleryContainer>
);

export default HotelGallery;
