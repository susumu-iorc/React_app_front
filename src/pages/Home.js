import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Shoplist from "./Shoplist";
import * as a from "../constants.js";
import { LinkButton } from "../components/parts/Button";
import { useEffect } from "react";

const Home = (props) => {
const navigate = useNavigate()



 

  if(props.loggedInStatus){
return (
  <Shoplist {...props} />
);
  }else{

  return (
<Login {...props}/>
  );
  };
};

export default Home;