import React, { Component } from "react";
import Burger from  '../../Burger/Burger';
import Button from  '../../UI/Button/Button';
import classes  from './CheckoutSummery.css';


class CheckoutSummery extends Component {
    componentDidUpdate() {
        console.log("Ingregientssss==>" + this.props.ingredients)
    }
    render() {
        return(
            <div className={classes.CheckoutSummery}>
                <h1>We hope it tastes well!!</h1>
                <div style={{width:'100%', margin:'auto'}}>
                    <Burger ingredients={this.props.ingredients}/>
                </div>
                <Button btnType='Danger' clicked>CANCEL</Button>
                <Button btnType='Success' clicked>CONTINUE</Button>
    
            </div>
        )
    }
}

export default CheckoutSummery;