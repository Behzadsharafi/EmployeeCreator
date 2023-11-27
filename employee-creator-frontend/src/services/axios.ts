import axios from "axios";

const hostDomain = `http://localhost:8080/`;

const instance = axios.create({
  baseURL: hostDomain,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
