/*
* 该文件用于创建action对象
* */
import {INCREMENT, DECREMENT} from "../constant";

/*同步action*/
export const increment = (data) => ({type: INCREMENT, data})
export const decrement = (data) => ({type: DECREMENT, data})

/*异步action，异步action中一般都会调用同步action。
*异步action不是必须的，异步操作（如网络请求）也可以在组件中完成*/
export const incrementAsync = (data, waitTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data))
    }, waitTime)
  }
}