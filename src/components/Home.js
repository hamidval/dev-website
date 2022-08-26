import React, { Component, createRef } from 'react';
import { withRouter} from 'react-router-dom'
import './home.css';




class Home extends Component {

    constructor(props){
        super(props);
        this.scrollDiv = createRef();
    }

    render() {

        return (           



            <div>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <button class="nav-link btn btn-link" href="#technicalSkills" onClick={() => {this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' }); }}>.TechnicalSkills( ) <span class="sr-only">(current)</span></button>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">.OtherSkills( )</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">.Hobbies&Interests( )</a>
                    </li>

                    
                    </ul>
                
                </div>
                </nav>

                <div id="page1" class="page">
                        <h1 class="pt-5">Hi, Welcome to Hamid's portfolio</h1>
                </div>
                <div id="page2" class="page">
                    <h2 id="technicalSkills" ref={this.scrollDiv} class="mt-3 mb-3">Technical Skills</h2>
                    <div class="card-container mt-3">

                        <div class="card card-body skill-card">
                                <h3>C#</h3>
                        </div>
                        <div class="card card-body skill-card">
                                <h3>React</h3>
                        </div>
                        <div class="card card-body skill-card">
                                <h3>.NET</h3>
                        </div>
                        <div class="card card-body skill-card">
                                <h3>AWS</h3>
                        </div>

                    </div>

                </div>
  
            </div>

        );
    }
}

export default withRouter(Home);