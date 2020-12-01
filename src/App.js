import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

export default App;
