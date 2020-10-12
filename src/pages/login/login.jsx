import React from 'react';
import { Redirect } from 'react-router-dom'
// import './login.less';//使用less文件没有反应
import './login.css';
import logo from '../../assets/images/logo.png';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { reqLogin } from '../../api'

import { connect } from 'react-redux'//step1
import { login } from '../../redux/actions'//step2

const Item = Form.Item // 不能写在import之前

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    render() {
        // 如果用户已经登陆, 自动跳转到管理界面
        const user = this.props.user;
        if (user && user._id) {
            return <Redirect to='/home' />
        }
        // await和async作用：1、消灭.then成功或失败的回调函数 2、以同步编码（没有回调函数了）方式实现异步流程
        const onFinish = async (values) => {
            console.log('Success:', values);
            const { username, password } = values
            this.props.login(username, password);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div className='login'>
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>React项目: 后台管理系统</h1>
                </header>
                <section className="login-content">
                    <div className={user.errorMsg ? 'error-msg show' : 'error-msg'}>{user.errorMsg}</div>
                    <h2>用户登陆</h2>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Item
                            name="username"
                            rules={[
                                { required: true, message: '用户名必须输入' },
                                { min: 2, message: '用户名至少2位' },
                                { max: 12, message: '用户名最多12位' },
                                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
                            ]}
                            initialValue='admin'
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="用户名" />
                        </Item>

                        <Item
                            name="password"
                            rules={[{ required: true, message: '密码必须输入' }]} >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="密码" />
                        </Item>

                        <Item >
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆</Button>
                        </Item>
                    </Form>
                </section>

            </div>
        );
    }
}
export default connect(
    state => ({ user: state.user }),
    { login }
)(Login)