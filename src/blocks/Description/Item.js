import styled from 'styled-components';

import chevronThinRight from '../../img/chevron-thin-right.svg';

const Item = styled.li`
  flex: 0 0 50%;

  &::before {
    content: '';
    display: inline-block;
    height: 1rem;
    width: 1rem;
    margin-right: 0.7rem;

    /* Older browser suport  */
    /* background-image: url(${chevronThinRight});
    background-size: cover; */

    /* Newer browser - masks */
    background-color: var(--color-primary);
    mask-image: url(${chevronThinRight});
    mask-size: cover;
  }
`;

export default Item;
