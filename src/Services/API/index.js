import axios from "axios";

const Api = axios.create({
  baseURL: "https://kenzie-habits.herokuapp.com/",
});

export default Api;
