import React, {Component} from 'react';
import Order from '../../components/order/Order';
import axios from '../../hoc/axios-orders';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import order from '../../components/order/Order';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                let fetchedOrders = [];
                for(let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                console.log("Fetched  Orders - " + fetchedOrders)
                this.setState({orders: fetchedOrders, loading: false});
            }).catch(err =>  {
                this.setState({loading: false});
            })
    }

    render () {
        return(
            <div>
                {this.state.orders.map(order => (
                <Order key={order.id} 
                       price={Number.parseFloat(order.totalPrice).toFixed(2)}
                       ingredients={order.ingredients}/>))}
            </div>
        )
    }
}


export default withErrorHandler(Orders, axios);