import React from 'react';

class RecipePage extends React.Component {

    render() {
        let text = this.props.recipe.summary
        console.log(this.props.recipe)
        return (
            <div className="recipe-page" onClick={this.props.clickHandler}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    < h1 >{this.props.recipe.title}</h1>
                    <button type="button" className="close" font-size="25px">X</button>
                    </div>
                <img alt="this image no longer available" src={this.props.recipe.image} width={800}  />
                <div dangerouslySetInnerHTML={{__html: text}} />
            </div>
        )
    }

}

export default RecipePage;