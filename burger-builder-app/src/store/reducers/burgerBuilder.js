import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: null,
    totalPrice: 10,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 2,
    cheese: 1,
    bacon: 3,
    meat: 5
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
                },
                  totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };

        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        
        case actionTypes.SET_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    cheese: action.ingredients.cheese,
                    bacon: action.ingredients.bacon,
                    meat: action.ingredients.meat
                },
                error: false
            };
        
        case actionTypes.FETCH_INGREDIENT_FAIL:
            return {
                ...state,
                error: true
            }
        


        default:  return state;
    }
}

export default reducer;