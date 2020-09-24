import React, { Component } from 'react';
import { Button, DatePicker, TimePicker, Tree, Popconfirm } from 'antd';
import styles from './EditableTree.less';
import '../assets/css/home.css';
import { Icon } from '@ant-design/compatible';
import { createFromIconfontCN } from '@ant-design/icons';
// antd的学习：
const { TreeNode } = Tree;
const { RangePicker } = DatePicker;
const HeartSvg = () => (
  <svg width="2em" height="2em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);
const HeartIcon = props => <Icon component={HeartSvg} {...props} />;
const MyIcon = createFromIconfontCN({
  scriptUrl: '/iconfont.js'
})
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

      <Icon type="step-backward" />
      <Icon component={HeartSvg} />
      <HeartIcon style={{ color: 'hotpink' }} />
      <MyIcon type='icon_jishi' style={{ fontSize: '20px' }}></MyIcon>
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