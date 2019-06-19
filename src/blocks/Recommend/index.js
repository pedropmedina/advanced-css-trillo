import styled from 'styled-components';

import Count from './Count';
import Friends from './Friends';
import Photo from './Photo';

const Recommend = styled.div`
  font-size: 1.3rem;
  color: var(--color-grey-dark-3);
  display: flex;
  align-items: center;
`;

Recommend.Count = Count;
Recommend.Friends = Friends;
Recommend.Photo = Photo;

export default Recommend;
