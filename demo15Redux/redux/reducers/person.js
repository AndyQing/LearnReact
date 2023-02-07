import {ADD_PERSON} from "../constant";

const initState = []
export default function persons(prevState = initState, action) {
  switch (action.type) {
    case ADD_PERSON:
      //这里不能用数组的push或者unshift等等方法，会让组件不更新
      return [action.data, ...prevState]
    default:
      return prevState
  }

}