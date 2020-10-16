import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import video from './video.mp4'
import logo from './gailslogo.png'




class Home extends Component {



    render() {

        return ( 
            <div>

          <section class="wrapper">
 
              
     
            <div class="video-wrap">
              <div className="landing-text">
                <img src={logo} className="gails-title"></img>
              </div>
           
            <video loop src={video} muted={true} autoPlay>
            <source   type="video/mp4"/>
            </video>
            </div>
            <div class="overlay"></div>
           
          </section>
          <section className="wrapper-2">
           <div>
             info
           </div>
           
          </section>




            </div>
         

        );
    }
}

export default withRouter(Home);