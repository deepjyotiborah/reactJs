import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Deep", age: "34"},
      {name: "urmi", age: "30"},
      {name: "Adam", age: "35"}
  ],
  otherState: 'Some othger state'
};

  render() {
    return (
      <div className="App">
        <h1> It's a react app</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <button onClick={this.switchHandler} value="Switch" >Switch Name</button>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> MY hobbies : Watching Movies </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }

   switchHandler = () => {
     this.setState({
       persons : [
        {name: "DeepChanged", age: "34"},
        {name: "urmi", age: "30"},
        {name: "Adam", age: "40"}
       ]
     })
   }
  
}

export default App;
