import { ImLocation } from 'react-icons/im';

import {
  Circle,
  Image,
  Text,
  TextWrapper,
  Title,
  Wrapper,
} from './MapCard.styled';

export const MapCard = ({ item }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Circle></Circle>
        <Title>
          Department name.
          <br />
          {item.name}.
        </Title>
        <Text>
          <ImLocation /> {item.address}
        </Text>
        <Text>{item.phone}</Text>
        <Text>{item.email}</Text>
      </TextWrapper>

      <Image
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${item.location.lat},${item.location.long}&zoom=10&size=400x200&maptype=roadmap%20&markers=color:blue%7Clabel:∙%7C50.789381%2C14.304316&style=element:geometry%7Cinvert_lightness:true&style=feature:landscape.natural.terrain%7Celement:geometry%7Cvisibility:on&style=feature:landscape%7Celement:geometry.fill%7Ccolor:0x303030&style=feature:poi%7Celement:geometry.fill%7Ccolor:0x404040&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0x222222&style=feature:water%7Celement:geometry%7Ccolor:0x333333&style=feature:transit%7Celement:geometry%7Cvisibility:on%7Ccolor:0x101010&style=feature:road%7Celement:geometry.stroke%7Cvisibility:on&style=feature:road.local%7Celement:geometry.fill%7Ccolor:0x606060&style=feature:road.arterial%7Celement:geometry.fill%7Ccolor:0x888888feature:road.local%7Celement:geometry.fill%7Ccolor:0x606060feature:road|color:0x606060|visibility:simplified&key=AIzaSyA8-xuwn10TwDrhLUoJL2bJGK0UmPMYOho`}
        alt="map"
      />
    </Wrapper>
  );
};
