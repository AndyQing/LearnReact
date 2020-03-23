import React from 'react';
import Proptypes from 'prop-types';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sonmsg: 'header----sonmsg'
        };
    }
    static defaultProps = {
        title: '标题'
    }
    static propTypes = {
        num: Proptypes.number
    }
    getFathMsg = () => {
        alert(this.props.father.state.title);
    }
    run = () => {
        alert('我是子组件的run方法');
    }
    render() {
        return (
            <div>
                <h1>{this.props.children}</h1>
                <h2>{this.props.title}---我是子组件内容</h2>
                <button onClick={this.props.run}>调用父组件中的run方法</button>
                <button onClick={this.props.father.getDate}>调用父组件中的getDate方法</button>
                <button onClick={this.getFathMsg}>获取父组件中state中的title属性</button>
                <button onClick={this.props.father.getSonData.bind(this, '我是子组件传过来的')}>子组件给父组件传值</button>
                <button onClick={this.props.getSonData.bind(this, '我是子组件传过来的222')}>子组件给父组件传值2</button>
                <p>{this.context.color}//在子组件里面通过该方法直接调用</p>
            </div>
        );
    }
}

//下面的定义方式可以变成上面 static 对象
// // defaultProps：如果父组件调用子组件时，不给子组件传title属性，那么就在子组件中使用defaultProps定义的默认值
// Header.defaultProps = {
//     title: '标题'
// }
// // propTypes:验证父组件传值类型的合法性,Proptypes.number中的Proptypes名称可以自己定义
// Header.propTypes = {
//     num: Proptypes.number
// }

Header.contextTypes = {//必须进行类型检测，如果没有的话，不会报错，但是会没有该值
  color: Proptypes.string
};
export default Header;