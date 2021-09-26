import axios from 'axios';
import data from './data.json';

class Fetcher {

  constructor() {
    this.axios = axios.create({
      baseURL: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1',
      timeout: 1000,
    });
  }

  async getAccomodations() {
    return data;
  }

  async getAccomodation(id) {
    return data.find(el => el.id === id)
  }
}

export default Fetcher
