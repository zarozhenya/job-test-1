import { AiFillStar } from 'react-icons/ai';
import { Container } from './Stars.styled';
export const Stars = ({ value }) => {
  return (
    <Container>
      {Array(value)
        .fill('')
        .map((_, idx) => (
          <li key={idx}>
            <AiFillStar size={19} color="#38415D" />
          </li>
        ))}
    </Container>
  );
};
