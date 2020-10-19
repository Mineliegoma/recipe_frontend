import React from "react";

class RecipesCard extends React.Component {

 render() {
  return (
   <div className="container">
    <div className="card-front">
     <p>
      <strong>-{this.props.recipe.title}</strong>
     </p>
     <img alt="" src={this.props.recipe.image} class="image" />
     <div>
      <button className="button">Click for more 😋</button>
     </div>
    </div>

   </div>
  );
 }
}
export default RecipesCard;