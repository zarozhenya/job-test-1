import axios from 'axios';

axios.defaults.baseURL =
  'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';

axios.defaults.headers = {
  Authorization: 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
};

export const fetchJobs = async () => {
  const response = await axios.get('');
  return response.data;
};
