import React, { Component, createRef } from 'react';
import { withRouter} from 'react-router-dom'
import './home.css';
import csharp from './images/C-Sharp.png'
import react from './images/React-icon.png'
import net from './images/net.png'
import aws from './images/aws.png'
import youview from './images/youview.png'
import reed from './images/reedcourses.png'
import lambda from './images/lambda.png'
import teaching from './images/teaching.png'
import publicspeaking from './images/publicspeaking.png'



class Home extends Component {

    constructor(props){
        super(props);
        this.scrollDiv = createRef();
        this.otherSkills = createRef();
        this.personalSkills = createRef();


        this.state = {
            chosenTechSkill: null,
            chosenOtherSkill: null
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
                        <button class="nav-link btn btn-link" href="#personalSkills" onClick={() => {this.personalSkills.current.scrollIntoView({ behavior: 'smooth' }); }}>.Personal( )</button>
                    </li>

                    
                    </ul>
                
                </div>
                </nav>

                <div id="page1" class="page">
                    <div class="container">
                    <h1 class="pt-5">Hi, Welcome to Hamid's portfolio</h1>
                    
                    {/* <div className='row'>
                            <div className='col-9'>
                                <input className='form form-control'/>
                            </div>
                            <div className='col-3'>
                                <button className="btn btn-primary">search</button>
                            </div>                          
                           
                        </div> */}
                    </div>
                        
                </div>


                <div id="page2" className='page' >
                    <div className='container'>
                    <h2 id="technicalSkills" ref={this.scrollDiv} class="pt-3 mb-3">Technical</h2>
                    
                    <div className='row'>

                        <div className='col-6'>
                            <div class="card-container mt-3">
                                <div class={'card card-body skill-card '+(this.state.chosenTechSkill == 0? "chosen": null)} onClick={()=>{this.setState({chosenTechSkill: 0})}}>
                                    
                                        <img src={csharp}></img>
                                </div>
                                <div class={'card card-body skill-card ' +(this.state.chosenTechSkill == 1? "chosen": null)} onClick={()=>{this.setState({chosenTechSkill: 1})}}>
                                <img src={react}></img>
                                </div>
                                <div class={'card card-body skill-card '+(this.state.chosenTechSkill == 0? "chosen": null)} onClick={()=>{this.setState({chosenTechSkill: 0})}}>
                                <img src={net}></img>
                                </div>
                                <div class={'card card-body skill-card ' +(this.state.chosenTechSkill == 1? "chosen": null)} onClick={()=>{this.setState({chosenTechSkill: 1})}}>
                                <img src={aws}></img>
                                </div>

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card-container mt-3">
                                <div class={'card card-body skill-card '+(this.state.chosenTechSkill == 0? "chosen": null)} onClick={()=>{this.setState({chosenTechSkill: 0})}}>
                                    
                                        <img src={reed}></img>
                                </div>
                                <div class={'card card-body skill-card ' +(this.state.chosenTechSkill == 1? "chosen": null)} onClick={()=>{this.setState({chosenTechSkill: 1})}}>
                                <img src={youview}></img>
                                </div>
                           

                            </div>
                        </div>

                    </div>
                    
                    


                    
                        {
                            this.state.chosenTechSkill != null?
                            
                            (

                                <div id="skillText" class="mt-3 card card-body h4">
                            {this.state.chosenTechSkill == 0?
                             
                            
                            (<div class="container job-text">
                                <div class="row mt-2">
                                    <div class="col-3">Role :</div>
                                    <div class="col-9">Junior Developer</div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-3">Company :</div>
                                    <div class="col-9">Reed.co.uk (Courses)</div>                                    
                                </div>
                                <div class="row mt-2">
                                    <div class="col-3">About :</div>
                                    <div class="col-9">Built and maintained the Reed.co.uk Courses ecommerce platform</div>                                    
                                </div>
                                <div class="row mt-2">
                                    <div class="col-3">Highlights :</div>
                                    <div class="col-9">
                                        <ul>
                                            <li>AB tests</li>
                                            <li>Built feature for users to advertise certificates as part of their courses</li>
                                            <li>Discovery and implementation of a hashing algorithm to compare images, project focus was on identitfying courses that have been copied/duplicated</li>
                                        </ul>  
                                    </div>                                    
                                </div>
                                
                            </div>)
                             
                             
                             : this.state.chosenTechSkill == 1?
                             
                            
                             (<div class="container job-text">
                                 <div class="row mt-2">
                                     <div class="col-3">Role :</div>
                                     <div class="col-9">Software Developer Intern</div>
                                 </div>
                                 <div class="row mt-2">
                                     <div class="col-3">Company :</div>
                                     <div class="col-9">Youview</div>                                    
                                 </div>
                                 <div class="row mt-2">
                                     <div class="col-3">About :</div>
                                     <div class="col-9">Built and maintained the Reed.co.uk Courses ecommerce platform</div>                                    
                                 </div>
                                 <div class="row mt-2">
                                     <div class="col-3">Highlights :</div>
                                     <div class="col-9">
                                         <ul>
                                             <li>10 week internship</li>
                                             <li>Built a screenshot comparison tool</li>
                                             <li>hosted quiz, organised charity event</li>
                                         </ul>  
                                     </div>                                    
                                 </div>
                                 
                             </div>) : null
                            }</div>
                            )
                            : null
                        }
                            
                        
                    </div>
                   
                    

                </div>


                <div id="page3" class="page container" >
                        <h2 id="otherSkills" ref={this.otherSkills}>Other</h2>
                        <div class="card-container-other mt-4">
                                <div class={'card card-body other-card '+(this.state.chosenOtherSkill == 0? "expand": null)} onClick={()=>{this.setState({chosenOtherSkill: 0})}}> 
                                    <h3>Public speaking</h3>                                   
                                <img class="other-card-img" src={publicspeaking}></img>

                                <div className={'other-skills-text mt-5 '+(this.state.chosenOtherSkill == 0? null: "hide")}>
                                    <ul>
                                        <li>School council president</li>
                                        <li>Quiz host (at work and at parties!)</li>
                                        <li>Demo's to the wider company</li>
                                    </ul>
                              
                                    
                                </div>

                                </div>
                                <div class={'card card-body other-card '+(this.state.chosenOtherSkill == 1? "expand": null)} onClick={()=>{this.setState({chosenOtherSkill: 1})}}>
                                    <h3>Teaching</h3>
                                <img class="other-card-img"  src={teaching}></img>
                                <div className={'other-skills-text mt-5 '+(this.state.chosenOtherSkill == 1? null: "hide")}>

                                    <ul>
                                        <li>Private tutor for maths</li>
                                        <li>Hosted revison sessions at university</li>
                                        <li>In 2021, I ran my own Coding Course</li>
                                    </ul>
                                    
                                </div>

                                </div>
                                <div class={'card card-body other-card '+(this.state.chosenOtherSkill == 2? "expand": null)} onClick={()=>{this.setState({chosenOtherSkill: 2})}}>
                                    <h3>Mathematics</h3>
                                <img class="other-card-img"  src={lambda}></img>
                                <div className={'other-skills-text mt-5 '+(this.state.chosenOtherSkill == 2? null: "hide")}>
                                    <ul>
                                        <li>Always been fasinated by Maths</li>
                                        <li>Favourite topics include Calculus, probablility and hypothesis testing</li>
                                        <li>Aswell as the topics explored in Computer Science such as Time/space Complexity, Turing Machines and Data Structures </li>
                                    </ul>
                       
                                    
                                </div>
                                </div>
                               

                            </div>
                </div>

                <div id="page4" >
                    <div class="page container">
                    <h2 id="personalSkills" ref={this.personalSkills}>Personal</h2>
                        <div class="card-container-other mt-4">
                                
                                <div class={'card card-body personal-card fitness '+(this.state.chosenOtherSkill == 0? "expand": null)} onClick={()=>{this.setState({chosenOtherSkill: 0})}}> 

                                <div className='card card-body personal-card cover'><h3>Fitness</h3></div>
                                  
                                <div className={'other-skills-text mt-5 '}>
                                    <ul>
                                        <li>Swimming, boxing, football</li>
                                        <li>Love sports/ sporting events</li>
                                        <li>recently went to an influencer boxing match, BKFC event and Formula E grand prix</li>
                                    </ul>                             
                                    
                                </div>

                                </div>
                                <div class={'card card-body personal-card travel'}>
                                <div className='card card-body personal-card cover'><h3>Travelling</h3></div>
                                <div className={'other-skills-text mt-5 '}>

                                    <ul>
                                        <li>One of my newer hobbies</li>
                                        <li>Recently went to the highlands</li>
                                        <li>Something I want to do more of in the future</li>
                                    </ul>
                                    
                                </div>

                                </div>

                                <div class={'card card-body personal-card podcasts'}>
                                <div className='card card-body personal-card cover'><h3>Podcasts</h3></div>
                                <div className={'other-skills-text mt-5 '}>

                                    <ul>
                                        <li>I have recently taken an interest in podcasts</li>
                                        <li>I find that they can be beneficial in keeping up with topics such as politics, business and tech aswell as other cool things</li>
                                        
                                    </ul>
                                    
                                </div>

                                </div>
                        
                               

                            </div>

                    </div>

                        
                </div>
                        
               
            </div>

        );
    }
}

export default withRouter(Home);