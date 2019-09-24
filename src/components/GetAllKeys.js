import React from 'react';
let keysArr = [];
class GetAllKeys extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'hello qing',
            num: 123//num如果是字符串的话，控制台会报错，因为子组件设置了Header.propTypes
        };
    }
    click = () => {
        // alert('获取所有keys');
        let listTemp = [
            {
                name: '111',
                keys: 'qw',
                content: [{
                    name: '111-2',
                    keys: 'qw-2',
                    content: []
                }]
            },
            {
                name: '222',
                keys: 'as',
                content: []
            }
        ]
        let tempArr = this.initList(listTemp);
        console.log("tempArr---", tempArr);
        this.getAllKeys(listTemp);
        console.log("keysArr---", keysArr);
    }

    // 去除所有对象中的name属性
    initList = (list) => list.map((item) => {
        var tempObj = {};
        for (var obj in item) {
            if (obj != 'name') {
                tempObj[obj] = item[obj];
            }
        }

        if (item.content) {
            tempObj.content = this.initList(item.content);
            return tempObj;
        } else {
            tempObj.content = [];
            return tempObj;
        }
    });
    // 得到所有对象中的keys属性
    getAllKeys = (list) => list.map((item) => {
        keysArr.push(item.keys);
        if (item.content) {
            this.getAllKeys(item.content);
        }
    });


    render() {
        return (
            // 父组件可以传值，也可以传方法给子组件,还可以把整个父组件传给子组件
            <div>
                <button onClick={this.click}>获取所有keys</button>
            </div>
        );
    }
}

export default GetAllKeys;