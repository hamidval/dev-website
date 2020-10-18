import React, { Component } from 'react';
import { HashRouter as Router, Route,Switch} from "react-router-dom";
import Home from './components/Home'

import GailHome from './components/example_website/Home'
import GailProduct from './components/example_website/Product'
import GailContact from './components/example_website/Contact'
import Feature from './components/Feature'

import './Custom.css';
import './App.css';



class App extends Component {


  componentDidMount = ()=>{
    document.title = "Skyline"
  }
  render (){




    return(
    <div className="App" >
  <Router basename={'dev-website'}>
    <div >
      <Switch>
      
      <Route exact path='/' render={() => (<Home  />)}/> 
      

      <Route exact path='/features' render={() => (<Feature  />)}/> 

      <Route path='/gails' render={() => (<GailHome  />)}/> 
      <Route exact path='/contact' render={() => (<GailContact  />)}/>
      <Route exact path='/product' render={() => (<GailProduct  />)}/>  
     
    
      

  </Switch>
 
    
    </div>
    </Router>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </div>
  )}
}

export default App;
