import React, { useState, useMemo } from "react";
import Navbar from 'react-bootstrap/Navbar';
import RecipeGridList from "./RecipeGridList";
import RecipeTableList from "./RecipeTableList";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Icon from "@mdi/react";
import { mdiTable, mdiViewGridOutline, mdiMagnify } from "@mdi/js";

function RecipeList(props) {
    
    const recipeListName = "Recepty";

    const [viewType, setViewType] = useState("grid");
    const isGrid = viewType === "grid";
    const [searchBy, setSearchBy] = useState("");
    const isSearching = searchBy !== "";

    function handleSearch(event) {
        event.preventDefault();
        setSearchBy(event.target["searchInput"].value);
    }

    function handleSearchDelete(event) {
        if (!event.target.value) setSearchBy("");
    }

    const getFilteredList = useMemo(() => {
        return props.recipeList.filter((recipe) => {
          return (
            recipe.name
              .toLocaleLowerCase()
              .includes(searchBy.toLocaleLowerCase()) ||
            recipe.description
              .toLocaleLowerCase()
              .includes(searchBy.toLocaleLowerCase())
          );
        });
      }, [searchBy]);

    return (
        <div>
            <Navbar>
                <div className="container-fluid">
                    <Navbar.Brand>{recipeListName}</Navbar.Brand>
                    <div>
                        <Form className="d-flex" onSubmit={handleSearch}>
                            <Form.Control
                                id={"searchInput"}
                                style={{ maxWidth: "100px" }}
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={handleSearchDelete}
                            />
                            <Button style={{ marginRight: "8px" }} variant="outline-succes" type="sumbit">
                                <Icon size={1} path={mdiMagnify} />
                            </Button>

                            <Button
                                variant="light"
                                onClick={() =>
                                    setViewType((currentState) => {
                                        if (currentState === "grid") return "table";
                                        else return "grid";
                                    })
                                }
                            >
                                <Icon size={1} path={isGrid ? mdiTable : mdiViewGridOutline} />{" "}
                                {isGrid ? "Tabulka" : "Grid"}
                            </Button>
                        </Form>
                    </div>
                </div>
            </Navbar>
            {isGrid ? (
                <RecipeGridList recipeList={isSearching ? getFilteredList : props.recipeList} ingredientList={props.ingredientList} />
            ) : (
                <RecipeTableList recipeList={isSearching ? getFilteredList : props.recipeList} />
            )}
        </div>
    );
}

export default RecipeList;