import React from 'react';

class RecipePage extends React.Component {

    ingredientLister = () => {
        return this.props.recipe.ingredients.map(obj => <p>{obj.epices}</p>)
    }

    render() {

        let text = this.props.recipe.summary
        console.log(this.props.recipe.ingredients)
        return (
            <div className="recipe-page" onClick={this.props.clickHandler}>
                < h1>{this.props.recipe.title}</h1>
                <img alt="this image no longer available" src={this.props.recipe.image} width={800} />
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