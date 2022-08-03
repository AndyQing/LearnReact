import React from 'react';
import FancyButton from './RefDemo2'
const ref = React.createRef();

class RefDemoOut extends React.Component {
    constructor(props) {
        super(props);
        this.myref = React.createRef();
        this.state = {
            list: [],
        };
    }
    
    render() {
        return (
            <div>
                <FancyButton ref={this.myref}>Click me!</FancyButton>
            </div>
        );
    }
    componentDidMount() {
        // console.log('ref--------', this.myref, this.myref.current.innerHTML)
        console.log('ref--------', this.myref, this.myref.current)

    }
}

export default RefDemoOut;