import styled from 'styled-components';

export const Option = styled.div`
  padding: 17px;
  background: ${p => p.background};
  border: 1px solid ${p => p.border};
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  text-align: center;
  letter-spacing: -0.457143px;
  color: ${p => p.color};
  @media screen and (min-width: 900px) {
    width: 220px;
  }
`;
