import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

class RecipeContainer extends React.Component {

    state={
        recipes: []
      }
    
      componentDidMount() {
        fetch('http://localhost:3000/api/v1/recipes')
        .then(resp => resp.json())
        .then(recipes => this.setState({ recipes: recipes}))
        .catch(console.log)
      }
    render() {
        // console.log(this.state.recipes)
        return (
        <div className='container'>
            <Sidebar recipes={this.state.recipes} />
            <Content recipes={this.state.recipes} />
        </div>
        )
    }
}

export default RecipeContainer;