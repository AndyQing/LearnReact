import React, {useRef} from 'react';

/*这段代码可以直接写到containers文件夹的容器组件里面，
* 和containers/Count/index.jsx整合到一起
* */
function Count(props) {
  const {count, increase, decrease, increaseAsync} = props
  const refSelectNumber = useRef()
  const increment = () => {
    const {value} = refSelectNumber.current
    increase(Number(value))
  }
  const decrement = () => {
    const {value} = refSelectNumber.current
    decrease(Number(value))
  }
  const incrementIfOdd = () => {
    const {value} = refSelectNumber.current
    count % 2 !== 0 && increase(Number(value))
  }
  const incrementAsync = () => {
    const {value} = refSelectNumber.current
    increaseAsync(Number(value), 500)
  }
  return (
    <div>
      <h1>当前求和为:{count}</h1>
      <select name="" id="" ref={refSelectNumber}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>&nbsp;&nbsp;
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementIfOdd}>当前求和为奇数时+</button>
      <button onClick={incrementAsync}>异步+</button>
    </div>
  );
}

export default Count;