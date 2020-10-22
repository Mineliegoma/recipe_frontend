import React from 'react'
import RecipePage from '../components/RecipePage'
function Favorites(props) {

 function renderRecipes() {
  return this.props.recipes.map(el => <RecipePage key={el.id} recipe={el} />)

 }
 console.log(props)
 return (
  <>
   {/* <h1>my favorites</h1>
   <h2>"james"</h2> */}
   {renderRecipes()}
   <h1>james</h1>
  </>
 )
}
export default Favorites