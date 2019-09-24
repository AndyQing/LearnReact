import React, { Component } from 'react';
import { Button, Pagination } from 'antd';
// import ReactDOM from 'react-dom';
class Helllo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iFrameHeight: '200px'
        };
    }
    render() {
        return (
            <div>
                <Button
                    style={{ width: '100%' }}
                >hello</Button>
                <hr />
                <Pagination defaultCurrent={1} total={150} showSizeChanger showQuickJumper/>
                {/* <iframe src='https://yjoptest.jiefanghao.com/historyTender'
                    style={{ width: '100%', height: this.state.iFrameHeight, overflow: 'visible' }}
                    onLoad={() => {
                        const obj = ReactDOM.findDOMNode(this);
                        console.log("obj---", obj);
                        // this.setState({
                        //     "iFrameHeight": obj.contentWindow.document.body.scrollHeight + 'px'
                        // });
                        // obj.contentWindow.postMessage({title:document.title,boxHeight:'600px'});
                    }}
                ></iframe> */}
            </div>
        );
    }
}

export default Helllo;