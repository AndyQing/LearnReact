import React, { Component } from 'react';
class NewsContent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params.aid);
        this.state = {  };
    }
    render() {
        return (
            <div>NewsContent我是新闻详情组件------{this.props.match.params.aid}</div>
        );
    }
}

export default NewsContent;