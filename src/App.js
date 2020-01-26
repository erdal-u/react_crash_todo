import React, {Component} from 'react';
import Todos from './Components/Todos'
import './App.css';




class App extends Component{
 
state ={
  todos:[
    {
      id:1,
      title:'Take out the trash',
      completed: false
    },
    {
      id:2,
      title:'vi ändrar denna med och ser om pushen gick bra',
      completed: false
    },
    {
      id:3,
      title:'detta är ju ett test',
      completed: false
    },
  ]
}
 render(){
  // console.log(this.state.todos)
  return (
    <div className="App">
    
      
      <Todos todos={this.state.todos}/>
      
     
    </div>
  );
}
}

export default App;
