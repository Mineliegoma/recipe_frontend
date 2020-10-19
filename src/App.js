import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Containers/Header'
import RecipeContainer from './Containers/RecipeContainer'

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
