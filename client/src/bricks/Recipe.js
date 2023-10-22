import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/esm/CardBody";
import Icon from '@mdi/react';
import { mdiSilverwareSpoon } from '@mdi/js';
import styles from "../css/recipe.module.css";

function Recipe(props) {
    return(
        <Card className={styles.recipe}>
            <CardBody>
                <h2 className={styles.recipeHeader}>
                    <Icon path={mdiSilverwareSpoon} size={2} color="black" />{" "}
                    {props.recipe.name}
                </h2>
                <div className={styles.recipeDescription}>
                    {props.recipe.description}
                </div>
            </CardBody>
        </Card>
    )
}

export default Recipe;