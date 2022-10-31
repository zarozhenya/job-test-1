import { fetchJobs } from 'api/jsonGenereator';
import { JobList } from 'components/JobList/JobList';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);
  return <JobList jobs={jobs} />;
};
