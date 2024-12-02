import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e29f39d1db8043fd9e4c78da36034bb5',
  },
});
