import React from 'react';
import RecipeCard from '../components/RecipeCard'
import RecipePage from '../components/RecipePage'
import Search from '../components/Search'
import { Route, Switch } from 'react-router-dom'
// import Favorites from './Favorites'


class Content extends React.Component {

    state = {
        clicked: false,
        id: null,
        searchRec: "",

    }

    clickHandler = (id) => {
        console.log("click", id)
        this.setState({
            clicked: !this.state.clicked,
            id: id
        })
    }

    renderRecipePage = () => {
        let recipe = this.props.recipes.find(recipe => recipe.id === this.state.id)
        return <RecipePage key={recipe.id} recipe={recipe} clickHandler={this.clickHandler} />

    }
    //clickHandler={this.props.clickHandler}

    hideRecipePageHandler = () => {
        this.setState({ clicked: !this.state.clicked, id: null })
    }

    renderRecipeCards = () => {
        let shuffled = this.props.recipes.sort(() => 0.5 - Math.random());

        return shuffled.filter(el => el.title.toLowerCase().includes(this.state.searchRec.toLowerCase())).slice(0, 12).map(recipe => <RecipeCard key={recipe.id} recipe={recipe} clickHandler={this.clickHandler} recipeHandler={this.renderRecipePage} />)
    }

    searchChange = e => {
        this.setState({ searchRec: e.target.value })
    }


    render() {
        return (
            <>

                <Search searchRec={this.state.searchRec} searchHandler={this.searchChange} />



                <Switch>
                    <div className='master-detail-element detail'>
                        <div className='render-recipes' >

                            {/* {this.state.clicked ? this.renderRecipePage() : <div className="columns-cards">{this.renderRecipeCards()}</div>} */}
                            <Route path="/recipes" render={() => this.state.clicked ? this.renderRecipePage() : <div className="columns-cards">{this.renderRecipeCards()} </div>} />

                            {/* {/* <Route path="/recipes" render={() => this.renderRecipeCards()} /> */}
                            {/* <Route path="/favorites" render={() => { return (<Favorites recipes={this.props.renderFavorite()} />) }} /> */}
                        </div>
                    </div>


                </Switch>

            </>
        )

    }

}

export default Content;