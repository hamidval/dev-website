import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import video from './video.mp4'
import logo from './gailslogo.png'




class Home extends Component {



    render() {

        return ( 
            <div>
              <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="#">Navbar</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>
              </div>
            </nav>


              </div>

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