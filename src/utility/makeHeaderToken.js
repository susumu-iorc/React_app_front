
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const makeHeaderToken = {"access-token": cookies.get("access-token"), "client": cookies.get("client"), "uid": cookies.get("uid")}
export default makeHeaderToken