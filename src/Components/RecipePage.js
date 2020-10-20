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
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    < h1 >{this.props.recipe.title}</h1>
                    <button type="button" className="close" font-size="25px">X</button>
                </div>
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