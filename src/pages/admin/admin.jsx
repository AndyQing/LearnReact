import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    render() {
        const user = memoryUtils.user
        // 如果内存没有存储user ==> 当前没有登陆
        if (!user || !user._id) {
            // 自动跳转到登陆(在render()中)
            return <Redirect to='/login' />
        }
        return (
            <div>
                <h2>hello {user.username}</h2>
            </div>
        );
    }
}