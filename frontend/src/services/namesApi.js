import axios from 'axios';

const namesApi = {
  getHealth() {
    return axios.get('/api/health');
  },
};

export { namesApi };
