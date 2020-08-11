import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'
import { Layout } from 'antd';

import LeftNav from '../../components/left-nav'
import Header from '../../components/topheader'

const { Footer, Sider, Content } = Layout;
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
            // <div>
            //     <h2>hello {user.username}</h2>
            // </div>
            <Layout style={{ height: '100%' }}>
                <Sider><LeftNav /></Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        );
    }
}