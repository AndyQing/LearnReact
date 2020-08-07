import React, { Component } from 'react';
import Zmage from 'react-zmage';
// import RcViewer from '@hanyk/rc-viewer'
// 点击放大图片
class ImgCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
   
    render() {
        const options={}
        return (
            <div>
                <img src="http://img.test.mainaer.com/uploads/20190402/095424q942gq.jpg" alt="pic"></img>
                <Zmage src="http://img.test.mainaer.com/uploads/20190402/095424q942gq.jpg" alt="pic"></Zmage>
                {/* <RcViewer options={options} ref='viewer'>
                    <img src="http://img.test.mainaer.com/uploads/20190402/095424q942gq.jpg" alt="Picture 3"></img>
                </RcViewer>
                <RcViewer options={options} ref='viewer'>
                    <ul id="images">
                        <li><img src="http://img.test.mainaer.com/uploads/20190402/095424q942gq.jpg" alt="Picture 1"/></li>
                        <li><img src="http://img.test.mainaer.com/uploads/product/2016-11-08/58219f2aee9e5.jpg" alt="Picture 2"/></li>
                    </ul>
                </RcViewer> */}
            </div>
        );
    }
}

export default ImgCom;