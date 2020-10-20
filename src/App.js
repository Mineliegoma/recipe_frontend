import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './containers/Header'
import RecipeContainer from './containers/RecipeContainer'

class App extends React.Component {
  render() {

    return (
      <div className="app">
        <Header />
        <RecipeContainer />
      </div>
    );
  }
}

export default App;
