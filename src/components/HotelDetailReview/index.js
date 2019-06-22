/* eslint-disable react/prop-types */
import React from 'react';

// styles
import * as Styled from './styled';
import { InfiniteBtn } from '../../stylesShare';

// images and data
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';

const USERS_IMG = [
  { src: user1, alt: 'User 1' },
  { src: user2, alt: 'User 2' }
];

const HotelDetailReview = ({ reviews }) => (
  <Styled.Container>
    {reviews.map(({ text, name, date, rating }, i) => (
      <Styled.Review key={i}>
        <Styled.Text>{text}</Styled.Text>
        <Styled.User>
          <Styled.UserPhoto src={USERS_IMG[i].src} atl={USERS_IMG[i].alt} />
          <Styled.UserDetail>
            <Styled.UserName>{name}</Styled.UserName>
            <Styled.UserDate>{date}</Styled.UserDate>
          </Styled.UserDetail>
          <Styled.UserRating>{rating}</Styled.UserRating>
        </Styled.User>
      </Styled.Review>
    ))}
    <InfiniteBtn>
      Sholl all <span>&rarr;</span>
    </InfiniteBtn>
  </Styled.Container>
);

export default HotelDetailReview;
