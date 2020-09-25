import React from 'react';
import { Redirect } from 'react-router-dom'
// import './login.less';//使用less文件没有反应
import './login.css';
import logo from '../../assets/images/logo.png';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { reqLogin } from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'

const Item = Form.Item // 不能写在import之前

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    render() {
        // 如果用户已经登陆, 自动跳转到管理界面
        const user = memoryUtils.user
        if (user && user._id) {
            return <Redirect to='/' />
        }
        // await和async作用：1、消灭.then成功或失败的回调函数 2、以同步编码（没有回调函数了）方式实现异步流程
        const onFinish = async (values) => {
            console.log('Success:', values);
            const { username, password } = values
            const result = await reqLogin(username, password) // {status: 0, data: user}  {status: 1, msg: 'xxx'}
            // console.log('请求成功', result)
            if (result.status === 0) { // 登陆成功
                // 提示登陆成功
                message.success('登陆成功')

                // 保存user
                const user = result.data
                memoryUtils.user = user // 保存在内存中
                storageUtils.saveUser(user) // 保存到local中

                // 跳转到管理界面 (不需要再回退回到登陆)
                this.props.history.replace('/home')
            } else { // 登陆失败
                // 提示错误信息
                message.error(result.msg)
            }
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