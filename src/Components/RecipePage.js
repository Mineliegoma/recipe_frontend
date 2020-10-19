import React from 'react';

class RecipePage extends React.Component {

    render() {
        let text = this.props.recipe.summary
        console.log(this.props.recipe)
        return (
            <div className="recipe-page" onClick={this.props.clickHandler}>
                < h1>{this.props.recipe.title}</h1>
                <img alt="this image no longer available" src={this.props.recipe.image} width={800}  />
                <div dangerouslySetInnerHTML={{__html: text}} />
            </div>
        )
    }

}

export default RecipePage;