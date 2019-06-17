import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: var(--color-grey-light-2);

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(2px);
  }
`;

export default Button;
