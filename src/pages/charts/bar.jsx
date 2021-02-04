import React, { Component } from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import HorBar from '../../components/bar/horizontalBar'
import NormalLineBar from '../../components/bar/normalLineBar'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
    render() {
        return (
            <div>
                <div id="main" style={{ width: 400, height: 400 }}>bar</div>
                <HorBar title='图表1'
                    yAxis_data={["总预算", "已立项", "已采购", "已执行",]}
                    datas={{ '金额': [80, 20, 36, 10] }}
                    zhanbi={{ '总预算': '100%', '已立项': '10%', '已采购': '20%', '已执行': '30%', }}
                />
                <NormalLineBar
                    // title='图表2'
                    xAxis_data={["固定资产折旧费这个名字挺长的", "固定资产折旧费", "板块3", "板块4",]}
                    datas={{
                        '总预算': { type: 'bar', data: [529, 3129, 2939, 31] },
                        '已立项': { type: 'bar', data: [300, 300, 600, 300] },
                        '已采购': { type: 'bar', data: [200, 300, 300, 300] },
                        '已执行': { type: 'bar', data: [100, 100, 200, 0] },
                        '立项占比': { type: 'line', data: [20, 76, 10, 0] },
                        '采购占比': { type: 'line', data: [50, 60, 38, 100] },
                        '执行占比': { type: 'line', data: [25, 20, 25, 0] },
                    }} />
            </div>

        );
    }
}

export default Index;