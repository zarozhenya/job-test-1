import styled from 'styled-components';
import { BsBookmark } from 'react-icons/bs';

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  border-radius: 8px;
  box-shadow: 2px 1px 7px rgba(0, 0, 0, 0.08),
    0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12);
  padding: 24px 16px;
`;

export const Image = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
`;

export const StarsPostedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  height: 100%;
  @media screen and (max-width: 699px) {
    order: -1;
    justify-content: space-between;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media screen and (min-width: 700px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BookmarkPostedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 50px;
`;

export const Heading = styled.h2`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.25;
  letter-spacing: -0.625px;
  color: #3a4562;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 16px;
  line-height: 1.56;
  letter-spacing: 0.23619px;
  color: #878d9d;
`;

export const StyledBsBookmark = styled(BsBookmark)`
  display: none;
  @media screen and (min-width: 700px) {
    display: block;
  }
`;
