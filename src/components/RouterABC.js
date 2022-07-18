import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import ComA from './ComA'
import ComB from './ComB'
import ComC from './ComC'
import ComD from './ComD'
import News from './News'

class RouterABC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        {/* <Link to="/">ComA</Link><br />
        <Link to="/b">ComB</Link><br /> */}

        {/* 用NavLink来路由链接高亮： */}
        <NavLink to="/a" activeClassName='active-link'>ComA</NavLink><br />
        <NavLink to="/b" activeClassName='active-link'>ComB</NavLink><br />

        {/* 下面是两个传值的 */}
        {/* 1、动态路由传值 */}
        <Link to="/c/12">ComC</Link><br />
        {/* 2、get传值 */}
        <Link to="/d?did=34">ComD</Link><br />
        <Link to="/news">News</Link><br />

        <hr />

        <Switch>
          {/* exact开启精准匹配，默认是模糊匹配 */}
          <Route exact path="/a" component={ComA} />
          <Route path="/b" component={ComB} />
          {/* 重定向： */}
          {/* <Redirect from="/b" to="/" /> */}
          <Route path="/c/:cid" component={ComC} />
          <Route path="/d" component={ComD} />
        </Switch>
        <Route path="/news" component={News} />
      </Router>
    );
  }
}

export default RouterABC;