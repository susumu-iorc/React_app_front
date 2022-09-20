import { useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import Shoplist from "./Shoplist";
import Base from "./Base";
import { Box, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
const Home = (props) => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const msg = state?.msg ? state.msg : 0
  if(props.loggedInStatus){
    if( isNaN( props.userBase.userLat ) || isNaN( props.userBase.userLat )){
      navigate("/base",{state:{"msg":1}, replace: false})
      return (      
      <Base {...props} msg={1}/>
      );
    }else{
     return (
      <Shoplist {...props} />
      );
    }
  }else{
    return (
      <>
        <Box display={(msg == 1)? 'block' : 'none'}>
          <Alert status='success' margin={"2"} >
            <AlertIcon />
            <AlertTitle>ユーザー登録完了</AlertTitle>
            <AlertDescription>ログインしてください</AlertDescription>
          </Alert>
        </Box>
        <Login {...props}/>
      </>
    );
  };
};

export default Home;