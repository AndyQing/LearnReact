import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
  //测试宽度超出100%
  // { title: 'Name', dataIndex: 'name', width: '60%'},
  // { title: 'Age', dataIndex: 'age',  width: '50%' },
  // { title: 'address', dataIndex: 'address',  width: '10%' },

  { title: 'Name', dataIndex: 'name', key: 'name', width: 100, fixed: 'left' },
  { title: 'Age', dataIndex: 'age', key: 'age', width: '100px', fixed: 'left' },
  {
    title: 'Address这是一个超长字符看看会不会换行然后是否出现表格对不齐的问题',
    dataIndex: 'address', key: 'address', width: 100, ellipsis: true
  },
  {
    title: 'description', dataIndex: 'description', width: 300
  },
  {
    title: 'Action',
    dataIndex: 'x',
    key: 'x',
    width: 80,//设置50时，最短显示70多
    render: () => <a>Delete</a>,
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];
class AntdDemo extends React.Component {
  state = {
    data: [],
  };
  render() {
    return (<Table
      columns={columns}
      // expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
      dataSource={data}
      scroll={{ x: 200 }}
    />);
  }
}


export default AntdDemo;