import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './App.css';
import Home from './components/pages/homepage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
     <Footer />
    </Router>
  );
}

export default App;
