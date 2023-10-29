import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from './bricks/RecipeList';
import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';

const header = <h1>Kuchařka</h1>

function App() {

  const [recipesLoadCall, setRecipesLoadCall] = useState({ state: "pending" });
  const [ingredientsLoadCall, setIngredientsLoadCall] = useState({ state: "pending" });

  useEffect(() => {
    fetch(`http://localhost:8000/recipe/list`, {
      method: "GET",
    }).then(async (response) => {
      const responseJson = await response.json();
      if (response.status >= 400) {
        setRecipesLoadCall({ state: "error", error: responseJson })
      } else {
        setRecipesLoadCall({ state: "success", data: responseJson })
      }
    });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/ingredient/list`, {
      method: "GET",
    }).then(async (response) => {
      const responseJson = await response.json();
      if (response.status >= 400) {
        setIngredientsLoadCall({ state: "error", error: responseJson})
      } else {
        setIngredientsLoadCall({ state: "success", data: responseJson})
      }
    });
  }, []);

  function getRecipes() {
    switch (recipesLoadCall.state) {
      case "pending":
        return (
          <div>
            <Icon size={2} path={mdiLoading} spin={true} />
          </div>
        )
      case "success":
        return (
          <RecipeList recipeList={recipesLoadCall.data} ingredientList={ingredientsLoadCall.data} />
        );
      case "error":
        return (
          <div>
            <div>Nepodařilo se načíst data</div>
            <br />
            <pre>{JSON.stringify(recipesLoadCall.error, null, 2)}</pre>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="App">
      {header}
      <br />
      {getRecipes()}
    </div>
  );
}

export default App;