import React from 'react';

class Create extends React.Component {

    state={
        recipes: [],
        title: "",
        image: "",
        summary: "",
        readyInMinutes: "",
        servings: "",
        ingredients: {}
      }

      // ingredientChangeHandler = (id) => {
      //   this.state.ingredients.map(epices => 
      //  newarray << id: recipe.id and epices: epices)
      // this.setState(id: id, ingredients: newarray)
      // }
    
      submitHandler = (e) => {
        e.preventDefault()
        // this.props.submitHandler(this.state)
        fetch('http://localhost:3000/api/v1/recipes', {
          method: 'POST',
          headers: {'content-type':'application/json'},
          body: JSON.stringify({
            title: this.state.title,
            image: this.state.image,
            summary: this.state.summary,
            readyInMinutes: this.state.readyInMinutes,
            servings: this.state.servings,
            ingredients: this.state.ingredients
          })
        })
        .then(resp => resp.json())
        .then(newRecipe => {
          let newArray = [...this.state.recipes, newRecipe]
          this.setState({ 
            recipes: newArray,
            title: "",
            image: "",
            summary: "",
            readyInMinutes: "",
            servings: "",
            ingredients: []
          })
        })
        .catch(console.log)
      }
    
      changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
      }
    
      render() {
        console.log(this.state)
        return (
            <>
            <h3>Create a Recipe</h3>
          <form className="new-recipe-form" onSubmit={this.submitHandler}>
            <input placeholder="Recipe Name" type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
            <input placeholder="servings" type="integer" name="servings" value={this.state.servings} onChange={this.changeHandler} />
            <input placeholder="Image URL" type="text" name="image" value={this.state.image} onChange={this.changeHandler} />
            <input placeholder="Ready In Minutes" type="text" name="readyInMinutes" value={this.state.readyInMinutes} onChange={this.changeHandler} />
            <input placeholder="Ingredients, separated by commas" type="text" name="ingredients" value={this.state.ingredients.epices} onChange={this.ingredientChangeHandler} />
            <textarea placeholder="Summary..." rows={10} type="text" name="summary" value={this.state.summary} onChange={this.changeHandler} />
            <input type="submit" value="Submit" />
          </form>
          </>
        );
      }

}

export default Create;