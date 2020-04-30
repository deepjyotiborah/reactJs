import React, { useEffect } from 'react'
import classes from './cockpit.module.css'

const Cockpit = props => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect called.')

        const timer = setTimeout(() => {
            alert("Saved to cloud.");
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log("[cockpit.js] clean up effect.")
        }
    }, [props.persons]);


    const getClasses = () => {
        const assignedClasses = [];
        if (props.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (props.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }
        console.log(assignedClasses);

        return assignedClasses.join(' ');
    }

    const getBtnClass = () => {
        if (!props.showPersons) {
            return classes.Red;
        }
    }

    return (
        <div className={classes.Cockpit}>
            <h1> {props.appTitle}</h1>
            <p className={getClasses()}>This is really working!!!</p>
            <button className={getBtnClass()}
                onClick={props.onClick} value="Switch" > Toggle Persons
                </button>
        </div>
    );
}

export default Cockpit;