
import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../../components/UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
                                .map(igKey => {
                                return (<li key={igKey}>
                                            <span style={{textTransform:'capitalize'}}>{igKey} : {props.ingredients[igKey]}</span>
                                        </li>)
                                });
    return (
        <Aux>
            <h3>Your Order Summary</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
        </Aux>
    )
}

export default OrderSummary;