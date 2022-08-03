import React from 'react';
// 转发 refs 到 DOM 组件
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));

// function FancyButton(props) {//这样会报警告，常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref
//   console.log("props---", props)
//   return <button className="FancyButton">
//     {props.children}
//   </button>
// }
export default FancyButton