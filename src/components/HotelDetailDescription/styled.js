import styled from 'styled-components';

import chevronThinRight from '../../assets/chevron-thin-right.svg';

import { mediaQueries } from '../../stylesShare';

export const Container = styled.div`
  font-size: 1.4rem;
  background-color: #fff;
  box-shadow: var(--shadow-light);
  padding: 3rem;
  flex: 0 0 60%;
  margin-right: 4.5rem;

  ${mediaQueries.tabletL`
    padding: 2rem;
    margin-right: 3rem;
  `}

  ${mediaQueries.phoneL`
    margin-right: 0;
    margin-bottom: 3rem;
  `}
`;

export const List = styled.ul`
  list-style: none;
  margin: 3rem 0;
  padding: 3rem 0;
  border-top: var(--line);
  border-bottom: var(--line);
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
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

export const Paragraph = styled.p`
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

export const RecommendFriends = styled.div`
  display: flex;
`;

export const FriendPhoto = styled.img`
  box-sizing: content-box;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 3px solid #fff;

  &:not(:last-child) {
    margin-right: -1.5rem;
  }
`;
