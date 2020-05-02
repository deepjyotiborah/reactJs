import React, { Component } from 'react'
import classes from './Person.module.css'
import Aux from '../../../hoc/Aux';
import withClasses from '../../../hoc/withClasses';

class Person extends Component {

    render() {
        console.log('[Person.js] called.')
        return (
            <Aux>
                <p onClick={this.props.click}> I am {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
    }
}

export default withClasses(Person, classes.Person);