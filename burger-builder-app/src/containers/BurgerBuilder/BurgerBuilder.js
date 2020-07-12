import React, { Component } from "react";
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../hoc/axios-orders';
import Spinner from '../../components/UI/spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 2,
    cheese: 1,
    bacon: 3,
    meat: 5
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 10,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        console.log("componentWillMount from burgerBuilder");
        axios.get("https://project-deep-40d1e.firebaseio.com/ingredients.json")
            .then(response => {
                this.setState({ ingredients: response.data })
            }).catch(err => {
                this.setState({ error: true })
            });
    }

    updatePurchaseState ( ingredients ) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }


    ingredientAdded = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updateIngredients
        });
        this.updatePurchaseState(updateIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updateIngredients
        });
        this.updatePurchaseState(updateIngredients);
    };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        // this.setState({ loading: true });
        // const order = {
        //     ingredients: this.state.ingredients,
        //     totalPrice: this.state.totalPrice,
        //     customer: {
        //         name: 'Deepjyoti Borah',
        //         address: {
        //             street: '38th cross',
        //             zipcode: '560043',
        //             country: 'India'
        //         },
        //         email: 'test@test.com'
        //     },
        //     deliveryMethod: 'fastest'
        // };

        
        // axios.post('/orders.json', order)
        //     .then(response => {
        //         this.setState({
        //             loading: false,
        //             purchasing: false
        //         });
        //     })
        //     .catch(error => {
        //         this.setState({
        //             loading: false,
        //             purchasing: false
        //         });
        //     })
        this.props.history.push('/checkout');
        
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let burger = this.state.error ? "Error: Ingredients can't be loaded!!" : <Spinner />;
        let orderSummery = null;
        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <div>Burger Controls</div>
                    <BuildControls ingredientAdded={this.ingredientAdded}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={!this.state.purchasable}
                        ordered={this.purchaseHandler} />
                </Aux>
            );

            orderSummery = <OrderSummary
                ingredients={this.state.ingredients}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}
                price={this.state.totalPrice}
            />;
        }

        if (this.state.loading) {
            orderSummery = <Spinner />
        }


        return (
            <Aux>
                <Modal show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
                    {orderSummery}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);