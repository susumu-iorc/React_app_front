import { Link, useNavigate } from "react-router-dom";
import Signin from "./Signin"
import Login from "./Login";
import Logout from "./Logout";
import * as a from "../constants.js";
const Home = (props) => {
  const navigate = useNavigate();  
  const handleSuccessfulAuthentication = (data) => {
    props.handleLogin(data)
    navigate("/dashboard",data)
  }
  const handleLogoutSuccessfulAuthentication = (data) => {
    props. handleLogout(data)
    navigate("/dashboard",data)
  }
 
  return (
    <>
        <div>
            <h1>Home</h1>
            <h2>ログイン状態: {props.loggedInStatus ? "ログイン" : "ログアウト"}</h2>
            {/* 書き加え */}
            <Signin handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
            <Login handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
            <Logout handleLogout={props.handleLogout} handleLogoutSuccessfulAuthentication={handleLogoutSuccessfulAuthentication} apiUserTokens={props.apiUserTokens} reloadEnable={props.reloadEnable} reloadDisable={props.reloadDisable}/>
            <Link to="/base">BASEへ</Link><br />
            <Link to="/shoplist">SHOPLISTへ</Link>

        </div>
    </>
  );
};

export default Home;