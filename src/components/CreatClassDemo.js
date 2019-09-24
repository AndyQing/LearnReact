import React from 'react';
import Proptypes from 'prop-types';

//react创建组件的两种方法
//用React.createClass此方法已经报错了，建议用extends
// var Header = React.createClass ({
//     // propTypes:{
//     //     num:Proptypes.string
//     // },
//     // getFathMsg=()=>{
//     //     alert(this.props.father.state.title);
//     // },
//     // run=()=>{
//     //     alert('我是子组件的run方法');
//     // },
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.num}</h1>
//             </div>
//         );
//     }
// })
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.num}</h1>
            </div>
        );
    }
}

export default Header;