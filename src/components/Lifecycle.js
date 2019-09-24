import React from 'react';
//生命周期函数学习
// 必须记住的生命周期函数：
//     *加载的时候：componentWillMount、 render 、componentDidMount（此时可放dom操作）
//     更新的时候：componentWillUpdate、render、componentDidUpdate
//     *销毁的时候： componentWillUnmount
class Lifecycle extends React.Component {
    constructor(props) {
        console.log('01构造函数---constructor');
        super(props);
        this.state = {
            msg: '我是一个msg'
        };
    }
    componentWillMount() {
        console.log('02组件将要挂载---componentWillMount');
    }
    componentDidMount() {
        console.log('04组件挂载完成---componentDidMount')
    }
    shouldComponentUpdate(nextProps, nextState) {
        //是否要更新数据  如果返回true才会执行更新数据的操作
        console.log('01是否要更新数据---shouldComponentUpdate');
        console.log(nextProps);
        console.log(nextState);
        return true;
    }
    componentWillUpdate() {
        console.log('02组件将要更新---componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('04组件数据更新完成---componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('组件销毁了---componentWillUnmount');
    }
    setMsg = () => {
        this.setState({
            msg: '我是改变后的msg的数据'
        })
    }
    render() {
        console.log('03数据渲染---render')
        return (
            <div>
                <button onClick={this.setMsg}>更新msg的数据</button>
            </div>
        );
    }
}

export default Lifecycle;