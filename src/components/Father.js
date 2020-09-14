import React from 'react';
import Header from './Header';
import Header2 from './Header2';
import Header3 from './Header3';
import Proptypes from 'prop-types';
class Father extends React.Component {
    //     总结：
    // 　　父组件需要用getChildContext()方法 return一个对象，里面以key：val的形式 传递你要传递的信息
    // 　　父组件要对要传输的值进行类型检测，否则会报错
    // 　　子组件要用this.context[key] 调用你需要的数据
    // 　　子组件也需要对你需要的值进行类型检测，否则没有该值
    getChildContext() { //现在父级组件里面这样去写你要传下去的数据
        return { color: "purple" };
    }
    static childContextTypes = {//在定义父组件之后  一定要写PropType（类型检测），否则报错，执行不了
        color: Proptypes.string
    };

    constructor(props) {
        super(props);
        // 方法3：创建用来保存ref标识的标签对象的容器
        this.pw = React.createRef()
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
        // alert(this.child.state.sonmsg);
        this.child.run();
        this.child3.run();
        // alert(this.refs.footer.state.sonmsg);
        // this.refs.footer.run();
        //方法3：
        console.log("this.pw---", this.pw.current);
        this.pw.current.run()
    }
    render() {
        return (
            // 父组件可以传值，也可以传方法给子组件,还可以把整个父组件传给子组件
            <div>
                {/* 方法1： */}
                {/* <Header title="haha" run={this.run} father={this} ref='footer' num={this.state.num} getSonData={this.getSonData}>header中间的文字对应props.children</Header> */}
                {/* 方法2： */}
                <Header2 onRef={(ref) => { this.child = ref; }}></Header2>
                <Header3 onRef={(ref) => { this.child3 = ref; }}></Header3>
                {/* 方法3： */}
                <Header3 ref={this.pw}></Header3>
                <hr />我是父组件内容
                <br />
                <button onClick={this.getSonRun}>获取整个子组件</button>
            </div>
        );
    }
}

export default Father;