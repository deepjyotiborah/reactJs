import React, { useEffect, useRef } from 'react'
import classes from './cockpit.module.css'
import AuthContext from './../../context/auth-context'


const Cockpit = props => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect called.')
        toggleBtnRef.current.click()
        // const timer = setTimeout(() => {
        //     alert("Saved to cloud.");
        // }, 1000);

        return () => {
            //clearTimeout(timer);
            console.log("[cockpit.js] clean up effect.")
        }
    }, []);


    const getClasses = () => {
        const assignedClasses = [];
        if (props.personsLength <= 2) {
            assignedClasses.push(classes.red);
        }
        if (props.personsLength <= 1) {
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

    const authHandler = () => {

    }

    return (
        <div className={classes.Cockpit}>
            <h1> {props.appTitle}</h1>
            <p className={getClasses()}>This is really working!!!</p>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}> LogIn</button>}
            </AuthContext.Consumer>
            
            <button  
                ref={toggleBtnRef}
                className={getBtnClass()}
                onClick={props.onClick} value="Switch" > Toggle Persons
                </button>
        </div>
    );
}

export default React.memo(Cockpit);