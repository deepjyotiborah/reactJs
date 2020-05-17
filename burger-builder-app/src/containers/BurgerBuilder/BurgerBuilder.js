import React, { Component } from "react";
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 2,
    cheese: 1,
    bacon: 3,
    meat: 5
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 10
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceAddition;
        this.setState({totalPrice: updatedPrice,
                       ingredients: updateIngredients});
    };

    removeIngredientHandler = (type) => {

    };

    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger Controls</div>
                <BuildControls addIngredient={this.addIngredientHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;