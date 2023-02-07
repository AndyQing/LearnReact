import React from 'react';

/*这里要引入容器组件而不是UI组件*/
import Count from "./containers/Count"
import Person from "./containers/Person"
/*引入Redux store*/

// import store from "./redux/store"

function App(props) {
  return (
    <div>
      {/*store必须通过props方式传递给容器组件
      使用了react-redux提供的Provider组件后就不用传store参数了，store都交由Provider管理
      */}
      <Count/>
      <Person/>
      {/*<Count store={store}/>*/}

    </div>
  );
}

export default App;