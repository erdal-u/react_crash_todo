import React, {Component} from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';




class Todos extends Component{   
    render(){
       // console.log(this.props.todos)
  return  this.props.todos.map((todo) =>(
      //<h3>{todo.title}</h3>
      <Todoitem key={todo.id} todo={todo}/> // varje arrey måste ha en nyckel 
  ));
}
}
//Proptyp...
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;