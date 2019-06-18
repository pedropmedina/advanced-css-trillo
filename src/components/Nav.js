import React from 'react';

import Sidebar from '../blocks/Sidebar';

import svgIcons from '../img/sprite.svg';

const NAV_DATA = [
  { text: 'Hotel', icon: '#icon-home', modifiers: ['active'] },
  { text: 'Flight', icon: '#icon-aircraft-take-off' },
  { text: 'Car Rental', icon: '#icon-key' },
  { text: 'Tours', icon: '#icon-map' }
];

const Nav = () => (
  <Sidebar>
    <Sidebar.List>
      {NAV_DATA.map((item, i) => (
        <Sidebar.Item
          key={i}
          active={'modifiers' in item && item.modifiers.includes('active')}
        >
          <Sidebar.Link href="#">
            <Sidebar.Icon>
              <use href={svgIcons + item.icon}></use>
            </Sidebar.Icon>
            <Sidebar.Text>{item.text}</Sidebar.Text>
          </Sidebar.Link>
        </Sidebar.Item>
      ))}
    </Sidebar.List>
  </Sidebar>
);

export default Nav;
