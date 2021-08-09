import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import Home from '../home/Home';
import List from '../list/List';
import './App.scss';

export default function App() {
  return <Router><Switch>

    <Route path="/" exact render={routerProps => (
      <Home {...routerProps}/>
    )}/>

    <Route path="/list/:api" exact render={routerProps => (
      <List {...routerProps}/>
    )}/>

    <Redirect to="/"/>

  </Switch></Router>;
}
