import { Link, useNavigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

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
        </div>
    </>
  );
};

export default Home;