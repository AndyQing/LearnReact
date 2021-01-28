import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, Button } from 'antd'
import ReactEcharts from 'echarts-for-react'

/*
柱状图+折线图组件
 */
export default class Bar extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props == nextProps) {
            return false
        }
        return true
    }

    render() {
        return (
            <ReactEcharts option={this.getOption()} />
        )
    }
    /*
   返回柱状图的配置对象
    */
    getOption = () => {
        let { title, xAxis_data, datas } = this.props;
        let option = {
            title: {
                // text: 'ECharts 入门示例'
                text: title
            },
            tooltip: {},
            legend: {
                // data: ['销量', '库存']
            },
            xAxis: {
                type: 'category',
                data: xAxis_data
            },
            yAxis: [{
                type: 'value',
                min: 0,
                max: 1000,
            }, {
                type: 'value',
                axisLabel: {
                    formatter: '{value} %'
                }
            }]
        }
        let arrTemp = [];
        let legend_data = [];
        for (let item in datas) {
            if (datas.hasOwnProperty(item)) {
                console.log('item---', item)
                legend_data.push(item);
                let tempObj = {
                    name: item,
                    type: datas[item].type,
                    data: datas[item].data,
                }
                if (datas[item].type == 'line') {
                    tempObj.yAxisIndex = 1;
                }
                arrTemp.push(tempObj)
            }
        }
        console.log('data---', legend_data, arrTemp)
        option.legend.data = legend_data
        // option.legend = { data: legend_data }
        option.series = arrTemp;
        return option
    }


}
Bar.propTypes = {
    title: PropTypes.string.isRequired,
    xAxis_data: PropTypes.array.isRequired,
}