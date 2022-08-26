import React, { Component, createRef } from 'react';
import { withRouter} from 'react-router-dom'
import './home.css';
import csharp from './images/C-Sharp.png'
import react from './images/React-icon.png'
import net from './images/net.png'
import aws from './images/aws.png'




class Home extends Component {

    constructor(props){
        super(props);
        this.scrollDiv = createRef();
        this.otherSkills = createRef();

        this.state = {
            chosenTechSkill: null
        }
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
                        <button class="nav-link btn btn-link" href="#otherSkills" onClick={() => {this.otherSkills.current.scrollIntoView({ behavior: 'smooth' }); }}>.OtherSkills( )</button>
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

                        <div class={'card card-body skill-card '+(this.state.chosenTechSkill == 0? "chosen": null)} onClick={()=>{this.setState({chosenTechSkill: 0})}}>
                             
                                <img src={csharp}></img>
                        </div>
                        <div class="card card-body skill-card">
                        <img src={react}></img>
                        </div>
                        <div class={'card card-body skill-card '+(this.state.chosenTechSkill == 0? "chosen": null)}>
                        <img src={net}></img>
                        </div>
                        <div class="card card-body skill-card">
                        <img src={aws}></img>
                        </div>

                    </div>


                    <div id="skillText" class="mt-3 card card-body h4">
                        {
                            this.state.chosenTechSkill == 0? "Junior Developer at Reed.co.uk, using the following technologies C# .NET MVC, VueJs, MicrosoftSqlServer, Azure Devops, to build and maintain the Reed Courses Ecommerce platform": null
                        }
                    </div>

                </div>


                <div id="page3" class="page">
                        <h2 id="otherSkills" ref={this.otherSkills}>Other skills</h2>
                </div>
  
            </div>

        );
    }
}

export default withRouter(Home);