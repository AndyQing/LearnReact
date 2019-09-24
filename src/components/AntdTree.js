import React, { Component } from 'react';
import { Tree } from 'antd';

//可拖动tree
const { TreeNode } = Tree;

const x = 3;
const y = 2;
const z = 1;

// const gData = [];
// const generateData = (_level, _preKey, _tns) => {
//   const preKey = _preKey || '0';
//   const tns = _tns || gData;

//   const content = [];
//   for (let i = 0; i < x; i++) {
//     const keys = `${preKey}-${i}`;
//     tns.push({ name: keys, keys });
//     if (i < y) {
//       content.push(keys);
//     }
//   }
//   if (_level < 0) {
//     return tns;
//   }
//   const level = _level - 1;
//   content.forEach((keys, index) => {
//     tns[index].content = [];
//     return generateData(level, keys, tns[index].content);
//   });
// };
// generateData(z);

const gData = [{
  "keys": "0-0",
  "name": "0-0",
  "defaultValue": "实施进度",
  "width": 10,
  "colCount": "2",
  "index": 1,
  "id": "1_1_1_5",
  "rowCount": "1",
  "content": [],
  "height": 10,
  "columnAttr": 1
}, {
  "keys": "0-1",
  "name": "0-1",
  "defaultValue": "云上贵州集团公司",
  "width": 10,
  "colCount": "1",
  "index": 3,
  "id": "1_1_1_6",
  "rowCount": "2",
  "content": [
    {
      "pos": 100100,
      "keys": "0-1-0",
      "name": "0-1-0",
      "defaultValue": "项目团队",
      "width": 10,
      "content": [],
      "height": 10,
      "columnAttr": 1
    },
    {
      "pos": 100200,
      "keys": "0-1-1",
      "name": "0-1-1",
      "defaultValue": "团队负责人",
      "width": 10,
      "content": [],
      "height": 10,
      "columnAttr": 1
    }
  ],
  "height": 10,
  "columnAttr": 1
}];


class Demo extends React.Component {
  state = {
    gData,
    expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
  };

  onDragEnter = info => {
    console.log(info);
    // expandedKeys 需要受控时设置
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  };

  onDrop = info => {
    console.log(info);
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data, keys, callback) => {
      data.forEach((item, index, arr) => {
        if (item.keys === keys) {
          return callback(item, index, arr);
        }
        if (item.content) {
          return loop(item.content, keys, callback);
        }
      });
    };
    const data = [...this.state.gData];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, item => {
        item.content = item.content || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.content.push(dragObj);
      });
    } else if (
      (info.node.props.content || []).length > 0 && // Has content
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, item => {
        item.content = item.content || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.content.unshift(dragObj);
      });
    } else {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }

    this.setState({
      gData: data,
    });
  };

  render() {
    console.log("gData---", gData);
    const loop = data =>
      data.map(item => {
        if (item.content && item.content.length) {
          return (
            <TreeNode key={item.keys} title={item.name}>
              {loop(item.content)}
            </TreeNode>
          );
        }
        return <TreeNode key={item.keys} title={item.name} />;
      });
    return (
      <Tree
        className="draggable-tree"
        defaultExpandedKeys={this.state.expandedKeys}
        draggable
        blockNode
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}
      >
        {loop(this.state.gData)}
      </Tree>
    );
  }
}



export default Demo;