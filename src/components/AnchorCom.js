import React, { Component } from 'react';
class ComA extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        var doms = [];
        for (var i = 0; i < 24; i++) {
            doms.push(<div> <h3 name={'title'+i}>title{i}</h3>
                <p>content{i}</p></div>);
        }
        return (
            <div>
                <p name='top'>我是顶部</p>
                {
                    doms.map(function (value) {
                        return value;
                    })
                }
               <a href='#top'>点我到顶部</a>
               <br></br>
               <a href='#title6'>点我到title6的位置</a>
            </div>
        );
    }
}

export default ComA;