import React from 'react';
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (this.props.onRef) {
            this.props.onRef(this);
        }
    }

    run = () => {
        alert('我是子组件header3的run方法');
    }
    render() {
        return (
            <div>
                <h2>我是子组件header3内容</h2>

            </div>
        );
    }
}


export default Header;