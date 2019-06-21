/* eslint-disable react/prop-types */
import React from 'react';

// styles
import * as Styled from './styled';

// assets
import user3 from '../../assets/user3.jpg';
import user4 from '../../assets/user4.jpg';
import user5 from '../../assets/user5.jpg';
import user6 from '../../assets/user6.jpg';

// hotel and friends images metadata
const FRIENDS_IMGS = [
  { src: user3, alt: 'Friend 1' },
  { src: user4, alt: 'Friend 2' },
  { src: user5, alt: 'Friend 3' },
  { src: user6, alt: 'Friend 4' }
];

const HotelDetailDescription = ({ descriptions, features }) => (
  <Styled.Container>
    {descriptions.map((desc, i) => (
      <Styled.Paragraph key={i}>{desc}</Styled.Paragraph>
    ))}
    <Styled.List>
      {features.map((feat, i) => (
        <Styled.Item key={i}>{feat}</Styled.Item>
      ))}
    </Styled.List>
    <Styled.Recommend>
      <Styled.RecommendCount>
        Lucy and 3 other friends recommend this hotel.
      </Styled.RecommendCount>
      <div>
        {FRIENDS_IMGS.map(({ src, alt }, i) => (
          <Styled.RecommendPhoto key={i} src={src} alt={alt} />
        ))}
      </div>
    </Styled.Recommend>
  </Styled.Container>
);

export default HotelDetailDescription;
