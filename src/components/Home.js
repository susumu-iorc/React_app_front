import { Link } from "react-router-dom";
import Register from "./Register";

const Home = (props) => {
  return (
    <>
      <h1>ホーム</h1>
      <div>
        新規登録は<Link to={`/register/`}>こちら</Link>
      </div>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
            <h1>Home</h1>

            {/* 追加する */}
            <h2>ログイン状態: {props.loggedInStatus}</h2>
            <Register  />
        </div>
    </>
  );
};

export default Home;