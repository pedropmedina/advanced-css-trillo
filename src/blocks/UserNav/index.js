import styled from 'styled-components';

import Box from './Box';
import Icon from './Icon';
import Notification from './Notification';
import Image from './Image';
import User from './User';

const UserNav = styled.nav`
  align-self: stretch;
  display: flex;
  align-items: center;

  > * {
    padding: 0 2rem;
    cursor: pointer;
    height: 100%;
  }

  > *:hover {
    background-color: var(--color-grey-light-2);
  }
`;

UserNav.Box = Box;
UserNav.Icon = Icon;
UserNav.Notification = Notification;
UserNav.Image = Image;
UserNav.User = User;

export default UserNav;
