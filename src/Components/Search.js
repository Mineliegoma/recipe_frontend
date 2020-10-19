import React from 'react';

class Search extends React.Component {

    render(){
        return(
            <>
            <h3>Find a Recipe</h3>
            <div className="filter">
            <input
              id="search-bar"
              type="text"
              placeholder="Search Recipes"
            />
          </div>
          </>
        )

    }

}

export default Search;