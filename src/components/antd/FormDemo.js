import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Item = Form.Item // 不能写在import之前
//推荐使用 Form.useForm 创建表单数据域
export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    formRef = React.createRef();

    onReset = () => {
        this.formRef.current.resetFields();
    };
    onFill = () => {
        this.formRef.current.setFieldsValue({
            username: 'Hello world!',
            password: '123',
        });
    };
    render() {

        // await和async作用：1、消灭.then成功或失败的回调函数 2、以同步编码（没有回调函数了）方式实现异步流程
        const onFinish = async (values) => {
            console.log('Success:', values);
            const { username, password } = values
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        return (
            <div>
                <section>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        ref={this.formRef}
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

                        <Item>
                            <Button type="primary" htmlType="submit">登陆</Button>
                            <Button htmlType="button" onClick={this.onReset}>
                                重置
                            </Button>
                            <Button type="link" htmlType="button" onClick={this.onFill}>
                                填充form
                            </Button>
                        </Item>
                    </Form>
                </section>

            </div>
        );
    }
}