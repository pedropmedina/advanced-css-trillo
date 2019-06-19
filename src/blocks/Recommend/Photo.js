import styled from 'styled-components';

const Photo = styled.img`
  box-sizing: content-box;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 3px solid #fff;

  &:not(:last-child) {
    margin-right: -1.5rem;
  }
`;

export default Photo;
