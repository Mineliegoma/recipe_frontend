import React from 'react';
import Signup from '../Components/Signup'
import Login from '../Components/Login'

class Header extends React.Component {

  render() {
    return (
      <header className="App-header">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Signup />
          <h1>Recipes</h1>
          {/* <Search searchTerm={this.state.searchTerm} changeHandler={this.searchHandler} /> */}
          <Login />
        </div>
      </header>
    )
  }

}

export default Header;