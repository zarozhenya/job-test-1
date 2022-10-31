import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 30px;
  @media screen and (min-width: 700px) {
    margin-top: 0;
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: #2a3047;
  padding: 20px 63px;
  width: 100%;
  @media screen and (min-width: 700px) {
    width: 400px;
  }
`;

export const Title = styled.p`
  z-index: 1;
  margin: 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.25;
  letter-spacing: -0.625px;

  color: #e7eaf0;
`;

export const Text = styled.p`
  z-index: 1;
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.5625px;

  color: #e8ebf3;
`;

export const Circle = styled.div`
  z-index: 0;
  position: absolute;
  left: -20%;
  top: -50%;
  width: 270px;
  height: 270px;
  background: #202336;
  border-radius: 50%;
`;

export const Image = styled.img`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 100%;
  @media screen and (min-width: 700px) {
    width: 400px;
  }
`;
