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

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = [];
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients:ingredients})
    }

    checkoutCancelledHandler  = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () =>  {
        this.props.history.replace('/checkout/contact-data');
    }

    render () {
        return (
            <div>
                <CheckoutSummery ingredients={this.state.ingredients} 
                                 checkoutCancelled={this.checkoutCancelledHandler}
                                 checkoutContinue={this.checkoutContinueHandler}/>
            </div>
        )
    }
}

export default Checkout;