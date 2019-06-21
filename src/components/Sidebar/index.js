import React from 'react';

// images and icons
import svgicons from '../../assets/sprite.svg';

// styles
import * as Styled from './styled';

const NAV_DATA = [
  { text: 'Hotel', icon: '#icon-home', modifiers: ['active'] },
  { text: 'Flight', icon: '#icon-aircraft-take-off' },
  { text: 'Car Rental', icon: '#icon-key' },
  { text: 'Tours', icon: '#icon-map' }
];

const Sidebar = () => (
  <Styled.Nav>
    <Styled.List>
      {NAV_DATA.map((item, i) => (
        <Styled.Item
          key={i}
          active={'modifiers' in item && item.modifiers.includes('active')}
        >
          <Styled.Link href="#">
            <Styled.Icon>
              <use href={svgicons + item.icon}></use>
            </Styled.Icon>
            <span>{item.text}</span>
          </Styled.Link>
        </Styled.Item>
      ))}
    </Styled.List>
  </Styled.Nav>
);

export default Sidebar;
