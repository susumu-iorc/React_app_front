import { Link } from "react-router-dom";

const Dashboard = (props) => {
    return (
      <>
        <div>
            <h1>Dashboard</h1>
            <h2>ログイン状態: {props.loggedInStatus ? "ログイン" : "ログアウト"}</h2>
            <Link to="/">Homeへ</Link>
        </div>
      </>
    );
  };
  
  export default Dashboard;