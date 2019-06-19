import styled from 'styled-components';

import Paragraph from './Paragraph';
import List from './List';
import Item from './Item';

const Description = styled.div`
  font-size: 1.4rem;
  background-color: #fff;
  box-shadow: var(--shadow-light);
  padding: 3rem;
  flex: 0 0 60%;
  margin-right: 4.5rem;
`;

Description.Paragraph = Paragraph;
Description.List = List;
Description.Item = Item;

export default Description;
