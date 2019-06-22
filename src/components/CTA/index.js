import React from 'react';

import * as Styled from './styled';

const CTA = () => (
  <Styled.Container>
    <Styled.Text>
      Good news! We have 4 free rooms for your selected date!
    </Styled.Text>
    <Styled.Button>
      <span>Book now</span>
      <span>Only 4 rooms left</span>
    </Styled.Button>
  </Styled.Container>
);

export default CTA;
