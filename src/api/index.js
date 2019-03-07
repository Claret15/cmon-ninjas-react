import axios from 'axios';

export default axios.create({
  baseURL: "https://cmon-ninjas.herokuapp.com/api/"
});