import React, { Component } from 'react';
import { Picker, List, Button, Toast, Carousel, WingBlank } from 'antd-mobile';
import PickerChild from './PickerChild'

// 官方文档链接：https://mobile.ant.design/docs/react/introduce-cn

const seasons = [
  [
    {
      label: '盐城',
      value: '盐城',
    },
    // {
    //   label: '2014',
    //   value: '2014',
    // },
  ],
  [
    {
      label: '亭湖区',
      value: '亭湖区',
    },
    {
      label: '建湖县',
      value: '建湖县',
    },
    {
      label: '盐都区',
      value: '盐都区',
    },

  ],
];

const colorStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  width: '16px',
  height: '16px',
  marginRight: '10px',
};

const colors = [
  {
    label:
      (<div>
        <span
          style={{ ...colorStyle, backgroundColor: '#FF0000' }}
        />
        <span>红色</span>
      </div>),
    value: '#FF0000',
  },
  {
    label:
      (<div>
        <span
          style={{ ...colorStyle, backgroundColor: '#00FF00' }}
        />
        <span>绿色</span>
      </div>),
    value: '#00FF00',
  },
  {
    label:
      (<div>
        <span
          style={{ ...colorStyle, backgroundColor: '#0000FF' }}
        />
        <span>蓝色</span>
      </div>),
    value: '#0000FF',
  },
];
const CustomChildren = props => (

  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', paddingLeft: 15 }}
  >
    <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
      <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
      <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
    </div>
  </div>
);


class AntdMobile extends React.Component {
  state = {
    data: [],
    cols: 1,
    pickerValue: [],
    asyncValue: [],
    sValue: ['盐城', '亭湖区'],
    visible: false,
    colorValue: ['#00FF00'],
  };
  onChangeColor = (color) => {
    this.setState({
      colorValue: color,
    });
  };

  pickerOk(v) {
    console.log(v);
    this.setState({ sValue: v })
  }
  showToast() {
    Toast.info('This is a toast tips !!!', 1);
  }
  render() {
    return (<div>
      {/* <WhiteSpace size="lg" />
      <List style={{ backgroundColor: 'white' }} className="picker-list"> */}
      <Button type="primary" onClick={this.showToast}>弹出toast</Button>
      <WingBlank>
        <Carousel className="my-carousel"
          vertical
          dots={false}
          dragging={false}
          swiping={false}
          autoplay
          infinite
        >
          <div className="v-item">carousel 1</div>
          <div className="v-item">carousel 2</div>
          <div className="v-item">carousel 3</div>
        </Carousel>
      </WingBlank>
      <Picker
        data={seasons}
        title=""
        cascade={false}
        extra="请选择(可选)"
        value={this.state.sValue}
        onChange={v => this.setState({ sValue: v })}
        // onOk={v => this.setState({ sValue: v })}
        onOk={this.pickerOk.bind(this)}
      >
        <PickerChild></PickerChild>
        {/* <CustomChildren>Customized children</CustomChildren> */}
        {/* <List.Item arrow="horizontal">Multiple</List.Item> */}
      </Picker>

      <Picker
        data={colors}
        value={this.state.colorValue}
        cols={1}
        onChange={this.onChangeColor}
      >
        <List.Item arrow="horizontal">Complex Labels</List.Item>
      </Picker>
      {/* </List> */}
    </div>);
  }
}


export default AntdMobile;