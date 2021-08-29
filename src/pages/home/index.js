import React, { Component } from 'react';
import { Button } from 'antd'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadings: true,
        };
    }
    enterLoading = index => {
        console.log('-------')
        this.setState({ loadings: true })

        // this.setState(({ loadings }) => {
        //     const newLoadings = [...loadings];
        //     newLoadings[index] = true;

        //     return {
        //         loadings: newLoadings,
        //     };
        // });
        setTimeout(() => {
            this.setState({ loadings: false })
            // this.setState(({ loadings }) => {
            //     const newLoadings = [...loadings];
            //     newLoadings[index] = false;

            //     return {
            //         loadings: newLoadings,
            //     };
            // });
        }, 6000);
    };
    render() {
        const { loadings } = this.state;
        return (
            <div>home
                <Button type="primary" loading={loadings}
                    onClick={() => this.enterLoading(0)}>
                    Click me!
        </Button>
            </div>
        );
    }
}

export default Index;