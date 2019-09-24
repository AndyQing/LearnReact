import React, { Component } from 'react';
class ComA extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) { anchorElement.scrollIntoView(); }
        }
    }
    render() {
        var doms = [];
        for (var i = 0; i < 24; i++) {
            doms.push(<div>
                    <h3 id={'title' + i}>title{i}</h3>
                    <p>content{i}</p>
                </div>);
        }
        return (
            <div>
                <p id='top' >我是顶部</p>
                {
                    doms.map(function (value) {
                        return value;
                    })
                }
                <button onClick={this.scrollToAnchor.bind(this, 'top')} >点我到顶部</button>
                <br></br>
                <button onClick={this.scrollToAnchor.bind(this, 'title6')}>点我到title6的位置</button>
            </div>
        );
    }
}

export default ComA;