import React, { Component } from 'react';
import RichText from './rich-text-editor'
import { Button } from 'antd';
class Index extends Component {
    constructor(props) {
        super(props);
        this.editor = React.createRef()
        this.state = {};
    }
    render() {
        return (
            <div>
                <RichText ref={this.editor} detail="<p><em>hello</em>123</p>"></RichText>
                <Button type='primary' onClick={this.submit}>提交</Button>
            </div>
        );
    }
    submit = () => {
        console.log(" this.editor---", this.editor)
        const detail = this.editor.current.getDetail()
        console.log("富文本内容---", detail)

    }
}

export default Index;