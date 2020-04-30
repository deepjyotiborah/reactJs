import React, {Component} from 'react'
//  import Person from './Person.css'
//import Radium from 'radium'
import classes from './Person.module.css'
import { isClassExpression } from '@babel/types'

class Person extends Component {

    render() {
        console.log('[Person.js] called.')
        return (
           <div className={classes.Person}>
               <p onClick = {this.props.click}> I am {this.props.name} and I am {this.props.age} years old</p>  
               <p>{this.props.children}</p> 
               <input type='text' onChange={this.props.changed} value={this.props.name}/>
           </div>
        )
    }
}

export default Person;