import React from 'react';

class RecipeCard extends React.Component {


    render() {
        console.log(this.props.recipes)
        return (
            <div className="recipe-card">
                < h3>{this.props.recipe.title}</h3>
                <img alt="this image no longer available" src={this.props.recipe.image} width={400}  />
                <h4>This recipe serves: {this.props.recipe.servings}</h4>
                {/* <p>{list of ingredients}</p> */}
            </div>
        )
    }

}

export default RecipeCard;