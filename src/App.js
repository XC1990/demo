import React, { Component } from 'react';
import logo from './logo.svg';
import productActions from './actions/products'
import RaisedButton from 'material-ui/RaisedButton'
import ProductGrid from './components/product-grid/ProductGrid'
import ShoppingList from './components/shopping-list/ShoppingList'
import HomePage from './container/home-page'
import AboutPage from './container/about'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    return (
      <Router>
        <div className="App">
          <AppBar
            showMenuIconButton={false}
            title="FPV Builder"
            iconElementRight={<Tabs>
              <Tab label="Home" style={{ marginLeft: '1em', marginRight: '1em' }} containerElement={<Link to="/" />}></Tab>
              <Tab label="About" style={{ marginLeft: '1em', marginRight: '1em' }} containerElement={<Link to="/about" />}></Tab>
            </Tabs>}
          />
          <div className="MainContentController">
            <Route exact path="/" component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
          </div>
        </div>
      </Router>
    );
  }
}



export default App;
