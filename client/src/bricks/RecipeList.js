import React from "react";
import Recipe from "./Recipe";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class RecipeList extends React.Component {
    render() {

        function getRecipeList(recipeList) {
            return recipeList.map((recipe) => {
                return <Recipe key={recipe.id} recipe={recipe} />
            }); 
        }

        return <Row xs={1} md={2} className="g-4">
            
                <Col>
                    {getRecipeList(this.props.recipeList)}
                </Col>
        </Row>
    }
}

export default RecipeList;