import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recipes from "./containers/Recipes"
import SearchRecipe from './components/SearchRecipe';
class App extends React.Component {
  state = {
    recipe: []
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/recipes")
      .then(response => response.json())
      .then(data => this.setState({ recipe: data }))
    // .then(console.log)
  }
  render() {
    console.log(this.state.recipe)
    //console.log(this.state.recipe)
    //  api_v1_recipes GET / api / v1 / recipes(.: format)    api / v1 / recipes#index

    return (
      <div className="App" >
        <br />
        <SearchRecipe />
        <Recipes recipes={this.state.recipe} />


      </div>
    );
  }
}

export default App;
