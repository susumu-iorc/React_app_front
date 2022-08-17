import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
      <>
        <h1>だっしゅぼーど</h1>
        <div>
          新規登録は<Link to={`/register/`}>こちら</Link>
        </div>
      </>
    );
  };
  
  export default Dashboard;