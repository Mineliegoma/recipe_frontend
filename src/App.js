import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './containers/Header'
import RecipeContainer from './containers/RecipeContainer'
import HeyWelcome from './components/HeyWelcome'
import NavBar from './components/NavBar';
// import Favorites from './containers/Favorites';
function App() {




  return (
    <>

      <NavBar />
      {/* <div className="app">
        <Header />
      </div> */}
      <Switch>

        <Route path="/recipes" component={RecipeContainer} />
        {/* <Route path="/favorites" component={Favorites} /> */}
        <Route component={HeyWelcome} />

      </Switch>

    </>

  );

}

export default App;
