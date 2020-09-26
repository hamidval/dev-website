import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import video from './video.mp4'




class Home extends Component {



    render() {

        return ( 
            
            <section class="wrapper">
            <div class="video-wrap">
            <video loop src={video} muted={true} autoPlay>
            <source   type="video/mp4"/>
            </video>
            </div>
            <div class="overlay"></div>
            <div class="landingText">
              <p>test</p>
            </div>
          </section>

        );
    }
}

export default withRouter(Home);