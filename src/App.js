import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Helllo';
import Home from './components/Home';
import TodoList from './components/TodoList2';
import ReactForm from './components/ReactForm';
import Father from './components/Father';
import AjaxCom from './components/AjaxCom';
import Axios from './components/Axios';
import FetchJsonp from './components/FetchJsonp';
import Lifecycle from './components/Lifecycle';
import RouterABC from './components/RouterABC2';
import CreatClass from './components/CreatClassDemo';

// import AntdMobile from './components/AntdMobile';
// import 'antd-mobile/dist/antd-mobile.css'; 

import AntdDemo from './components/AntdDemo';
import AntdTable from './components/AntdTable';
import AntdTree from './components/AntdTree';
import EditableTree from './components/EditableTree4';
import AntdLayout from './components/AntdLayout';
import AnchorCom from './components/AnchorCom2';
import ImgCom from './components/ImgCom';
import GetAllKeys from './components/GetAllKeys';
import AntdHanHua from './components/AntdHanHua';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Hello></Hello> */}
      {/* <Home></Home> */}
      {/* <ReactForm></ReactForm> */}
      {/* <TodoList></TodoList> */}
      <Father></Father>
      {/* 网络请求 */}
      {/* <AjaxCom></AjaxCom>
        <Axios></Axios> 
        <hr/>
        <FetchJsonp></FetchJsonp>  */}

      {/* <Lifecycle></Lifecycle> */}
      {/* <RouterABC></RouterABC> */}

      {/* antd的学习： */}
      <AntdDemo aaa='from app.js'></AntdDemo>
      {/* <AntdHanHua></AntdHanHua> */}
      {/* <AntdTable></AntdTable> */}
      {/* <AntdTree></AntdTree> */}
      <hr />
      <EditableTree></EditableTree>
      {/* <AntdLayout></AntdLayout> */}

      {/* antd mobile的学习： */}
      {/* <AntdMobile></AntdMobile> */}

      {/* <AnchorCom></AnchorCom> */}

      {/* <CreatClass num='123'></CreatClass> */}
      {/* 点击放大图片 */}
      {/* <ImgCom></ImgCom> */}
      {/* <GetAllKeys></GetAllKeys> */}

      {/* 样式名包含变量 */}
      {
        [1, 2, 3].map(function (index) {
          return <div className={'style' + index}>{index}</div>
        })
      }
    </div>
  );
}

export default App;
