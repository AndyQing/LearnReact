import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, Button } from 'antd'
import ReactEcharts from 'echarts-for-react'

/*
后台管理的柱状图路由组件
 */
export default class Bar extends Component {

    state = {
        sales: [5, 20, 36, 10, 10, 20], // 销量的数组
        stores: [6, 10, 25, 20, 15, 10], // 库存的数组
    }
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
        let { title, yAxis_data, datas } = this.props;
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
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: yAxis_data
            },
            // series: [{
            //     name: '销量',
            //     type: 'bar',
            //     data: sales
            // }, {
            //     name: '库存',
            //     type: 'bar',
            //     data: stores
            // }]
        }
        let arrTemp = [];
        let legend_data = [];
        for (let item in datas) {
            if (datas.hasOwnProperty(item)) {
                console.log('item---', item)
                legend_data.push(item);
                arrTemp.push({
                    name: item,
                    type: 'bar',
                    data: datas[item]
                })
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
    // title: PropTypes.string.isRequired,
    yAxis_data: PropTypes.array.isRequired,
}