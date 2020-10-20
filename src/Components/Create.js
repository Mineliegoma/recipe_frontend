import React from 'react';

class Create extends React.Component {

    state={
        title: "",
        image: "",
        summary: ""
      }
    
      submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
      }
    
      changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
      }
    
      render() {
        // console.log(this.state)
        return (
            <>
            <h3>Create a Recipe</h3>
          <form className="new-recipe-form" onSubmit={this.submitHandler}>
            <input placeholder="Recipe Name" type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
            <input placeholder="Image" type="image" name="image" value={this.state.image} onChange={this.changeHandler} />
            <textarea placeholder="Summary..." rows={10} type="text" name="summary" value={this.state.content} onChange={this.changeHandler} />
            <input type="submit" value="Submit" />
          </form>
          </>
        );
      }

}

export default Create;