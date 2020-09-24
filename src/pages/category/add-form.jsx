import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Select,
  Input,
  InputNumber,
} from 'antd'

const Item = Form.Item
const Option = Select.Option
/*
添加分类的form组件
 */
const limitDecimalsF = (value) => {
  let reg = /^(-)*(\d+)\.(\d\d).*$/; return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',').replace(reg, '$1$2.$3');
};
const limitDecimalsP = (value) => {
  let reg = /^(-)*(\d+)\.(\d\d).*$/;
  return value.replace(/￥\s?|(,*)/g, '').replace(reg, '$1$2.$3');
};
class AddForm extends Component {
  formRef = React.createRef();
  static propTypes = {
    setForm: PropTypes.func.isRequired, // 用来传递form对象的函数
    categorys: PropTypes.array.isRequired, // 一级分类的数组
    parentId: PropTypes.string.isRequired, // 父分类的ID
  }

  componentWillMount() {
    // this.props.setForm(this.props.form)//3X写法,
  }
  componentDidMount() {
    this.props.setForm(this.formRef.current)//该方法不能写在componentWillMount中
  }
  render() {

    const { categorys, parentId } = this.props
    // const { getFieldDecorator } = this.props.form

    return (
      <Form ref={this.formRef}>
        <Item name='parentId' initialValue={parentId}>
          {/* {
            getFieldDecorator('parentId', {
              initialValue: parentId
            })( */}
          <Select>
            <Option value='0'>一级分类</Option>
            {
              categorys.map(c => <Option value={c._id}>{c.name}</Option>)
            }
          </Select>
          {/* ) */}
          {/* } */}

        </Item>

        <Item name='categoryName'
          initialValue=''
          rules={[
            { required: true, message: '分类名称必须输入' }
          ]}>
          {/* {
            getFieldDecorator('categoryName', {
              initialValue: '',
              rules: [
                {required: true, message: '分类名称必须输入'}
              ]
            })( */}
          <Input placeholder='请输入分类名称' />
          {/* )
          } */}
        </Item>
        {/* 个人测试，输入的金额会有逗号分隔 */}
        <Item name='price'>
          <InputNumber
            style={{ width: 180 }}
            min={0}
            maxLength={13}

            // precision={2}//precision加了之后，还是会可输入超过2位的，但是失去焦点后会四舍五入
            // formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            // parser={value => value.replace(/\$\s?|(,*)/g, '')}

            //用下面的方法即可实现逗号分隔，又能只限制2位小数的输入
            formatter={limitDecimalsF}
            parser={limitDecimalsP}
            placeholder='请输入预算' />
        </Item>
        {/* 个人测试，验证输入的号码*/}
        <Item name='mobile'
          rules={[
            {
              pattern: /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/,
              message: '联系方式不正确'
            }
          ]}>
          <Input
            type='phone'
            maxLength={15}
            placeholder='请输入电话或手机号码' />
        </Item>
      </Form>
    )
  }
}

export default AddForm