import React from 'react'
//  import Person from './Person.css'
//import Radium from 'radium'
import styled from 'styled-components'

const person = (props) => {
    const style = {
        '@media (min-width: 550px)' : {
            width: '450px'
        }
    };

    const StyledDiv = styled.div`
        width: 60%;
        margin: auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;
    
        @media (min-width: 500px) {
            width: 450px;
        }
    `;

    return (
       <StyledDiv>
           <p onClick = {props.click} style={style}> I am {props.name} and I am {props.age} years old</p>  
           <p>{props.children}</p> 
           <input type='text' onChange={props.changed} value={props.name}/>
       </StyledDiv>
    )
}

export default person;