/* eslint-disable react/prop-types */
import React from 'react';

// styles
import * as Styled from './styled';

const HotelDetailReview = ({ reviews }) => (
  <Styled.Container>
    {reviews.map(({ text, name, date }, i) => (
      <Styled.Figure key={i}>
        <Styled.Blockquote>{text}</Styled.Blockquote>
        <Styled.Figcaption>
          <Styled.Photo />
          <Styled.User>
            <Styled.UserName>{name}</Styled.UserName>
            <Styled.UserDate>{date}</Styled.UserDate>
          </Styled.User>
        </Styled.Figcaption>
      </Styled.Figure>
    ))}
  </Styled.Container>
);

export default HotelDetailReview;
