import React, {Component} from 'react';
import CheckoutSummery from '../../components/order/checkoutSummery/CheckoutSummery'
class Checkout extends Component {

    state = {
        ingredients:{
            salad: 1,
            cheese: 1,
            bacon: 1,
            meat: 1
        }
    };

    render () {
        console.log("Ingredients=====>>" + this.state.ingredients);
        return (
            <div>
                <CheckoutSummery ingredients={this.state.ingredients} />
            </div>
        )
    }
}

export default Checkout;