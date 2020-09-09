import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Input
} from 'antd'

const Item = Form.Item

/*
更新分类的form组件
TODO 有个bug，点击修改第一个，然后展示对应name，再点第二个后，还是显示第一个name
 */
class UpdateForm extends Component {
  formRef = React.createRef();
  static propTypes = {
    categoryName: PropTypes.string.isRequired,
    setForm: PropTypes.func.isRequired
  }

  componentWillMount() {
    // 将form对象通过setForm()传递父组件
    // this.props.setForm(this.props.form)
  }
  componentDidMount() {
    this.props.setForm(this.formRef.current)//该方法不能写在componentWillMount中
  }

  render() {

    const { categoryName } = this.props
    console.log("name---", categoryName);
    // const { getFieldDecorator } = this.props.form

    return (
      <Form ref={this.formRef}>
        <Item name='categoryName'
          initialValue={categoryName}
          rules={[
            { required: true, message: '分类名称必须输入' }
          ]}>
          {/* {
            getFieldDecorator('categoryName', {
              initialValue: categoryName,
              rules: [
                {required: true, message: '分类名称必须输入'}
              ]
            })( */}
          <Input placeholder='请输入分类名称' />
          {/* )
          } */}
        </Item>
      </Form>
    )
  }
}

export default UpdateForm