import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person.js'

const AppUse = props => {
    const [personsState, setPersons] = useState({
        persons: [
            { id:'1',name: "Deep", age: "34" },
            { id:'2',name: "urmi", age: "30" },
            { id:'3',name: "Adam", age: "35" }
        ],
        otherState: 'Some other state',
        showPersons: true
    });

    // const switchHandler = (newName) => {
    //     setPersons({
    //         persons: [
    //             { id:'1',name: newName, age: "34" },
    //             { id:'2',name: "urmi", age: "30" },
    //             { id:'3',name: "Adam", age: "40" }
    //         ],
    //         otherState: personsState.otherState,
    //         showPersons: personsState.showPersons
    //     })
    // };

    const nameChangeHandler = (event, id) => {
        const personIdx = personsState.persons.findIndex(p => {
            return p.id === id;
        });

        const p = personsState.persons.find(pp => {
            return pp.id === id;
        })

        const person = {
            ...personsState.persons[personIdx]
        };

        person.name = event.target.value;
        
        const persons = [...personsState.persons];
        persons[personIdx] = person;

        setPersons({
            persons: persons,
            otherState: personsState.otherState,
            showPersons: personsState.showPersons
        })
    }

    const togglePersons = () => {
        const doesShow = personsState.showPersons;
        setPersons({
            persons: personsState.persons,
            otherState: personsState.otherState,
            showPersons: !doesShow
        });
    }

    const deletePersonHandler = (index) => {
        //const persons = personsState.persons.slice();
        const persons = [...personsState.persons];
        persons.splice(index, 1);
        setPersons({
            persons: persons,
            otherState: personsState.otherState,
            showPersons: personsState.showPersons
        });
    }

    const style = {
        backgroundColor: 'Green',
        color: 'White',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursoe: 'pointer'
    }

    const getClasses = () => {
        const classes = [];
        if (personsState.persons.length <= 2) {
            classes.push('red');
        }
        if(personsState.persons.length <= 1) {
            classes.push('bold')
        }
        console.log(classes);
        
        return classes.join(' ');
    }

    return (
        
        <div className="App">
            <h1> It's a react app</h1>  
            <p className = {getClasses()}>This is really working!!!</p>
            <button
                style={style} onClick={togglePersons} value="Switch" > Toggle Persons
            </button>
            {
                personsState.showPersons ?
                <div>
                    {
                        personsState.persons.map((person, index) => {
                            return <Person click={() => deletePersonHandler(index)} 
                                changed={(event) => nameChangeHandler(event, person.id)}
                                name={person.name} age={person.age} key={person.id}>
                            </Person>
                        })
                    }
                </div> : null
                 
            }
            { personsState.showPersons ? style.backgroundColor = 'Red' : null}
        </div>
    );

}

export default AppUse;