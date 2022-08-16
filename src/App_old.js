import logo from './logo.svg';
import './App.css';
import Header from './modules/Header';
import {Button} from '@material-ui/core';

function App() {
  return (
    <Header />
    <div className="formContainer">
      <form>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>メールアドレス</label>
            <input type="text" placeholder="メールアドレス" name="mailAddress" />
          </div>
          <div className="formField">
            <label>パスワード</label>
            <input type="text" placeholder="パスワード" name="password" />
          </div>
          <button className= "submitButton" variant="contained">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default App;