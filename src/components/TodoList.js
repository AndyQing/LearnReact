import React from 'react';
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            list:[]
        };
    }
    addData=()=>{
        // alert(this.refs.title.value);
        var tempList=this.state.list;
        tempList.push(this.refs.title.value);
        this.refs.title.value='';//输入完成之后，清空输入框
        this.setState({
            list:tempList
        })

    }
    delData=(key)=>{
        // alert(key);
        var tempList=this.state.list;
        // tempList.pop();
        tempList.splice(key,1);
        this.setState({
            list:tempList
        })
    }
    render() {
        return (
            <div>
                <input ref='title' />
                <button onClick={this.addData}>增加+</button>
                <hr/>
                <h2>待办事项</h2>
                <h2>已完成事项</h2>
                <ul>
                {
                    // this.state.list.map(function(value,key){//此时this指向window，需要改成箭头函数
                    //     return (<li key={key}>{value}-----<button onClick={this.delData.bind(this,key)}>删除-</button></li>)
                    // })
                    this.state.list.map((value,key)=>{
                        return (<li key={key}>{value}-----<button onClick={this.delData.bind(this,key)}>删除-</button></li>)
                    })
                }
                </ul>
            </div>
        );
    }
}

export default TodoList;