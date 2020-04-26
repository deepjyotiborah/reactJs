import React from 'react'
import Person from './Person/Person'
import ErrorBoundary from '../ErrorBoundary/ErroBoundary'

const persons = (props) => {
    console.log('[Persons.js] rendering...')
    return props.persons.map((person, index) => {
        return <ErrorBoundary key={person.id}>
           
            <Person
                click={() => props.click(index)}
                changed={(event) => props.changed(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}>
            </Person>
        </ErrorBoundary>
    });
}



export default persons;