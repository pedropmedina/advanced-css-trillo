import styled from 'styled-components';

import Logo from './Logo';

const Header = styled.header`
  font-size: 1.4rem;
  height: 7rem;
  background-color: #fff;
  border-bottom: 1px solid var(--color-grey-light-1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

Header.Logo = Logo;

export default Header;
