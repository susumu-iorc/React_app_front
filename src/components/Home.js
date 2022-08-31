import { Link, useNavigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import * as a from "../constants.js";

const Home = (props) => {
  const navigate = useNavigate();  
  const handleSuccessfulAuthentication = (data) => {
    props.handleLogin(data)
    navigate("/dashboard",data)
  }

  return (
    <>
        <div>
            <h1>Home</h1>
            <h2>ログイン状態: {props.loggedInStatus}</h2>
            {/* 書き加え */}
            <Register handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
            <Login handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
            <h2>const出力</h2>
            ROOT_PATH = {a.API_URL}<br />
            LOGIN_PATH = {a.API_VERSION}<br />
            LOGIN_FULL_PATH = {a.API_SIGNIN_FULL_PATH}<br />
        </div>
    </>
  );
};

export default Home;