import styled from 'styled-components';

import Input from './Input';
import Button from './Button';
import Icon from './Icon';

const Search = styled.form`
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  > input:focus + button {
    background-color: var(--color-grey-light-3);
  }
`;

Search.Input = Input;
Search.Button = Button;
Search.Icon = Icon;

export default Search;
