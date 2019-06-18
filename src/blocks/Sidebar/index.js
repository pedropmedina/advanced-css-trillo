import styled from 'styled-components';

import List from './List';
import Item from './Item';
import Link from './Link';
import Text from './Text';
import Icon from './Icon';

const Sidebar = styled.nav`
  background-color: var(--color-grey-dark-1);
  flex: 0 0 18%;
  display: flex;
  flex-direction: column;
  font-size: 3.5rem;
`;

Sidebar.List = List;
Sidebar.Item = Item;
Sidebar.Link = Link;
Sidebar.Text = Text;
Sidebar.Icon = Icon;

export default Sidebar;
