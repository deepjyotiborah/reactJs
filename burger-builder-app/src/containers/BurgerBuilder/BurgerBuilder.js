import React, { Component } from "react";
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../hoc/axios-orders';
import Spinner from '../../components/UI/spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as burgerBuilderActions from '../../store/actions/index'
import { connect } from 'react-redux';

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
    };

    getPurchaseState ( ingredients ) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        return sum > 0;
    }


    componentDidMount() {
        this.props.onInitIngredients();
    }
    // ingredientAdded = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updateIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updateIngredients[type] = updatedCount;  
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const updatedPrice = oldPrice + priceAddition;
    //     this.setState({
    //         totalPrice: updatedPrice,
    //         ingredients: updateIngredients
    //     });
    //     this.updatePurchaseState(updateIngredients);
    // };

    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if (oldCount <= 0) {
    //         return;
    //     }
    //     const updatedCount = oldCount - 1;
    //     const updateIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updateIngredients[type] = updatedCount;
    //     const priceDeduction = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const updatedPrice = oldPrice - priceDeduction;
    //     this.setState({
    //         totalPrice: updatedPrice,
    //         ingredients: updateIngredients
    //     });
    //     this.updatePurchaseState(updateIngredients);
    // };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        // const queryParams = [];
        // for (let i in this.state.ingredients) {
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        // };
        // queryParams.push("price" + '=' + this.state.totalPrice);
        // const queryString =  queryParams.join('&');   
        // this.props.history.push({
        //     pathname: '/c',
        //     search: '?' + queryString,
        // });
        this.props.history.push('/checkout')
        
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let burger = this.props.error ? "Error: Ingredients can't be loaded!!" : <Spinner />;
        let orderSummery = null;
        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <div>Burger Controls</div>
                    <BuildControls ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemove}
                        disabled={disabledInfo}
                        price={this.props.price}
                        purchasable={this.getPurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler} />
                </Aux>
            );

            orderSummery = <OrderSummary
                ingredients={this.props.ings}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}
                price={this.props.price}
            />;
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

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice,
        error: state.error  
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemove: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));