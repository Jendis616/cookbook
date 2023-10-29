import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/esm/CardBody";
import CardText from "react-bootstrap/CardText";

import { CardHeader } from "react-bootstrap";
import Icon from '@mdi/react';
import { mdiSilverwareSpoon } from '@mdi/js';
import styles from "../css/recipe.module.css";
import { useState } from "react";

function Recipe(props) {

    const [viewType, setViewType] = useState("collapsed");
    const isCollapsed = viewType === "collapsed";

    const maxVisibleIngredients = 4;

    function getRecipeIngredients(ingredients) {
        return ingredients.map((ingredient) => {
            return (
                <li>{getIngredient(ingredient.id)}{" "}</li>
            )
        });
    }

    function getShortRecipeIngredients(ingredients) {
        for (var i = 0; i < maxVisibleIngredients; i++) {
            return (
                <li>{getIngredient(ingredients[i].id)}</li>
            )
        }

    }

    function getIngredient(id) {
        return props.ingredientList.map((ingredient) => {
            if (ingredient.id === id) {
                return ingredient.name;
            }
        })
    }

    function getShortDescription(description) {
        return (
            <div>{description.toString().substring(0, 45)}{"..."}</div>
        );
    }

    return (
        <Card className={styles.recipe}>
            <CardHeader>
                <h2 className={styles.recipeHeader}>
                    <Icon path={mdiSilverwareSpoon} size={1} color="black" />{" "}
                    {props.recipe.name}{" "}
                </h2>

            </CardHeader>
            <CardBody onClick={() =>
                setViewType((currentState) => {
                    if (currentState === "collapsed") return "expanded";
                    else return "collapsed";
                })
            }>
                <img src={props.recipe.imgUri} height="200rem" width="100%" alt="" />
                <CardText>
                    <div className={styles.recipeDescription}>
                        {isCollapsed ? getShortDescription(props.recipe.description) : props.recipe.description}
                        <br />
                        <br />
                        <ul>
                            {isCollapsed ? getShortRecipeIngredients(props.recipe.ingredients) : getRecipeIngredients(props.recipe.ingredients)}
                        </ul>
                    </div>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default Recipe;