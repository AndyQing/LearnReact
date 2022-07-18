import React from 'react';
import axios from 'axios';
// import $ from 'jquery'
//实现数据请求
class Axios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }
    getData = () => {
        // var url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';//接口后台允许跨域了
        // var url='https://wap.jiaogelangzhong.com/JglzServer/api/wc/getRandom';//跨域了,需要在package.json文件中添加proxy，然后修改下请求url
        var url = 'http://localhost:3000/JglzServer/api/wc/getRandom';
        //注意this指向，所以上面的换成下面的箭头函数
        axios.get(url)
            .then((response) => {
                console.log(response);
                // this.setState({
                //     list: response.data.result
                // })
            })
            .catch(function (error) {
                console.log(error);
            });

        // $.ajax({
        //     url:url,
        //     dataType:'json',
        //     success:response=>{
        //         console.log(response);
        //         this.setState({
        //             list: response.result
        //         })
        //     },
        //     error:(xhr,status,error)=>{
        //         console.log(error);
        //     }
        // })
    }
    render() {
        return (
            <div>
                <h2>ajax获取服务器数据：</h2>
                <button onClick={this.getData}>获取服务器数据</button>
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

export default Axios;