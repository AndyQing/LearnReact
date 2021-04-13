import React, { Component } from 'react';
import { Select  } from 'antd';

const { Option } = Select;
class AntdDemo extends React.Component {
  state = {
    data: [],
  };
  handleChange = (value,index) => {
    console.log(`selected ${value}`,index);
  }

  render() {
    return (
      <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
        <Option value="jack11" index='11'>Jack</Option>
        <Option value="lucy22" index='22'>Lucy</Option>
        <Option value="disabled33" disabled index='33'>
          Disabled
        </Option>
        <Option value="Yiminghe44" index='44'>yiminghe</Option>
      </Select>
    );
  }
}


export default AntdDemo;