import { Button, Form, Input, Select } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import React from 'react';
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const App = () => {
    const [form] = Form.useForm();

    const onGenderChange = (value) => {
        switch (value) {
            case 'male':
                form.setFieldsValue({
                    note: 'Hi, man!',
                });
                return;

            case 'female':
                form.setFieldsValue({
                    note: 'Hi, lady!',
                });
                return;

            case 'other':
                form.setFieldsValue({
                    note: 'Hi there!',
                });
        }
    };

    function onFinish(values) {
        console.log('onFinish-------', values);
        form.validateFields()//触发表单验证
            .then((values) => {
                form.resetFields();
                //   onCreate(values);
            })
            .catch((info) => {
                console.log('Validate Failed---:', info);
            });
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
        });
    };

    return (
        <Form {...layout} form={form} name="control-hooks"
            // requiredMark={false}//必填时不显示*号
            requiredMark="optional"//不必填时不显示‘可选’
            onFinish={onFinish}>
            <Form.Item
                name="note"
                label="Note"
                rules={[
                    {
                        required: true,
                    },
                    // {
                    //     type: 'url',
                    //     warningOnly: true,
                    // },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="gender"
                label="Gender"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    placeholder="Select a option and change input text above"
                    onChange={onGenderChange}
                    allowClear
                >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
            >
                {({ getFieldValue }) =>
                    getFieldValue('gender') === 'other' ? (
                        <Form.Item
                            name="customizeGender"
                            label="Customize Gender"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    ) : null
                }
            </Form.Item>
            <Form.Item
                label="Field B"
                tooltip={{
                    title: 'Tooltip with customize icon',
                    icon: <InfoCircleOutlined />,
                }}
            >
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
                <Button type="link" htmlType="button" onClick={onFill}>
                    Fill form
                </Button>
            </Form.Item>
        </Form>
    );
};

export default App;