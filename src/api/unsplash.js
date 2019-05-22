import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID aced0d338c47ca4355ab55070e14c53f0c7fe3e4142b65d9f99af8da967b495e'
  }
});