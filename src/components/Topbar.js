import React from 'react';

// blocks
import Header from '../blocks/Header';
import Search from '../blocks/Search';
import UserNav from '../blocks/UserNav';

// assets
import userPic from '../img/user.jpg';
import logo from '../img/logo.png';
import svgIcons from '../img/sprite.svg';

const USER_NAV_DATA = [
  { icon: '#icon-bookmark', count: 7 },
  { icon: '#icon-chat', count: 13 },
  { img: userPic, name: 'Jonas' }
];

const Topbar = () => (
  <Header>
    <Header.Logo src={logo} />
    <Search>
      <Search.Input placeholder="search hotels" />
      <Search.Button>
        <Search.Icon>
          <use href={`${svgIcons}#icon-magnifying-glass`}></use>
        </Search.Icon>
      </Search.Button>
    </Search>
    <UserNav>
      {USER_NAV_DATA.map((each, i) => {
        return 'icon' in each ? (
          <UserNav.Box key={i}>
            <UserNav.Icon>
              <use href={svgIcons + each.icon}></use>
            </UserNav.Icon>
            <UserNav.Notification>{each.count}</UserNav.Notification>
          </UserNav.Box>
        ) : (
          <UserNav.Box key={i}>
            <UserNav.Image src={each.img} alt="User Image" />
            <UserNav.User>{each.name}</UserNav.User>
          </UserNav.Box>
        );
      })}
    </UserNav>
  </Header>
);

export default Topbar;
