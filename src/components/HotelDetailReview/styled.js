import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Review = styled.figure`
  background-color: #fff;
  box-shadow: var(--shadow-light);
  padding: 3rem;
  margin-bottom: 3.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '\u201c';
    position: absolute;
    top: -3.25rem;
    left: -1rem;
    line-height: 1;
    font-size: 20rem;
    color: var(--color-grey-light-2);
    font-family: sans-serif;
    z-index: 1;
  }
`;

export const Text = styled.blockquote`
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;
`;

export const User = styled.figcaption`
  display: flex;
  align-items: center;
`;

export const UserPhoto = styled.img`
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  margin-right: 1.5rem;
`;

export const UserDetail = styled.div`
  margin-right: auto;
`;

export const UserDate = styled.p`
  font-size: 1rem;
  color: var(--color-grey-dark-3);
`;

export const UserName = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
`;

export const UserRating = styled.div`
  color: var(--color-primary);
  font-size: 2.2rem;
  font-weight: 300;
`;
