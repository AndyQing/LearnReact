import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
// import Test from './components/AntdDemo'//自己测试的页面

function App() {
  return (
    <div className="App">
      {/* <Test></Test> */}
      <Router>
        {/* <Link to="/login">Login</Link>
        <Link to="/">Admin</Link> */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Admin} />
        </Switch>
      </Router>

      {/* 样式名包含变量 */}
      {/* {
        [1, 2, 3].map(function (index) {
          return <div className={'style' + index}>{index}</div>
        })
      } */}
    </div>
  );
}

export default App;
