import styled, { css } from 'styled-components';

const Item = styled.li`
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

export default Item;
