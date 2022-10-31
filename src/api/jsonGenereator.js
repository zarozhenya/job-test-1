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

// export const fetchCity = async (lat, lon) => {
//   const response = await fetch(
//     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&language=en-EN&sensor=true&key=AIzaSyA8-xuwn10TwDrhLUoJL2bJGK0UmPMYOho`
//   );
//   const data = await response.json();
//   return data;
// };
