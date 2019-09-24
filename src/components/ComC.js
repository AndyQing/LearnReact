import React, { Component } from 'react';
class ComC extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        console.log(this.props);
        console.log(this.props.match.params.cid);
    }
    render() {
        return (
            <div>ComC页面---接收传过来的值为：{this.props.match.params.cid}</div>
        );
    }
}

export default ComC;