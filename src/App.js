import React, { Component } from 'react';
import { HashRouter as Router, Route,Switch} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import PortfolioHamid from './components/PortfolioHamid'
import ReactWhatsApp from './components/ReactWhatsApp'
import './Custom.css';
import './App.css';



class App extends Component {
  render (){


    return(
    <div className="App" >
  <Router basename={'dev-website'}>
    <div >
      <Switch>
      
      <Route exact path='/' render={() => (<Home  />)}/> 
      <Route path='/main' render={() => (<Home  />)}/> 
      <Route exact path='/about' render={() => (<About  />)}/> 
      <Route exact path='/projects' render={() => (<Projects  />)}/> 
      <Route exact path='/hamid' render={() => (<PortfolioHamid  />)}/> 
      <Route exact path='/whatsapp' render={() => (<ReactWhatsApp  />)}/> 

  </Switch>
 
    
    </div>
    </Router>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </div>
  )}
}

export default App;
