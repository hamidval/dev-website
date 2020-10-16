import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import londonSky from './londonSky.jpg'
import About from './About'
import Projects from './Projects'

import { colors } from '@material-ui/core';
import Testimonial from './Testimonial';
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
    backgroundColor:'white',
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
                <section style={imageStyle}>
                    <div className='home-title'>
                        Skyline Developers
                     
              
                    </div>

                    
                    <div >
                                <p>Digital branding agency</p>
                                <p>Let us guide you through building an online prescrence</p>
                    </div>

                </section>
                <section style={projectsStyle}>
                    <Projects/>
                    
                </section>
                <section style={aboutStyle}>
                    <Testimonial/>
                    
                </section>
                <section style={aboutStyle}>
                    <About/>                   
                    
                </section>
              
            </div>

        );
    }
}

export default withRouter(Home);