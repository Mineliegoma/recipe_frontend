import React from 'react';
import RecipesCard from '../components/RecipesCard'

class Recipes extends React.Component {

 renderRecipes = () => {
  return this.props.recipes.map(obj => <RecipesCard key={obj.id} recipe={obj} />)
 }


 render() {

  return (
   <div>
    <h1 className='header'>Recipes</h1>
    {this.renderRecipes()}

   </div>
  )

 }
}
export default Recipes