import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

class RecipeContainer extends React.Component {

    state={
        recipes: []
      }
    
      componentDidMount() {
        fetch('https://api.spoonacular.com/recipes/random?&number=6')
        .then(resp => resp.json())
        .then(recipes => this.setState({ recipes: recipes.recipes}))
        .catch(console.log)
      }
    render() {
        console.log(this.state.recipes)
        return (
        <div className='container'>
            <Sidebar recipes={this.state.recipes} />
            <Content recipes={this.state.recipes} />
        </div>
        )
    }
}

export default RecipeContainer;