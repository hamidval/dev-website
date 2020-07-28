import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import londonSky from './londonSky.jpg'
import About from './About'
import Projects from './Projects'
import { colors } from '@material-ui/core';
const imageStyle = {
    backgroundImage: `url(${londonSky})`,
    height:'100vh',
    backgroundSize: 'auto 100%',
    textAlign: 'center',
    position: 'inline',
    marginTop: '0  !important'

  }

  const aboutStyle = {
    backgroundColor:'white',
    minHeight:'100vh',
    backgroundSize: 'auto 100%',
    textAlign: 'center',
    position: 'inline',
    marginTop: '0  !important'

  }

  const projectsStyle = {
    backgroundColor:'black',
    minHeight:'100vh',
    backgroundSize: 'auto 100%',
    textAlign: 'center',
    position: 'inline',
    marginTop: '0  !important',
    color: 'white'

  }



class Home extends Component {



    render() {

        return ( 
            



            <div>
                <div style={imageStyle}>
                    <div className='home-title'>
                        Skyline Developers
                    </div>

                </div>
                <div style={aboutStyle}>
                    <About/>                   
                    
                </div>
                <div style={projectsStyle}>
                    <Projects/>
                    
                </div>
            </div>

        );
    }
}

export default withRouter(Home);