import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './views/Landing.js'
import Navbar from './components/Navbar.js'
import Todos from './views/Todos.js'
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <BrowserRouter>      
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/todos">
          <Todos />
        </Route>
      </Switch>
      <NotificationContainer />
    </BrowserRouter>
  );
}

export default App;