import React from 'react';

function Search(props) {
  return (
    <>
      <h3>Find a Recipe</h3>
      <div className="filter">
        <input

          id="search-bar"
          type="text"
          value={props.searchElement}
          onChange={props.searchHandler}
          placeholder="Search Recipes"
        />
      </div>
    </>
  )



}

export default Search;