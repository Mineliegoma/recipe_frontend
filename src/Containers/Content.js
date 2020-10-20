import React from 'react';
import RecipeCard from '../components/RecipeCard'
import RecipePage from '../components/RecipePage'
import Search from '../components/Search'

class Content extends React.Component {

    state = {
        clicked: false,
        id: null,
        searchRec: ""
    }

    clickHandler = (id) => {
        console.log("click", id)
        this.setState({
            clicked: !this.state.clicked,
            id: id
        })
        // return this.props.recipes.findBy(recipe.id === id).map(recipe => <RecipePage key={recipe.id} recipe={recipe} clickHandler={this.clickHandler} />)
    }

    renderRecipePage = () => {
        let recipe = this.props.recipes.find(recipe => recipe.id === this.state.id)
        return <RecipePage key={recipe.id} recipe={recipe} clickHandler={this.hideRecipePageHandler} />

    }

    hideRecipePageHandler = () => {
        this.setState({ clicked: !this.state.clicked, id: null })
    }

    // Shuffle array

    // Get sub-array of first n elements after shuffled
    // let selected = shuffled.slice(0, n);

    renderRecipeCards = () => {
        let shuffled = this.props.recipes.sort(() => 0.5 - Math.random());

        return shuffled.slice(0, 6).filter(el => el.title.toLowerCase().includes(this.state.searchRec.toLowerCase())).map(recipe => <RecipeCard key={recipe.id} recipe={recipe} clickHandler={this.clickHandler} recipeHandler={this.renderRecipePage} />)
    }

    searchChange = e => {
        this.setState({ searchRec: e.target.value })
    }


    render() {
        console.log("click", this.state.clicked)
        console.log(this.props.recipes)

        // render six random RecipeCards if unclicked - or - 
        // render six searchTerm matches RecipeCards if searched and unclicked - or -
        // if RecipeCard is clicked, render that recipe's RecipePage
        return (
            <div className='master-detail-element detail'>
                <div className='render-recipes' >
                    <Search searchRec={this.state.searchRec} searchHandler={this.searchChange} />
                    <div >
                        {this.state.clicked ? this.renderRecipePage() : <div className="columns-cards">{this.renderRecipeCards()}</div>}
                    </div>
                </div>
            </div>
        )

    }

}

export default Content;