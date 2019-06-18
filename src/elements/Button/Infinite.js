import styled, { keyframes } from 'styled-components';

const pulsate = keyframes`
  0% {
    transform: scale(1);
    box-shadow: none;
  }

  50% {
    transform: scale(1.05);
    box-shadow: 0 1rem 4rem rgba(0,0,0,.25);
  }

  100% {
    transform: scale(1);
    box-shadow: none;
  }
`;

const Infinite = styled.button`
  border: none;
  color: var(--color-primary);
  font-size: inherit;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
  display: inline-block;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: var(--color-grey-dark-1);
  }

  &:focus {
    outline: none;
    animation: ${pulsate} 1s infinite;
  }
`;

export default Infinite;
