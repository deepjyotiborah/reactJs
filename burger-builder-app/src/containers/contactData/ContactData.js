import React, {Component} from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './ContactData.css'
import axios from '../../hoc/axios-orders';
import Spinner from '../../components/UI/spinner/Spinner';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

class ContactData extends Component {

    state = {
        name:"",
        email: "",
        address: {
            street: "",
            postalCode: ""
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ings,
            totalPrice: this.props.price,
            customer: {
                name: 'Deepjyoti Borah',
                address: {
                    street: '38th cross',
                    zipcode: '560043',
                    country: 'India'
                },
                email: 'test111@test.com'
            },
            deliveryMethod: 'fastest'
        };

        this.props.onOrderBurger(order);
        
    }
    render() {
        let form = (<form>
            <input className={classes.Input}type="text" name="name" placeholder="Your Name" />
            <input className={classes.Input}type="text" name="email" placeholder="Your mail" />
            <input className={classes.Input}type="text" name="street" placeholder="Your Street" />
            <input className={classes.Input}type="text" name="postal" placeholder="Postal Code" />
            <Button btnType="Success" clicked={this.orderHandler}>Order Now</Button>
        </form>)

        if (this.props.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your details</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));  