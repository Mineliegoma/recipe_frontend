import React from 'react';
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
