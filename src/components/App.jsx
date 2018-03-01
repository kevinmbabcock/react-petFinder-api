import React from 'react';
import Header from './Header';
import About from './About';
import PetListContainer from './PetListContainer';
import Error404 from './Error404';
import NavBar from './NavBar';
import SearchForm from './SearchForm';
import { Switch, Route, withRouter } from 'react-router-dom';

function App(){
  return (
    <div>
      <NavBar />
      <Header />
      <Switch >
        <Route exact path='/' component={About} />
        <Route path='/pets' component={PetListContainer} />
        <Route path='/search' component={SearchForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
