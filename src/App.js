
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 import './App.css';  
import About from './components/pages/Home';
import Project from './components/Project';
import Skills from './components/Skills';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={About} />
         <Route path='/project' component={Project}/>
        <Route path='/skills' component={Skills}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
