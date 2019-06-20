import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  background-color: var(--color-grey-dark-1);
  flex: 0 0 18%;
  display: flex;
  flex-direction: column;
  font-size: 3.5rem;
`;

export const List = styled.ul`
  font-size: 1.4rem;
  list-style: none;
  margin-top: 3.5rem;
`;

export const Item = styled.li`
  position: relative;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: var(--color-primary);
    transform: scaleY(0);
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
  }

  &:hover::before {
    transform: scaleY(1);
    width: 100%;
  }

  &:active::before {
    background-color: var(--color-primary-light);
  }

  /* modifier */
  ${({ active }) =>
    active &&
    css`
      &::before {
        transform: scaleY(1);
        width: 100%;
      }
    `}
`;

export const Link = styled.a`
  color: var(--color-grey-light-1);
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;
`;

export const Icon = styled.svg`
  width: 1.75rem;
  height: 1.75rem;
  margin-right: 2rem;
  fill: currentColor;
`;
