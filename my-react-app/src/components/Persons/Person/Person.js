import React, { Component } from 'react'
import classes from './Person.module.css'
import Aux from '../../../hoc/Aux';
import withClasses from '../../../hoc/withClasses';
import PropTypes from 'prop-types';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        //this.inputElementRef.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] called.')
        return (
            <Aux>
                <p onClick={this.props.click}> I am {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                    type='text' 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                    //ref={(inputElement) => {this.inputElementRef = inputElement}}
                    ref={this.inputElementRef}
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClasses(Person, classes.Person);