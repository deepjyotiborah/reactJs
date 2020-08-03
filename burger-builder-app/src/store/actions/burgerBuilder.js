import * as actionTypes from './actionTypes';
import axios from '../../hoc/axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};

export const fetchIngredientFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENT_FAIL
    }
}

export const setIngredients = (ings) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ings
    }
};

export const initIngredients = () => {
    return (dispatch, getState) => {
        axios.get("https://project-deep-40d1e.firebaseio.com/ingredients.json")
            .then(response => {
                dispatch(setIngredients(response.data));
            }).catch(err => {
                dispatch(fetchIngredientFailed());
            });
    }

}