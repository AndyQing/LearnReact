import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, Button } from 'antd'
import ReactEcharts from 'echarts-for-react'

/*
柱状图+折线图组件
 */
class Bar extends Component {
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
            color: ['#5b9bd5', '#ed7d31', '#a5a5a5', '#ffc000', '#4472c4', '#70ad47', '#255e91'],
            title: {
                // text: 'ECharts 入门示例'
                text: title
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    // console.log('params----', params)
                    let res = params[0].name + ':<br/>';
                    for (let i = 0; i < params.length; i++) {
                        if (params[i].seriesType == 'line') {
                            res += params[i].seriesName + ':' + params[i].value + '%<br/>';
                        } else {
                            res += params[i].seriesName + ':' + params[i].value + '万元<br/>';
                        }
                    }
                    return res
                }
            },
            legend: {
                // data: ['销量', '库存']
                itemGap: 5,//图例每项之间的间隔,默认是10
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: xAxis_data,
                axisLabel: {
                    interval: 0, rotate: 35,//使x轴title倾斜
                    formatter: function (params) {//对x轴title进行处理，超长显示'...'
                        // console.log(params)
                        var newParamsName = "";// 最终拼接成的字符串
                        if (params.length > 8) {
                            newParamsName = params.substring(0, 8) + '...'
                        } else {
                            newParamsName = params
                        }
                        return newParamsName
                    }
                },
            },
            yAxis: [{
                type: 'value',
                name: '单位：不含税，万元',
                // min: 0,
                // max: 1000,
            }, {
                type: 'value',
                // min: 0,
                // max: 100,
                axisLabel: {
                    formatter: '{value}%'
                },
                splitLine: {
                    show: false//不显示网格线
                },
            }]
        }
        let arrTemp = [];
        let legend_data = [];
        for (let item in datas) {
            if (datas.hasOwnProperty(item)) {
                // console.log('item---', item)
                legend_data.push(item);
                let tempObj = {
                    name: item,
                    type: datas[item].type,
                    data: datas[item].data,
                }
                if (datas[item].type == 'line') {
                    tempObj.yAxisIndex = 1;
                    // tempObj.tooltip = {
                    //     formatter: '{a}<br/>{b}: {c}%'
                    // }
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
    title: PropTypes.string,
    xAxis_data: PropTypes.array.isRequired,
    datas: PropTypes.object.isRequired,
}
export default Bar