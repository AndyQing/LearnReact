import ReactDOM from "react-dom"
import React from "react"
import App from "./App"
import "./index.css"
import store from "./redux/store"

import {Provider} from "react-redux"
/*使用react-redux提供的Provider组件。将store交给Provider管理，
* Provider组件可以自动将分析容器组件和UI组件，并将store传入容器组件
* */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById("root")
// )

/*通过redux的api订阅状态，状态改变则重新render*/
/*使用了react-redux就不用写监测了，默认容器组件就具有监测功能*/
// store.subscribe(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App/>
//     </React.StrictMode>,
//     document.getElementById("root")
//   )
// })
