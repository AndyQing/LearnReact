import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from '../model/router';

//路由模块化
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

        {
          routes.map((route, key) => {
            if (route.exact) {
              return <Route key={key} exact path={route.path}
                render={props => (
                  <route.component {...props} routes={route.children} />
                )
                } />
            } else {
              return <Route key={key} path={route.path}
                render={props => (
                  <route.component {...props} routes={route.children} />
                )
                } />
            }
          })
        }
      </Router>
    );
  }
}

export default RouterABC;