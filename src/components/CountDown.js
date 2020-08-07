import React from 'react'

// 倒计时组件
// 使用方法：<CountDown startTime='2020/05/15 09:48:00' endTime="2020-05-22 09:36" type='day' timeOver={() => {console.log("finish---")}}/> 
class CountDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: 0,
            hour: 0,
            minute: '00',
            second: '00'
        }
    }
    componentDidMount() {
        if (this.props.endTime) {
            let endTime = this.props.endTime.replace(/-/g, "/");
            let sTime = this.props.startTime.replace(/-/g, "/");
            this.countFun(endTime, sTime);
        }
    }
    //组件卸载时，取消倒计时
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    countFun = (time, sTime) => {
        // let end_time = new Date(time).getTime(),
        //     sys_second = (end_time - new Date().getTime());
        let end_time = new Date(time).getTime();
        let start_time = new Date(sTime).getTime();
        //    let sys_second = (end_time - new Date().getTime());
        let sys_second = (end_time - start_time);
        this.timer = setInterval(() => {
            //防止倒计时出现负数
            if (sys_second > 1000) {
                sys_second -= 1000;
                let day = Math.floor((sys_second / 1000 / 3600) / 24);
                let hour = Math.floor((sys_second / 1000 / 3600) % 24);
                let minute = Math.floor((sys_second / 1000 / 60) % 60);
                let second = Math.floor(sys_second / 1000 % 60);
                this.setState({
                    day: day,
                    hour: hour < 10 ? "0" + hour : hour,
                    minute: minute < 10 ? "0" + minute : minute,
                    second: second < 10 ? "0" + second : second
                })
            } else {
                clearInterval(this.timer);
                //倒计时结束时，触发父组件的方法
                if (this.props.timeOver) {
                    this.props.timeOver()
                }
            }
        }, 1000);
    }
    render() {
        return (
            <span> {this.props.type == 'day' ? <span>{this.state.day}天{this.state.hour}:</span> : ""}{this.props.type == 'hour' ? <span>{this.state.hour}:</span> : ""}{this.state.minute}:{this.state.second}</span>
        )
    }
}
export default CountDown;