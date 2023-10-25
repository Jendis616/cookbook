import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/esm/CardBody";
import { CardHeader } from "react-bootstrap";
import Icon from '@mdi/react';
import { mdiSilverwareSpoon } from '@mdi/js';
import styles from "../css/recipe.module.css";
import { useState } from "react";

function Recipe(props) {
    const [viewType, setViewType] = useState("collapsed");
    const isCollapsed = viewType === "collapsed";

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
                <div className={isCollapsed ? styles.recipeDescriptionCollapsed : styles.recipeDescription}>
                    {props.recipe.description}
                </div>
            </CardBody>
        </Card>
    )
}

export default Recipe;