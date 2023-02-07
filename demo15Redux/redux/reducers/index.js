import {combineReducers} from "redux";

import count from "./count"
import persons from "./person"

/*combineRudcers传入的对象的结构就是redux真正保存的state的结构。
* 这里是 {count:0,persons:[{...},{...}]}
* */
export default combineReducers({
  count,
  persons,
})