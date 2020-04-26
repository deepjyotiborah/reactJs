import React, { useState } from 'react'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/cockpit/cockpit'

const AppUse = props => {
    const [personsState, setPersons] = useState({
        persons: [
            { id: '1', name: "Deep", age: "34" },
            { id: '2', name: "urmi", age: "30" },
            { id: '3', name: "Adam", age: "35" }
        ],
        otherState: 'Some other state',
        showPersons: true
    });

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
        let random = Math.random();
        // if (random > 0.7) {
        //     throw Error('Something went wrong!!!')
        // }
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

    return (
        <div>
            <Cockpit onClick={togglePersons}
                showPersons={personsState.showPersons}
                persons={personsState.persons} />
            {

                personsState.showPersons ?
                    <div>
                        <Persons persons={personsState.persons}
                            click={deletePersonHandler}
                            changed={nameChangeHandler}
                        />

                    </div> : null
            }
        </div>
    );

}

export default AppUse;