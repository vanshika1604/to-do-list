import React from 'react'
import {TodoItem} from '../MyComponents/TodoItem';

export const Todos = (props) => {
  let MyStyle={
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container" style={MyStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length ==0?"No Todos Available, you have completed all your tasks!":
      props.todos.map((todo)=>{
          return(
          <>
          <TodoItem todo={todo} key={todo.no} onRemove={props.onRemove}/>
          </>
      )})
      }
    </div>
  )
}
