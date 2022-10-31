import { ImLocation } from 'react-icons/im';
import {
  BookmarkPostedContainer,
  DataContainer,
  Heading,
  Image,
  Item,
  StarsPostedContainer,
  StyledBsBookmark,
  Text,
  TextContainer,
} from './JobItem.styled';
import { Stars } from 'components/Stars/Stars';
import { formatDistance } from 'date-fns';
import { useNavigate } from 'react-router';
export const JobItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Item
      onClick={() => navigate(`/details`, { replace: true, state: { item } })}
    >
      <Image src="https://via.placeholder.com/300/09f/fff.png" alt="alt" />
      <TextContainer>
        <DataContainer>
          <Heading>{item.title}</Heading>
          <Text>Department name • {item.name}</Text>
          <Text>
            <ImLocation />
            {item.address}
          </Text>
        </DataContainer>

        <StarsPostedContainer>
          <Stars value={5} />
          <BookmarkPostedContainer>
            <StyledBsBookmark />
            <Text>
              Posted {formatDistance(new Date(item.createdAt), new Date())}
            </Text>
          </BookmarkPostedContainer>
        </StarsPostedContainer>
      </TextContainer>
    </Item>
  );
};
