import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import Favorites from './Favorites'
import Search from '../components/Search'
import RecipeCard from '../components/RecipeCard'
import { Route, Switch } from 'react-router-dom'



class RecipeContainer extends React.Component {

  state = {
    recipes: [],

    favorite: []
    // user: nil
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/recipes')
      .then(resp => resp.json())
      .then(recipes => this.setState({ recipes: recipes }))
      .catch(console.log)
  }

  // renderRecipeCards = () => {
  //   let shuffled = this.state.recipes.sort(() => 0.5 - Math.random());

  //   return shuffled.slice(0, 6).map(recipe => <RecipeCard key={recipe.id} recipe={recipe} clickHandler={this.clickHandler} recipeHandler={this.renderRecipePage} />)
  // }
  // FavoritesClickHandler = (id) => {
  //   console.log("recipe clicking", id)
  //   // need to know which dog to edit
  //   // send an AJAX request to edit 
  //   fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "content-type": "application/json",
  //       accepts: "application/json"
  //     },
  //     body: JSON.stringify({ favorite: true })
  //   })
  //     .then(resp => resp.json())
  //     .then(updatedRecipe => {
  //       let newArray = [...this.state.recipe]
  //       let aRecipe = newArray.find(el => el.id === updatedRecipe.id)
  //       let idx = newArray.indexOf(aRecipe)
  //       console.log(idx)
  //       newArray[`${idx}`] = updatedRecipe
  //       this.setState({ recipe: newArray })
  //     })
  //     .catch(console.log)
  //   // update current array to reflect the change
  // }





  // renderFavorites = () => {
  //   return this.state.recipe.filter(el => el.favorite)
  // }



  render() {
    // console.log(this.state.recipes)
    return (
      <>
        {/* <Favorites recipes={this.state.favorite} clickHandler={this.renderFavorites} /> */}

        <div className='container'>
          ÷
          <Sidebar recipes={this.state.recipes} />
          <Content recipes={this.state.recipes} />



        </div>
      </>
    )
  }
}

export default RecipeContainer;