import React from 'react'
import Person from './Person.css'
import Radium from 'radium'

const person = (props) => {
    const style = {
        '@media (min-width: 550px)' : {
            width: '450px'
        }
    };

    return (
        <div className="Person">
            <p onClick = {props.click} style={style}> I am {props.name} and I am {props.age} years old</p>  
            <p>{props.children}</p> 
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;