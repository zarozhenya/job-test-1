import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  border: none;
  padding: 18px 30px;
  background: #384564;
  border-radius: 8px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  text-decoration: none;
  padding: 18px;
  background: rgba(56, 69, 100, 0.14);
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: uppercase;

  color: #3a4562;
`;

export const Container = styled.div`
  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: flex-start;
    gap: 30px;
  }
`;

export const List = styled.ul`
  display: flex;
  margin: 30px 0;
  padding: 0;
  list-style: none;
  gap: 30px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.5625px;
  color: #3a4562;
`;
