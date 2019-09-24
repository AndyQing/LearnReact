import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
class ComB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false
        };
    }
    jump = () => {
        this.setState({
            flag: true
        })
    }
    render() {
        if (this.state.flag) {
            return <Redirect to={{ pathname: '/' }} />
            // 或者下面的写法：
            // return <Redirect to='/' />
        }
        return (
            <div>ComB页面
                <br></br>
                <button onClick={this.jump}>点击跳转到ComA页面</button>
            </div>
        );
    }
}

export default ComB;