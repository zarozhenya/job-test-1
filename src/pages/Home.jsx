import { fetchJobs } from 'api/jsonGenereator';
import { JobList } from 'components/JobList/JobList';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchJobs().then(setJobs);
  }, []);
  return <JobList jobs={jobs} />;
};
