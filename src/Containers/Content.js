import React from 'react';
import RecipeCard from '../Components/RecipeCard'
import RecipePage from '../Components/RecipePage'

class Content extends React.Component {

    renderRecipeCards = () => {
        return this.props.recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
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
                <span>
                {this.renderRecipeCards()}
                </span>
                <span>
                <RecipePage />
                </span>
            </div>

        )

    }

}

export default Content;