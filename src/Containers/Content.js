import React from 'react';
import RecipeCard from '../Components/RecipeCard'
import RecipePage from '../Components/RecipePage'

class Content extends React.Component {

    // Shuffle array

    // Get sub-array of first n elements after shuffled
    // let selected = shuffled.slice(0, n);

    renderRecipeCards = () => {
        const shuffled = this.props.recipes.sort(() => 0.5 - Math.random());


        return shuffled.slice(0,6).map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
      }

    //     renderRecipePage = () => {
    //     return this.props.recipes.map(recipe => <RecipePage key={recipe.id} recipe={recipe} />)
    //   }

    render(){
        console.log(this.props)

            // render six random RecipeCards if unclicked - or - 
            // render six searchTerm matches RecipeCards if searched and unclicked - or -
            // if RecipeCard is clicked, render that recipe's RecipePage
        return(
            <div className='master-detail-element detail'>
                <div className='render-recipes' >
                {this.renderRecipeCards()}
                </div>
                <div>
                <RecipePage />
                </div>
            </div>
        )

    }

}

export default Content;