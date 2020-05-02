import React, {Component} from 'react'
import Person from './Person/Person'
import ErrorBoundary from '../ErrorBoundary/ErroBoundary'

class Persons extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate called.')
        if(nextProps.persons !== this.props.persons) {
            return true;
        }
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevSTate) {
        console.log('[Persons.js] getSnapshotBeforeUpdate called');
        return {message: 'Snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate called.')
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log("[Persons.js] componentWillUnmount called.")
    }

    render() {
        console.log('[Persons.js] rendering...')

        return this.props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
               
                <Person
                    click={() => this.props.click(index)}
                    changed={(event) => this.props.changed(event, person.id)}
                    name={person.name}
                    age={person.age}
                    key={person.id}>
                </Person>
            </ErrorBoundary>
        });
    }
}



export default Persons;