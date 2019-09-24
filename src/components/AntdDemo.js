import React, { Component } from 'react';
import { Button, Icon, DatePicker, Tree } from 'antd';
import styles from './EditableTree.less';

const { TreeNode } = Tree;
class AntdDemo extends React.Component {
  state = {
    data: [],
  };
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  render() {
    return (<div>
      <Button type="primary">hello</Button>
      <Icon type="step-backward" />
      <DatePicker></DatePicker>
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
      <Tree
        defaultExpandedKeys={['0-0-0', '0-0-1']}
        // defaultSelectedKeys={['0-0-0', '0-0-1']}
        // defaultCheckedKeys={['0-0-0', '0-0-1']}
        onSelect={this.onSelect}
        onCheck={this.onCheck}
      >
        <TreeNode title="云上贵州集团公司" key="0-0">
          <TreeNode title="云上贵州" key="0-0-0" >
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
}


export default AntdDemo;