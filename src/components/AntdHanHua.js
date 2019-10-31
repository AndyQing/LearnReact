import React, { Component } from 'react';
import { Button, DatePicker, TimePicker, Popconfirm, Calendar, Radio } from 'antd';
// 用 ConfigProvider 汉化， LocaleProvider -已废弃
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import { ConfigProvider, LocaleProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');//en/zh-cn

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

class AntdDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 1,
      locale: enUS,
    };
  }

  render() {
    const { locale, type } = this.state;
    return (
      <div>
        <div className="change-locale">
          <span style={{ marginRight: 16 }}>Change locale of components: </span>
          <Radio.Group value={type} onChange={this.changeLocale}>
            <Radio.Button key="en" value={1}>
              English
            </Radio.Button>
            <Radio.Button key="cn" value={2}>
              中文
            </Radio.Button>
          </Radio.Group>
        </div>
        <LocaleProvider locale={locale}>
          <div>
            <Button type="primary">hello</Button>
            {/* 加上 value={moment()} ,月份才会显示中文 */}
            <Calendar fullscreen={false} value={moment()} />
            <DatePicker value={moment()} />
            <DatePicker />
            <TimePicker />
            <RangePicker
              defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
              format={dateFormat}
            />
            {/* cancelText="No" */}
            <Popconfirm title="Are you sure？" okText="Yes" >
              <a href="#">Delete</a>
            </Popconfirm>
          </div>
          <hr />
        </LocaleProvider>
      </div>
    );
  }
  changeLocale = e => {
    const localeValue = e.target.value;
    console.log("localeValue---", localeValue);
    this.setState({ type: localeValue });
    if (localeValue == 1) {
      moment.locale('en');
      this.setState({ locale: enUS });
    } else if (localeValue == 2) {
      moment.locale('zh-cn');
      this.setState({ locale: zhCN });
    }
  };
}


export default AntdDemo;