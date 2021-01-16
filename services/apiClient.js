import axios from "axios";
const { HERO_API_BASE_URL, HERO_API_TOKEN } = process.env;

const instance = axios.create({
  baseURL: `${HERO_API_BASE_URL}/${HERO_API_TOKEN}/`,
  timeout: 6000,
});

export default instance;
