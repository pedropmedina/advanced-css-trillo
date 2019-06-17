import styled from 'styled-components';

const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: var(--color-grey-light-2);
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 100px;
  width: 90%;
  transition: all 0.2s;
  margin-right: -3.25rem;

  &:focus {
    outline: none;
    width: 100%;
    background-color: var(--color-grey-light-3);
  }

  &::placeholder {
    font-weight: 100;
    color: var(--color-grey-light-4);
  }
`;

export default Input;
