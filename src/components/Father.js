import React from 'react';
import Header from './Header';
class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'hello qing',
            num: 123//num如果是字符串的话，控制台会报错，因为子组件设置了Header.propTypes
        };
    }
    run = () => {
        alert('我是父组件run方法');
    }
    getDate = () => {
        alert(this.state.title);
    }
    //获取子组件传过来的数据
    getSonData = (result) => {
        alert(result);
    }
    //父组件调用子组件的数据和方法
    getSonRun = () => {
        // alert(this.refs.footer.state.sonmsg);
        this.refs.footer.run();
    }
    render() {
        return (
            // 父组件可以传值，也可以传方法给子组件,还可以把整个父组件传给子组件
            <div><Header title="haha" run={this.run} father={this} ref='footer' num={this.state.num} getSonData={this.getSonData}>header中间的文字对应props.children</Header>
                <hr />我是父组件内容
                <br />
                <button onClick={this.getSonRun}>获取整个子组件</button>
            </div>
        );
    }
}

export default Father;