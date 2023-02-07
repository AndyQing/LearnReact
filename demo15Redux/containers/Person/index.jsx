import React, {useRef} from 'react';
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {nanoid} from "nanoid"
import {addPerson} from "../../redux/actions/person";


function Person(props) {
  const refName = useRef()
  const refAge = useRef()
  const addPerson = () => {
    const data = {
      id: nanoid(),
      name: refName.current.value,
      age: refAge.current.value
    }
    props.addPerson(data)
  }
  return (
    <div>
      <h1>Person</h1>
      <h3>上面的Count：{props.count}</h3>
      <input type="text" placeholder="名字" ref={refName}/>&nbsp;
      <input type="text" placeholder="年龄" ref={refAge}/>&nbsp;
      <button onClick={addPerson}>添加</button>
      <ul>
        <li>名字：年龄</li>
        {
          props.persons.map(person => {
            return (
              person.id ? <li key={person.id}>{person.name}：{person.age}</li> : <li>暂无数据</li>
            )
          })
        }
      </ul>
    </div>
  );
}

Person.propTypes = {
  addPerson: PropTypes.func.isRequired,
  persons: PropTypes.array.isRequired,
}

export default connect(
  state => ({persons: state.persons, count: state.count}),
  {addPerson}
)(Person);