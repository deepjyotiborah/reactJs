import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerUngredient/BurgerIngredient';
import BurgerIngredients from './BurgerUngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
            .map(igkey => {
                return [...Array(props.ingredients[igkey])].map((_, i) => {
                    return <BurgerIngredients key={igkey + i} type={igkey} />
                })
            }).reduce((arr, elm) => {
                return arr.concat(elm);
            }, []);

            if (transformedIngredients.length === 0 ) {
                transformedIngredients = <p>Please start addig ingredients.</p>
            }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;  