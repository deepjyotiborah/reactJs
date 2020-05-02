import React, { Component } from 'react'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/cockpit/cockpit'
import classes from './App.module.css'
import withClasses from '../hoc/withClasses'
import Aux from '../hoc/Aux'

class AppUse extends Component {

    constructor(props) {
        console.log('[AppUse.js] costructor called.')
        super(props);
    }

    state = {
        persons: [
            { id: '1', name: "Deep", age: 34 },
            { id: '2', name: "urmi", age: 30 },
            { id: '3', name: "Adam", age: 35 }
        ],
        otherState: 'Some other state',
        showPersons: true,
        showCockpit: true, 
        changeCounter: 0
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[AppUse.js] getDerivedStateFromProps called ' + props);
        return state;
    }

    componentDidMount() {
        console.log('[AppUse.js] componentDidMount called.')
    }

    nameChangeHandler = (event, id) => {
        const personIdx = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIdx]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIdx] = person;

        this.setState((prevState, props) => {
            return { 
                persons: persons,
                changeCounter: prevState.changeCounter + 1
             }
        });
    }

    deletePersonHandler = (index) => {
        //const persons = personsState.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({ persons: persons });
    }

    togglePersons = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {
        console.log('[AppUse.js] render called.')
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    click={this.deletePersonHandler}
                    changed={this.nameChangeHandler} />
            )
        }
        return (
            <Aux>
                <button onClick={() => this.setState({showCockpit: false})}> Remove cockpit</button>
                {this.state.showCockpit ? 
               ( <Cockpit
                    appTitle={this.props.title}
                    onClick={this.togglePersons}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
               /> ) : null}
                {persons}
            </Aux>
        );
    }
}

export default withClasses(AppUse, classes.AppUse);