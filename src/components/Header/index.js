import React from 'react';

// styles
import * as Styled from './styled';

// logo and icons
import logo from '../../assets/logo.png';
import svgicons from '../../assets/sprite.svg';
import userpic from '../../assets/user.jpg';

// user navigation data
const USER_NAV_DATA = [
  { icon: '#icon-bookmark', count: 7 },
  { icon: '#icon-chat', count: 13 },
  { img: userpic, name: 'Jonas' }
];

const Header = () => (
  <Styled.Header>
    <Styled.Logo src={logo} />
    <Styled.Search>
      <Styled.SearchInput placeholder="search hotels" />
      <Styled.SearchButton>
        <Styled.SearchIcon>
          <use href={`${svgicons}#icon-magnifying-glass`}></use>
        </Styled.SearchIcon>
      </Styled.SearchButton>
    </Styled.Search>
    <Styled.UserNav>
      {USER_NAV_DATA.map((each, i) => {
        return 'icon' in each ? (
          <Styled.UserBox key={i}>
            <Styled.UserIcon>
              <use href={svgicons + each.icon}></use>
            </Styled.UserIcon>
            <Styled.UserNotification>{each.count}</Styled.UserNotification>
          </Styled.UserBox>
        ) : (
          <Styled.UserBox key={i}>
            <Styled.UserPhoto src={each.img} alt="User Image" />
            <span>{each.name}</span>
          </Styled.UserBox>
        );
      })}
    </Styled.UserNav>
  </Styled.Header>
);

export default Header;
