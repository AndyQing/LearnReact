import React, { Component } from 'react';
import { Button, DatePicker, TimePicker, Tree, Popconfirm } from 'antd';
import styles from './EditableTree.less';
import '../assets/css/home.css';
import { Icon } from '@ant-design/compatible';
// antd的学习：
const { TreeNode } = Tree;
const { RangePicker } = DatePicker;

class AntdDemo extends React.Component {
  state = {
    aaa: "123",
    data: [],

    isClickSmart: false,
    isClickTime: false,
    clickTimeTopFlag: true,
    clickSmartTopFlag: true,
  };
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info, this.props.aaa);
  };

  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info, this.props.aaa);
  };

  render() {
    return (<div>
      <Button type="primary">hello</Button>
      <Button>
        Actions <Icon type="caret-up" />
      </Button>
      <Button className={"sortbtn " + (this.state.isClickSmart ? 'on' : 'off')} onClick={() => { this.clickSmart(); }} >
        智能排序<span className="sorter">
          <div className='paixu'>
            <Icon type="caret-up" className={this.state.smarttop ? 'on' : 'off'} />
            <Icon type="caret-down" className={this.state.smarttop ? 'off' : 'on'} />
          </div>
        </span>
      </Button>
      <Button className={"sortbtn " + (this.state.isClickTime ? 'on' : 'off')} onClick={() => { this.clickTime(); }}>
        投标时间<span className="sorter">
          <div className='paixu'>
            <Icon type="caret-up" className={this.state.timetop ? 'on' : 'off'} />
            <Icon type="caret-down" className={this.state.timetop ? 'off' : 'on'} />
          </div>
        </span>
      </Button>

      <DatePicker />
      <TimePicker />
      <RangePicker style={{ width: 200 }} />
      <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
        <a href="#">Delete</a>
      </Popconfirm>
      {/* 可选择的树： */}
      <Tree
        checkable
        defaultExpandedKeys={['0-0-0', '0-0-1']}
        defaultSelectedKeys={['0-0-0', '0-0-1']}
        defaultCheckedKeys={['0-0-0', '0-0-1']}
        onSelect={this.onSelect}
        onCheck={this.onCheck}
      >
        <TreeNode title="menu-01" key="0-0">
          <TreeNode title="menu-0101" key="0-0-0" disabled>
            <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="menu-0102" key="0-0-1">
            <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
          </TreeNode>
        </TreeNode>
      </Tree>
      <hr />
      {/* 自定义图标的树： */}
      <Tree
        showIcon
        defaultExpandAll
        onSelect={this.onSelect}
        onCheck={this.onCheck}
      >
        <TreeNode title="云上贵州集团公司" key="0-0" icon={<Icon type="smile-o" />}>
          <TreeNode title="云上贵州" key="0-0-0" icon={<img src={require('../assets/images/icon_zhaobiao.png')} />}>
            <TreeNode title="项目团队" key="0-0-0-1" >
              <TreeNode title="123" key="0-0-0-1-1"></TreeNode>
              <TreeNode title="45678" key="0-0-0-1-2"></TreeNode>
            </TreeNode>

            <TreeNode title="团队负责人" key="0-0-0-2" />
          </TreeNode>
          <TreeNode title="用户单位" key="0-0-1">
            <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-1" />
          </TreeNode>
        </TreeNode>
      </Tree>
      <hr />
      {/* 带连接线的树： */}
      <Tree showLine defaultExpandedKeys={['0-0-0']}
        onSelect={this.onSelect}>
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0">
            <TreeNode title="leaf" key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
            <TreeNode title="leaf" key="0-0-0-2" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title="leaf" key="0-0-1-0" />
          </TreeNode>
          <TreeNode title="parent 1-2" key="0-0-2">
            <TreeNode title="leaf" key="0-0-2-0" />
            <TreeNode title="leaf" key="0-0-2-1" />
          </TreeNode>
        </TreeNode>
      </Tree>
    </div>);
  }

  clickSmart() {
    this.setState({
      isClickSmart: true,
      isClickTime: false,
      smarttop: this.state.clickSmartTopFlag,
      clickSmartTopFlag: !this.state.clickSmartTopFlag,
      //重置另一个排序
      clickTimeTopFlag: true,
    })
  }

  clickTime() {
    this.setState({
      isClickSmart: false,
      isClickTime: true,
      timetop: this.state.clickTimeTopFlag,
      clickTimeTopFlag: !this.state.clickTimeTopFlag,
      //重置另一个排序
      clickSmartTopFlag: true,
    })
  }

}


export default AntdDemo;