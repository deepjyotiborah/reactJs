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

    const switchHandler = (newName) => {
        setPersons({
            persons: [
                { name: newName, age: "34" },
                { name: "urmi", age: "30" },
                { name: "Adam", age: "40" }
            ]
        })
    };

    const nameChangeHandler = (event) => {
        setPersons({
            persons: [
                { name: "Deep", age: "34" },
                { name: event.target.value, age: "29" },
                { name: "Adam", age: "37" }
            ]
        })
    }

    const style =   {
        backgroundColor: 'White', 
        font: 'inherit',
        border: '1px solid blue',
        padding:'8px',
        cursoe:'pointer' 
    }
    return (
        <div className="App">
            <h1> It's a react app</h1>
            <button
                style={style}
                onClick={switchHandler.bind(this, "DeepChanged")} value="Switch" >Switch Name
            </button>
            <Person 
                name={personsState.persons[0].name} age={personsState.persons[0].age}
            />
            <Person click= {() => switchHandler('MyNewName')} changed = {nameChangeHandler}
                name={personsState.persons[1].name} age={personsState.persons[1].age}> MY hobbies : Watching Movies
            </Person>
            <Person
                name={personsState.persons[2].name} age={personsState.persons[2].age}
            />
        </div>
    );

}

export default AppUse;