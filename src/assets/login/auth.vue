import axios from "axios";
import Cookies from "js-cookie";

const  URL = 'http://localhost:3000';
export default {
  setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },
  getUserLogged() {
    return Cookies.get("userLogged");
  },
  register(username, password) {
    const user = { username, password };
    return axios.post(URL + "regiser", user);
  },
  login(username, password) {
    const user = { username, password };
    return axios.post(URL + "login", user);
  }
};
