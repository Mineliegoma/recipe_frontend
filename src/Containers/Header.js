import React from 'react';
import Signup from '../components/Signup'
import Login from '../components/Login'

class Header extends React.Component {

  render() {
    return (
      <header className="App-header">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Signup />
          {/* <h1>Recipes</h1> */}
          {/* <Search searchTerm={this.state.searchTerm} changeHandler={this.searchHandler} /> */}
          <Login />
        </div>
      </header>
    )
  }

}

export default Header;