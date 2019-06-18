import styled from 'styled-components';

import Figure from './Figure';
import Image from './Image';

const Gallery = styled.div`
  display: flex;
`;

Gallery.Figure = Figure;
Gallery.Image = Image;

export default Gallery;
