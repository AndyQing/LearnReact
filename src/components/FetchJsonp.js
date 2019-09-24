import React from 'react';
import fetchJsonp from 'fetch-jsonp';
//实现数据请求
class FetchJsonp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }
    getData = () => {
        var url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        // var url='https://wap.jiaogelangzhong.com/JglzServer/api/wc/getRandom';//跨域了
        fetchJsonp(url)
            .then(function (response) {
                return response.json()
            }).then((json) => {
                console.log('parsed json', json)
                this.setState({
                    list: json.result
                })
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
    render() {
        return (
            <div>
                <h2>FetchJsonp获取服务器数据：</h2>
                <button onClick={this.getData}>获取服务器数据2</button>
                <ul>{
                    this.state.list.map((value, key) => {
                        return <li key={key}>{value.title}</li>
                    })
                }

                </ul>
            </div>
        );
    }
}

export default FetchJsonp;