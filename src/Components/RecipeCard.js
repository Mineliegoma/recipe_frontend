import React from 'react';

class RecipeCard extends React.Component {

    ingredientLister = () => {
        return this.props.recipe.ingredients.slice(0, 3).map(obj => <li>{obj.epices}</li>)
    }

    render() {
        console.log(this.props.recipe)
        return (
            <div className="recipe-card" onClick={() => this.props.clickHandler(this.props.recipe.id)}>
                < h2>{this.props.recipe.title}</h2>
                <img alt="this image no longer available" src={this.props.recipe.image}  width="300px" />
                <h3>This recipe is ready in: {this.props.recipe.readyInMinutes} minutes!</h3>
                <div>Ingredients:
                {this.ingredientLister()}   <i>... (click to see more) </i>      
                </div>
                </div>
        )
    }

}

export default RecipeCard;