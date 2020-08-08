import React, {Component} from 'react';
import CheckoutSummery from '../../components/order/checkoutSummery/CheckoutSummery'
import { Route, Redirect } from 'react-router-dom';
import ContactData from '../contactData/ContactData';
import { connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Checkout extends Component {

    // state = {
    //     ingredients: {
    //         salad: 1
    //     }, 
    //     totalPrice: 0
    // };

    // componentWillMount () {
    //     const query = new URLSearchParams( this.props.location.search );
    //     const ingredients = {};
    //     let price = 0;
    //     for ( let param of query.entries() ) {
    //         // ['salad', '1']
    //         if (param[0] === 'price') {
    //             price = param[1];
    //         } else {
    //             ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState( { ingredients: ingredients, totalPrice: price } );
    // }

    checkoutCancelledHandler  = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () =>  {
        this.props.history.replace('/checkout/contact-data');
    }

    render () {
        let summary = <Redirect to="/" />;
        if (this.props.ings) {
            const  purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            summary = (
               <div>
                    {purchasedRedirect}
                    <CheckoutSummery ingredients={this.props.ings} 
                                 checkoutCancelled={this.checkoutCancelledHandler}
                                 checkoutContinue={this.checkoutContinueHandler}/>
               </div>
            )
        }

        return (
            <div>
                {summary}
                <Route path={this.props.match.url + '/contact-data'} component={ContactData}
                    //    render={() => (<ContactData 
                    //                         ingredients={this.props.ings}
                    //                         price={this.props.totalPrice}/>)}
                    />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout);