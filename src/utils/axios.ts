import axios from 'axios';

axios.interceptors.request.use((config) => {
  // eslint-disable-next-line @typescript-eslint/dot-notation
  config.headers['token'] = window.localStorage.getItem('token');
  return config;
});

// eslint-disable-next-line import/prefer-default-export
export { axios };
