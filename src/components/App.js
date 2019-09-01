import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss';
import Main from './Main/Main'
import Portfolio from './Portfolio/Portfolio'
import Item from './Item/Item'
import Contact from './Contact/Contact'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/item/:id" component={Item} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
