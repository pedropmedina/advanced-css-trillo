import React from 'react';

// images
import user3 from '../img/user3.jpg';
import user4 from '../img/user4.jpg';
import user5 from '../img/user5.jpg';
import user6 from '../img/user6.jpg';

// text data for description and reviews
import textdata from '../img/text.json';

// UI elements and blocks
import Div from '../elements/Div';
import Description from '../blocks/Description';
import Review from '../blocks/Review';
import Recommend from '../blocks/Recommend';

const FRIENDS_DATA = [
  { src: user3, alt: 'Friend 1' },
  { src: user4, alt: 'Friend 2' },
  { src: user5, alt: 'Friend 3' },
  { src: user6, alt: 'Friend 4' }
];

const HotelDetail = () => (
  <Div.Detail>
    <Description>
      {textdata.descriptions.map((desc, i) => (
        <Description.Paragraph key={i}>{desc}</Description.Paragraph>
      ))}
      <Description.List>
        {textdata.features.map((feat, i) => (
          <Description.Item key={i}>{feat}</Description.Item>
        ))}
      </Description.List>
      <Recommend>
        <Recommend.Count>
          Lucy and 3 other friends recommend this hotel.
        </Recommend.Count>
        <Recommend.Friends>
          {FRIENDS_DATA.map(({ src, alt }, i) => (
            <Recommend.Photo key={i} src={src} alt={alt} />
          ))}
        </Recommend.Friends>
      </Recommend>
    </Description>
    <Review>User reviews</Review>
  </Div.Detail>
);

export default HotelDetail;
