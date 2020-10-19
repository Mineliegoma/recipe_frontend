import React from 'react';

class RecipePage extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Recipe Page</h2>
                {/* < h3>{this.props.recipe.title}</h3>
                <img alt="this image no longer available" src={this.props.recipe.image} width={400}  />
                <h4>This recipe serves: {this.props.recipe.servings}</h4> */}
            </div>
        )
    }

}

export default RecipePage;