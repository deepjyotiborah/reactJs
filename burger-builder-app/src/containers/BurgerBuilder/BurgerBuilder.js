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
        totalPrice: 10,
        purchasable: false
    };

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
                            .map(igKey => {
                                return ingredients[igKey]
                            }).reduce((sum, elemCount) => {
                                return sum + elemCount
                            },0);
        this.setState({purchasable: sum > 0});
    }

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
        this.setState({totalPrice: updatedPrice,
                       ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0 
        }

        
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger Controls</div>
                <BuildControls addIngredient={this.addIngredientHandler}
                                removeIngredient={this.removeIngredientHandler} 
                                disabled={disabledInfo} 
                                price={this.state.totalPrice} 
                                purchasable={!this.state.purchasable} />
                
            </Aux>
        )
    }
}

export default BurgerBuilder;