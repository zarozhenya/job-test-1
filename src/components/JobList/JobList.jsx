import { JobItem } from 'components/JobItem/JobItem';
import { List } from './JobList.styled';

export const JobList = ({ jobs }) => {
  return (
    <List>
      {jobs.map(item => (
        <li key={item.id}>
          <JobItem item={item} />
        </li>
      ))}
    </List>
  );
};
