import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1> It's a react app</h1>
      <Person name="Deep" age="34"/>
      <Person name="urmi" age="30"> MY hobbies : Watching Movies </Person>
      <Person name="Adam" age="35"/>
    </div>
  );
}

export default App;
