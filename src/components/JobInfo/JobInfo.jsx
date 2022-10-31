import { formatDistance } from 'date-fns';
import {
  Heading,
  HeadingSalaryContainer,
  Subheading,
  Text,
  Title,
} from './JobInfo.styled';

export const JobInfo = ({ item }) => {
  return (
    <div style={{ marginTop: '32px' }}>
      <HeadingSalaryContainer>
        <Heading>{item.title}</Heading>
        <div style={{ flexShrink: 0 }}>
          <Title>€{item.salary.replaceAll('k', ' 000')}</Title>
          <Text>Brutto, per year</Text>
        </div>
      </HeadingSalaryContainer>

      <Subheading>
        Posted {formatDistance(new Date(item.createdAt), new Date())}
      </Subheading>
      <Text style={{ marginBottom: '20px' }}>{item.description}</Text>
    </div>
  );
};
