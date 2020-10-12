import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import { connect } from 'react-redux'

import LeftNav from '../../components/left-nav'
import Header from '../../components/topheader'
import Home from '../home'
import Category from '../category/index'
import Product from '../product'
import Role from '../role'
import User from '../user'
import Order from '../order'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import NotFound from '../not-found/not-found'

const { Footer, Sider, Content } = Layout;
class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    render() {
        const user = this.props.user
        // 如果内存没有存储user ==> 当前没有登陆
        if (!user || !user._id) {
            // 自动跳转到登陆(在render()中)
            return <Redirect to='/login' />
        }
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
                    <Content style={{ margin: 20, backgroundColor: '#fff' }}>
                        <Switch>
                            <Redirect from='/' exact to='/home' />
                            <Route path='/home' component={Home} />
                            <Route path='/category' component={Category} />
                            <Route path='/product' component={Product} />
                            <Route path='/user' component={User} />
                            <Route path='/role' component={Role} />
                            <Route path="/charts/bar" component={Bar} />
                            <Route path="/charts/pie" component={Pie} />
                            <Route path="/charts/line" component={Line} />
                            <Route path="/order" component={Order} />
                            <Route component={NotFound} />
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center', color: '#cccccc' }}>Footer</Footer>
                </Layout>
            </Layout>
        );
    }
}
export default connect(
    state => ({ user: state.user }),
    {}
)(Admin)