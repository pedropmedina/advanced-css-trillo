import React from 'react';

// styles
import * as Styled from './styled';
import { InfiniteBtn } from '../../stylesShare';

// text data for description and reviews
import textdata from '../../img/text.json';

// assets
import svgicons from '../../img/sprite.svg';
import hotel1 from '../../img/hotel1.jpg';
import hotel2 from '../../img/hotel2.jpg';
import hotel3 from '../../img/hotel3.jpg';
import user3 from '../../img/user3.jpg';
import user4 from '../../img/user4.jpg';
import user5 from '../../img/user5.jpg';
import user6 from '../../img/user6.jpg';

// hotel and friends images metadata
const HOTEL_IMGS = [
  { src: hotel1, alt: 'Photo for hotel 1' },
  { src: hotel2, alt: 'Photo for hotel 2' },
  { src: hotel3, alt: 'Photo for hotel 3' }
];

const FRIENDS_IMGS = [
  { src: user3, alt: 'Friend 1' },
  { src: user4, alt: 'Friend 2' },
  { src: user5, alt: 'Friend 3' },
  { src: user6, alt: 'Friend 4' }
];

const HotelView = () => (
  <Styled.MainContainer>
    {/*  Gallery shows hotel photos  */}
    <Styled.Gallery>
      {HOTEL_IMGS.map(({ src, alt }, i) => (
        <figure key={i}>
          <Styled.GalleryPhoto src={src} alt={alt} />
        </figure>
      ))}
    </Styled.Gallery>

    {/* Hotel Overview provides brief description of the hotel */}
    <Styled.Overview>
      <Styled.OverviewHeading>Hotel, Las Palmas</Styled.OverviewHeading>

      <Styled.OverviewStars>
        {[...Array(5)].map((_, i) => (
          <Styled.OverviewIcon key={i}>
            <use href={svgicons + '#icon-star'}></use>
          </Styled.OverviewIcon>
        ))}
      </Styled.OverviewStars>

      <Styled.OverviewLocation>
        <Styled.OverviewIcon>
          <use href={svgicons + '#icon-location-pin'}></use>
        </Styled.OverviewIcon>
        <InfiniteBtn>Albufeira, Portugal</InfiniteBtn>
      </Styled.OverviewLocation>

      <Styled.OverviewRating>
        <Styled.RatingAvg>8.6</Styled.RatingAvg>
        <Styled.RatingCount>246</Styled.RatingCount>
      </Styled.OverviewRating>
    </Styled.Overview>

    {/* Detailed informating including recommendations ans user's reviews */}
    <Styled.DetailContainer>
      <Styled.Description>
        {textdata.descriptions.map((desc, i) => (
          <Styled.DescriptionParagraph key={i}>
            {desc}
          </Styled.DescriptionParagraph>
        ))}
        <Styled.DescriptionList>
          {textdata.features.map((feat, i) => (
            <Styled.DescriptionItem key={i}>{feat}</Styled.DescriptionItem>
          ))}
        </Styled.DescriptionList>
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
      </Styled.Description>

      <Styled.Review>
        {textdata.reviews.map((review, i) => (
          <Styled.ReviewFigure key={i}>
            <Styled.ReviewBlockquote>{review.text}</Styled.ReviewBlockquote>
            <Styled.ReviewFigcaption>
              <Styled.ReviewPhoto />
              <Styled.ReviewUser>
                <Styled.ReviewUserName>{review.name}</Styled.ReviewUserName>
                <Styled.ReviewUserDate>{review.date}</Styled.ReviewUserDate>
              </Styled.ReviewUser>
            </Styled.ReviewFigcaption>
          </Styled.ReviewFigure>
        ))}
      </Styled.Review>
    </Styled.DetailContainer>
  </Styled.MainContainer>
);

export default HotelView;
