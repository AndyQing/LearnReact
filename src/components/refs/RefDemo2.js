import React from 'react';
// 在高阶组件中转发 refs
function logProps(WrappedComponent) {
    class LogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render() {
            const { forwardedRef, ...rest } = this.props;

            // return <WrappedComponent {...this.props} />;
            return <WrappedComponent ref={forwardedRef} {...rest} />;
        }
    }

    // return LogProps;//refs 将不会透传下去
    return React.forwardRef((props, ref) => {
        return <LogProps {...props} forwardedRef={ref} />;
    });
}

class FancyButton extends React.Component {
    focus() {
        console.log("我是focus方法")
    }
    state = {
        hello: 'qing',
    }
    render() {
        return <button>
            {this.props.children}
        </button>
    }
}

// export default FancyButton;
// 我们导出 LogProps，而不是 FancyButton。
// 虽然它也会渲染一个 FancyButton。
export default logProps(FancyButton);