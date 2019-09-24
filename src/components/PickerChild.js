import React, { Component } from 'react';
class PickerChild extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
       
    }
    render() {
        console.log(this.props.extra);
        return (
            // <div style={{height:'40px',lineHeight:'40px'}} onClick={this.props.onClick}>{this.props.extra.split(',')[0]}  {this.props.extra.split(',')[1]}</div>
            <div style={{height:'40px',lineHeight:'40px'}} onClick={this.props.onClick}>{this.props.extra.replace(',','  ')}</div>
        );
    }
}

export default PickerChild;