import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person.js'

const AppUse = props => {
    const [personsState, setPersons] = useState({
        persons: [
            { name: "Deep", age: "34" },
            { name: "urmi", age: "30" },
            { name: "Adam", age: "35" }
        ],
        otherState: 'Some other state'
    });

    const switchHandler = () => {
        setPersons({
            persons: [
                { name: "DeepChanged", age: "34" },
                { name: "urmi", age: "30" },
                { name: "Adam", age: "40" }
            ]
        })
    };

    return (
        <div className="App">
            <h1> It's a react app</h1>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <button onClick={switchHandler} value="Switch" >Switch Name</button>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> MY hobbies : Watching Movies </Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    );
    
}

export default AppUse;