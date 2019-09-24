import React, { Component } from 'react';
import url from 'url';//通过url模块来解析url地址

class ComD extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log(this.props.location.search);//打印“?did=34”
        console.log(url.parse(this.props.location.search, true));
        var did = url.parse(this.props.location.search, true).query.did;
        console.log(did);//打印“34”
    }
    render() {
       
        return (
            <div>ComD页面---接收传过来的值为：{url.parse(this.props.location.search, true).query.did}</div>
        );
    }
}

export default ComD;