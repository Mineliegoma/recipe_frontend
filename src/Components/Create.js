import React from 'react';

class Create extends React.Component {

  state = {
    // recipes: [],
    title: "",
    image: "",
    summary: "",
    readyInMinutes: "",
    servings: "",
    ingredients: {}
  }


  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({ title: "", servings: "", image: "", readyInMinutes: "", ingredients: "", summary: "" })
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
          <textarea placeholder="Summary" rows={10} type="text" name="summary" value={this.state.summary} onChange={this.changeHandler} />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }

}

export default Create;