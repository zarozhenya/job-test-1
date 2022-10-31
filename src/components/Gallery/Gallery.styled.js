import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 16px;
  display: flex;
  overflow-y: scroll;
  @media screen and (min-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const Image = styled.img`
  border-radius: 8px;
`;
