import React from 'react';
import { NavLink, link } from 'react-router-dom'

class RecipePage extends React.Component {
    state = {
        clicked: true
    }

    ingredientLister = () => {
        return this.props.recipe.ingredients.map(obj => <p>{obj.epices}</p>)
    }
    clickHandler = () => {
        // console.log('clicking')
        this.setState((prevState) => ({ clicked: !prevState.clicked }))
    }

    render() {

        let text = this.props.recipe.summary
        console.log(this.props.recipe.ingredients)
        return (
            <div className="recipe-page" >
                < h1>{this.props.recipe.title}</h1>
                <img alt="this image no longer available" src={this.props.recipe.image} width={500} onClick={this.props.clickHandler} />
                {/* <button className="addFavorite" onClick={this.clickHandler}>Add to favorites</button> */}
                <div dangerouslySetInnerHTML={{ __html: text }} />
                <div>
                    <h2>Here the ingredient List</h2>
                    {this.ingredientLister()}

                </div>
            </div>
        )
    }

}

export default RecipePage;