const initState = 99

/*
* 创建一个Reducer函数，且Reducer必须是一个纯函数
* 该函数接受两个参数，prevState，action
* */
export default function count(prevState = initState, action) {
  console.log(prevState)
  const {type, data} = action
  // debugger
  switch (type) {
    case "increment":
      return prevState + data
    case "decrement":
      return prevState - data
    default:
      return prevState
  }
}