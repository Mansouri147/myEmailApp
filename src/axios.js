import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:54514/",
});

export default instance;
