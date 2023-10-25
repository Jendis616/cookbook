import React from "react";
import Recipe from "./Recipe";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function RecipeGridList(props) {
    
    function getRecipeList(recipeList) {
        return recipeList.map((recipe) => {
            return <Col>
                <Recipe key={recipe.id} recipe={recipe} />
            </Col>
        });
    }

    return (
        <Row xs={2} md={4} className="g-4">
            {getRecipeList(props.recipeList)}
        </Row>
    );
}

export default RecipeGridList;