import React from 'react';
import Storage from '../model/storage'
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: '111',
                    check: true,
                },
                {
                    name: '222',
                    check: false,
                },
                {
                    name: '333',
                    check: false,
                }
            ]
        };
    }
    addData = (e) => {
        // alert(this.refs.title.value);
        if (e.keyCode == 13) {
            var tempList = this.state.list;
            //方法1：
            // var tempObj=new Object();
            // tempObj.name=this.refs.title.value;
            // tempObj.check=false;
            // tempList.push(tempObj);
            //方法2：
            tempList.push({
                name: this.refs.title.value,
                check: false
            })
            this.refs.title.value = '';//输入完成之后，清空输入框
            this.setState({
                list: tempList
            })
            // localStorage.setItem('todolist',JSON.stringify(this.state.list));
            Storage.set('todolist', tempList);
        }
    }
    delData = (key) => {
        var tempList = this.state.list;
        tempList.splice(key, 1);
        this.setState({
            list: tempList
        })
        // localStorage.setItem('todolist',JSON.stringify(this.state.list));
        Storage.set('todolist', tempList);
    }
    checkboxChange = function (key) {
        var tempList = this.state.list;
        tempList[key].check = !tempList[key].check;
        this.setState({
            list: tempList
        })
        // localStorage.setItem('todolist',JSON.stringify(this.state.list));
        Storage.set('todolist', tempList);
    }
    //生命周期函数,页面加载就会触发
    componentDidMount() {
        // var list=JSON.parse(localStorage.getItem('todolist'));
        var list = Storage.get('todolist');
        if (list) {
            this.setState({
                list: list
            })
        }
    }
    render() {
        return (
            <div>
                TodoList:<input ref='title' onKeyUp={this.addData} />
                {/* <button onClick={this.addData}>增加+</button> */}
                <hr />
                <h2>待办事项</h2>
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            if (!value.check) {
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.check} onChange={this.checkboxChange.bind(this, key)}></input>{value.name}-----<button onClick={this.delData.bind(this, key)}>删除-</button>
                                    </li>)
                            }
                        })
                    }
                </ul>
                <hr />
                <h2>已完成事项</h2>
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            if (value.check) {
                                return (<li key={key}><input type="checkbox" checked={value.check} onChange={this.checkboxChange.bind(this, key)}></input>{value.name}-----<button onClick={this.delData.bind(this, key)}>删除-</button></li>)
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;