import styled from 'styled-components';

import chevronThinRight from '../../img/chevron-thin-right.svg';

export const MainContainer = styled.main`
  background-color: #fff;
  flex: 1;
`;

export const Gallery = styled.div`
  display: flex;
`;

export const GalleryPhoto = styled.img`
  width: 100%;
  display: block;
`;

export const Overview = styled.div`
  display: flex;
  align-items: center;
  border-bottom: var(--line);
`;

export const OverviewHeading = styled.h1`
  font-size: 2.25rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 1.5rem 3rem;
`;

export const OverviewStars = styled.div`
  margin-right: auto;
  display: flex;
`;

export const OverviewLocation = styled.div`
  font-size: 1.2rem;
  display: flex;
  vertical-align: center;
`;

export const OverviewIcon = styled.svg`
  width: 1.75rem;
  height: 1.75rem;
  fill: var(--color-primary);
  margin-right: 0.5rem;
`;

export const OverviewRating = styled.div`
  background-color: var(--color-primary);
  color: #fff;
  margin-left: 3rem;
  padding: 0 2.25rem;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RatingAvg = styled.div`
  font-size: 2.25rem;
  font-weight: 300;
  margin-bottom: -3px;
`;

export const RatingCount = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const DetailContainer = styled.div`
  display: flex;
  padding: 4.5rem;
  background-color: var(--color-grey-light-1);
  border-bottom: var(--line);
`;

export const Description = styled.div`
  font-size: 1.4rem;
  background-color: #fff;
  box-shadow: var(--shadow-light);
  padding: 3rem;
  flex: 0 0 60%;
  margin-right: 4.5rem;
`;

export const DescriptionList = styled.ul`
  list-style: none;
  margin: 3rem 0;
  padding: 3rem 0;
  border-top: var(--line);
  border-bottom: var(--line);
  display: flex;
  flex-wrap: wrap;
`;

export const DescriptionItem = styled.li`
  flex: 0 0 50%;

  &::before {
    content: '';
    display: inline-block;
    height: 1rem;
    width: 1rem;
    margin-right: 0.7rem;

    /* Older browser suport  */
    /* background-image: url(${chevronThinRight});
    background-size: cover; */

    /* Newer browser - masks */
    background-color: var(--color-primary);
    mask-image: url(${chevronThinRight});
    mask-size: cover;
  }
`;

export const DescriptionParagraph = styled.p`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

export const Recommend = styled.div`
  font-size: 1.3rem;
  color: var(--color-grey-dark-3);
  display: flex;
  align-items: center;
`;

export const RecommendCount = styled.p`
  margin-right: auto;
`;

export const RecommendPhoto = styled.img`
  box-sizing: content-box;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 3px solid #fff;

  &:not(:last-child) {
    margin-right: -1.5rem;
  }
`;

export const Review = styled.div`
  background-color: greenyellow;
  flex: 1;
`;

export const ReviewBlockquote = styled.blockquote``;

export const ReviewFigcaption = styled.figcaption``;

export const ReviewFigure = styled.figure``;

export const ReviewPhoto = styled.img``;

export const ReviewUser = styled.div``;

export const ReviewUserDate = styled.p``;

export const ReviewUserName = styled.p``;
