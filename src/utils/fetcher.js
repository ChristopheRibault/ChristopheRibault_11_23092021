import axios from 'axios';
import data from './data.json';

class Fetcher {

  
   //TODO: Use Axios to fetch data when backend is ready

  constructor() {
    this.axios = axios.create({
      baseURL: '',
      timeout: 1000,
    });
  }

  async getAccomodations() {
    return data;
  }

  async getAccomodation(id) {
    return data.find(el => el.id === id);
  }
}

export default Fetcher;
