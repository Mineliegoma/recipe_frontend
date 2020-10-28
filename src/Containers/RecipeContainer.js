import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import Create from '../components/Create'
// // import Favorites from './Favorites'
// import Search from '../components/Search'
// import RecipeCard from '../components/RecipeCard'
// import { Route, Switch } from 'react-router-dom'



class RecipeContainer extends React.Component {

  state = {
    recipes: [],

    // favorite: []
    // user: nil
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/recipes')
      .then(resp => resp.json())
      .then(recipes => this.setState({ recipes: recipes }))
      .catch(console.log)
  }

  submitHandler = (obj) => {
    console.log("submitting:", obj)
    // e.preventDefault()
    // this.props.submitHandler(this.state)
    fetch('http://localhost:3000/api/v1/recipes', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(obj)

    })
      .then(resp => resp.json())
      .then(newRecipe => {
        let newArray = [...this.state.recipes, newRecipe]
        this.setState({
          recipes: newArray
        }, () => console.log("new sTATE:", this.state.recipe)
        )
      })
      .catch(console.log)
  }


  render() {
    // console.log(this.state.recipes)
    return (
      <>
        <div className='container'>
          <Create submitHandler={this.submitHandler} />
          <Sidebar recipes={this.state.recipes} ></Sidebar>
          <Content recipes={this.state.recipes} />



        </div>
      </>
    )
  }
}

export default RecipeContainer;