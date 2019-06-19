import styled from 'styled-components';

import Heading from './Heading';
import Starts from './Starts';
import Location from './Location';
import Rating from './Rating';
import RatingAvg from './RatingAvg';
import RatingCount from './RatingCount';
import Icon from './Icon';

const Overview = styled.div`
  display: flex;
  align-items: center;
  border-bottom: var(--line);
`;

Overview.Heading = Heading;
Overview.Starts = Starts;
Overview.Location = Location;
Overview.Rating = Rating;
Overview.RatingAvg = RatingAvg;
Overview.RatingCount = RatingCount;
Overview.Icon = Icon;

export default Overview;
