import React from 'react';
// import { NavLink, link } from 'react-router-dom'

class RecipeCard extends React.Component {

    render() {
        // console.log(this.props.recipe.id)
        return (
            <div className="recipe-card" >
                < h3>{this.props.recipe.title}</h3>
                <img onClick={() => this.props.clickHandler(this.props.recipe.id)} alt="this image no longer available" src={this.props.recipe.image} width="300px" />
                <h4>Cooking time: {this.props.recipe.readyInMinutes} minutes </h4>
                {/* <button className="likes"> 0 likes </button> */}
                {/* <p>{list of ingredients}</p> */}
            </div>
        )
    }

}

export default RecipeCard;