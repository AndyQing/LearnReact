/*从react-redux中引入connect方法，用于连接UI组件和redux*/
import {connect} from "react-redux"

import {
  increment,
  decrement,
  incrementAsync,
} from "../../redux/actions/count"
import React, {useRef} from "react";

/*这段代码可以直接写到containers文件夹的容器组件里面，
* 和containers/Count/index.jsx整合到一起
* */
const Count = (props) => {
  const {count, increase, decrease, increaseAsync, personNum} = props
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
      <h3>下面的人数:{personNum}</h3>
      <select name="" id="" ref={refSelectNumber}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>&nbsp;&nbsp;
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementIfOdd}>当前求和为奇数时+</button>
      <button onClick={incrementAsync}>异步+</button>
      <hr/>
    </div>
  );
}


/*connect函数的参数，映射redux中的状态到UI组件的props*/
function mapStateToProps(state) {
  /*count可以在CountUI组件的props中找到*/
  return {count: state.count, personNum: state.persons.length}
}

/*connect函数的参数，映射redux中的dispatch方法到UI组件的props*/
function mapDispatchToProps(dispatch) {
  /*increase，decrease，increaseAsync可以在CountUI组件的props中找到*/
  return {
    increase: (data) => {
      dispatch(increment(data))
    },
    decrease: (data) => dispatch(decrement(data)),
    increaseAsync: (data, waitTime) => dispatch(incrementAsync(data, waitTime))
  }
}

/*使用connect函数连接UI组件和redux，并返回一个容器<组件>*/
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

// 或者简写
export default connect(
  /*mapStatetoProps可以实现组件通信，使得Count组件能够访问到persons*/
  (state) => ({count: state.count, personNum: state.persons.length}),
  /*这里mapDispatchToProps省略了dispatch的步骤，由react-redux内部自动dispatch*/
  {
    increase: increment,
    decrease: decrement,
    increaseAsync: incrementAsync
  })(Count)