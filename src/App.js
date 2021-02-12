
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 import './App.css';  
import About from './components/pages/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/skills' component={Skills}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
