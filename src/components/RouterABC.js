import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import comA from './comA'
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
        <ul>
          <li>
            <Link to="/">ComA</Link>
          </li>
          <li>
            <Link to="/b">ComB</Link>
          </li>
          {/* 下面是两个传值的 */}
          {/* 1、动态路由传值 */}
          <li>
            <Link to="/c/12">ComC</Link>
          </li>
          {/* 2、get传值 */}
          <li>
            <Link to="/d?did=34">ComD</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/" component={comA} />
          {/* <Route path="/b" component={ComB} /> */}
          <Redirect from="/b" to="/" />
          <Route path="/c/:cid" component={ComC} />
          <Route path="/d" component={ComD} />
        </Switch>
        <Route path="/news" component={News} />
      </Router>
    );
  }
}

export default RouterABC;