import React from 'react';

class RecipeCard extends React.Component {

    render() {
        console.log(this.props.recipe.id)
        return (
            <div className="recipe-card" onClick={() => this.props.clickHandler(this.props.recipe.id)}>
                < h3>{this.props.recipe.title}</h3>
                <img alt="this image no longer available" src={this.props.recipe.image}  width="300px" />
                <h4>This recipe serves: {this.props.recipe.servings}</h4>
                {/* <p>{list of ingredients}</p> */}
            </div>
        )
    }

}

export default RecipeCard;