import React from "react";
import Table from "react-bootstrap/Table";

function RecipeTableList(props) {

    function getRecipeList(recipeList) {
        return recipeList.map((recipe) => {
            return (
                <tr key={recipe.id}>
                    <td style={{textAlign: "right", fontWeight: "bold"}}>{recipe.name}</td>
                    <td style={{textAlign: "left"}}>{recipe.description}</td>
                </tr>
            );
        })
    }

    return (
        <Table>
            <thead>
                <tr>
                    <th>Název</th>
                    <th>Postup</th>
                </tr>
            </thead>
            <tbody>
                {getRecipeList(props.recipeList)}
            </tbody>
        </Table>
    );
}

export default RecipeTableList;