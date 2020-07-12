import React, {Component} from 'react';
import CheckoutSummery from '../../components/order/checkoutSummery/CheckoutSummery'
import { Route } from 'react-router-dom';
import ContactData from '../contactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1
        }, 
        totalPrice: 0
    };

    componentWillMount () {
        const query = new URLSearchParams( this.props.location.search );
        const ingredients = {};
        let price = 0;
        for ( let param of query.entries() ) {
            // ['salad', '1']
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState( { ingredients: ingredients, totalPrice: price } );
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
                <Route path={this.props.match.url + '/contact-data'} 
                       render={() => (<ContactData 
                                            ingredients={this.state.ingredients}
                                            price={this.state.totalPrice}/>)}/>
            </div>
        )
    }
}

export default Checkout;