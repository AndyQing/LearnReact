import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name', width: '100' },
  { title: 'Age', dataIndex: 'age', key: 'age', width: '100px' },
  { title: 'Address', dataIndex: 'address', key: 'address', width: 100 },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    width: 50,
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
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };
  render() {
    return (<Table
      columns={columns}
      expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
      dataSource={data}
      scroll={{ x: 200 }}
    />);
  }
}


export default AntdDemo;