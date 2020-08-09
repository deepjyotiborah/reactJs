import React, {Component} from 'react';
import Order from '../../components/order/Order';
import axios from '../../hoc/axios-orders';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import order from '../../components/order/Order';
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux';
import Spinner from '../../components/UI/spinner/Spinner'
class Orders extends Component {

    
    componentDidMount() {
        this.props.onFetchOrders();
    }

    render () {
        let orders = <Spinner />;
        if(!this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order key={order.id} 
                       price={Number.parseFloat(order.totalPrice).toFixed(2)}
                       ingredients={order.ingredients}/>))
        }
        console.log("-->>"+this.props.orders);
        return(
            <div>
               
               {this.props.orders.map(order => (
                <Order key={order.id} 
                       price={Number.parseFloat(order.totalPrice).toFixed(2)}
                       ingredients={order.ingredients}/>))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}
    
const mapDispatchToProps = dispatch => {
    return {    
        onFetchOrders : () => dispatch(actions.fetchOrders())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));