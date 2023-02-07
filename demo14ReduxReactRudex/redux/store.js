/*引入 createStore，用于创建redux的store对象 */
/*引入 applyMiddleware，用于接受中间件 */
import {createStore, applyMiddleware} from "redux";
/*引入 redux-thunk —— 异步action需要的中间件*/
import thunk from "redux-thunk";
/*引入 countReducer */
import countReducer from "./countReducer"

export default createStore(countReducer, applyMiddleware(thunk))