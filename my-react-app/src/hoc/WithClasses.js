import React from 'react';
import { tsPropertySignature } from '@babel/types';


const WithClasses = props => (
    <div className={props.classes}> {props.children} </div>
);

export default WithClasses;