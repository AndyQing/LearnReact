import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Select,
  Input
} from 'antd'

const Item = Form.Item
const Option = Select.Option

/*
添加/修改用户的form组件
 */
class UserForm extends PureComponent {
  formRef = React.createRef();
  static propTypes = {
    setForm: PropTypes.func.isRequired, // 用来传递form对象的函数
    roles: PropTypes.array.isRequired,
    user: PropTypes.object
  }

  componentDidMount() {
    this.props.setForm(this.formRef.current)
  }

  render() {

    const { roles, user } = this.props
    // 指定Item布局的配置对象
    const formItemLayout = {
      labelCol: { span: 4 },  // 左侧label的宽度
      wrapperCol: { span: 15 }, // 右侧包裹的宽度
    }

    return (
      <Form {...formItemLayout} ref={this.formRef}>
        <Item label='用户名' name='username' initialValue={user.username}
          rules={[
            { required: true, message: '必须输入' }
          ]}>
          <Input placeholder='请输入用户名' />
        </Item>

        {
          user._id ? null : (
            <Item label='密码' name='password' initialValue={user.password}
              rules={[
                { required: true, message: '必须输入' }
              ]}>
              <Input type='password' placeholder='请输入密码' />
            </Item>
          )
        }

        <Item label='手机号' name='phone' initialValue={user.phone}
          rules={[
            { required: true, message: '必须输入' }
          ]}>
          <Input placeholder='请输入手机号' />
        </Item>
        <Item label='邮箱' name='email' initialValue={user.email}>
          <Input placeholder='请输入邮箱' />
        </Item>

        <Item label='角色' name='role_id' initialValue={user.role_id}>
          <Select placeholder='请选择角色'>
            {
              roles.map(role => <Option key={role._id} value={role._id}>{role.name}</Option>)
            }
          </Select>
        </Item>
      </Form>
    )
  }
}

export default UserForm