import React from 'react';
import '../assets/css/home.css';
import pic from '../assets/images/pic.jpg';
// var HelloWord=React.createClass({
//     render:function(){
//         return <p>hello</p>
//     }
// });
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: "我是home的组件",
            title: "i am a title",
            list1: [<h2>新闻1</h2>, <h2>新闻2</h2>],
            list2: [{ "name": "新闻1" }, { "name": "新闻2" }, { "name": "新闻3" }, { "name": "新闻4" }],
            input: '',
            inputStr: '默认input框内值',
            myStyle: {
                fontSize: 50,
                color: '#FF0000'
            }
        }
        // 改变this指向的方法2
        this.getMsg2 = this.getMsg2.bind(this);

    }

    //定义方法1：
    // run() {
    //     alert('我是一个run方法');
    // }
    //定义方法2：
    run = function () {
        alert('我是一个run方法222');
    }

    handleClick(tempStr, e) {
        e.preventDefault();
        console.log('链接被点击---' + tempStr);
        // return false;
    }

    // getMsg() {
    //     alert(this.state.msg);
    // }
    getMsg = function () {
        alert(this.state.msg);
    }
    getMsg2() {
        alert(this.state.msg);
    }

    getMsg3 = () => {
        alert(this.state.msg);
    }
    setMsg = () => {
        this.setState({
            msg: "我是home的组件---改变了"
        })
    }
    setTitle = (str) => {
        this.setState({
            title: str
        })
    }
    run2(event) {
        //事件对象
        // alert(event.target);
        event.target.style.background = 'red';
        //通过event.targe获取dom属性
        alert(event.target.getAttribute('aid'));
    }
    change = (e) => {
        console.log(e.target.value);
        // console.log(e.target.getAttribute('value'));
        this.setState({
            input: e.target.value
        })
    }
    change2 = (e) => {
        //获取dom节点，给元素设置ref属性，通过this.refs.username来获取dom
        // console.log(this.refs.username.getAttribute('aid'));
        let val = this.refs.username.value;
        //    let val=this.refs.username.getDOMNode().value;//此时getDOMNode is not a function
        console.log("val====" + val);
        this.setState({
            input: val
        })
    }
    getInput = (e) => {
        alert(this.state.input);
    }
    change3 = (e) => {
        this.setState({
            inputStr: e.target.value
        })
    }
    inputKeyUp = (e) => {
        console.log(e.keyCode);
        if (e.keyCode == 13) {
            alert(e.target.value);
        }
    }
    render() {
        return (
            <div>
                {/* <HelloWord></HelloWord> */}
                <div dangerouslySetInnerHTML={{ __html: '<h3>hello</h3>' }} />
                <h2>hello qingqing</h2>
                <h2 title={this.state.title}>{this.state.msg}</h2>
                <p className='red'>我是红色的文字</p>

                <label htmlFor='name'>name:</label>
                <input id='name'></input>

                <div style={{ marginLeft: '10px', color: 'red' }}>我是一个带有行内样式的元素</div>
                <div style={this.state.myStyle}>我是一个带有行内样式的元素</div>
                下面引入是错误的：
                <img src='../assets/images/pic.jpg' alt=""></img>
                引入本地图片的两种方法：
                方法1：
                <img src={pic} alt=""></img>
                方法2：
                <img src={require('../assets/images/pic.jpg')} alt=""></img>
                引入远程图片：
                <img src="https://www.baidu.com/img/bd_logo1.png" alt=''></img>
                <hr />
                {this.state.list1}
                <ul>
                    {
                        this.state.list2.map(function (value, key) {
                            return <li key={key}>{value.name}</li>
                        })
                    }
                </ul>
                <hr />
                <button onClick={this.run}>点击按钮</button>
                <br />
                <a href="#" onClick={this.handleClick.bind(this, '传参')}>点我</a>
                <br />
                <button onClick={this.getMsg.bind(this)}>获取数据---改变this指向的方法1：用bind（this）</button>
                <br />
                <button onClick={this.getMsg2}>获取数据---改变this指向的方法2：在构造方法中用bind（this）</button>
                <br />
                <button onClick={this.getMsg3}>获取数据---改变this指向的方法3：用箭头函数方式</button>
                <br />
                <button onClick={this.setMsg}>改变数据---改变this指向：用箭头函数方式</button>
                <br />
                <button onClick={this.setTitle.bind(this, 'zhangsan')}>执行方法传值</button>

                <hr />
                <button onClick={this.run2} aid='123'>事件对象演示</button>
                <br />
                <h2>表单事件</h2>
                <input onChange={this.change}></input>
                <button onClick={this.getInput}>获取input的值----方法1:通过事件对象event</button>
                <input ref="username" onChange={this.change2} aid='456'></input>
                <button onClick={this.getInput}>获取input的值--方法2：通过ref获取dom节点</button>
                双向数据绑定
                <p>{this.state.inputStr}</p>
                <input value={this.state.inputStr} onChange={this.change3}></input>
                <br />
                <h2>键盘事件</h2>
                <input onKeyUp={this.inputKeyUp}></input>
            </div>
        )
    }
}

export default Home;