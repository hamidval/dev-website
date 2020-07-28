import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import Education from './PortfolioHamidEducation'
import hamidBack from './hamid-back.jpg'
import {Navbar,Nav, NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import YOUVIEW_SRC from '../images/youview.png'
import NEXT_SRC from '../images/next-black.png'
import MSLC_SRC from '../images/mslc.png'
import SD_SRC from '../images/skyline.png'
import {Modal, } from 'react-bootstrap'
const imageStyle = {
    backgroundImage: `url(${hamidBack})`,
    backgroundSize: 'cover',
    height: '100%',
    width:'100%',
    top: '0',
    position: 'fixed',
    overflow:'auto'
  
  };
  

class PortfolioHamid extends Component {
        constructor(props){
            super(props)
            this.state = {skills:[["AWS","#85B3D1FF"],["JavaScript","#2460A7FF"],["ReactJS","#2460A7FF"],["NodeJs","#2460A7FF"],["Java","#85B3D1FF"],["Python","#85B3D1FF"],["ExpressJS","#2460A7FF"],["PHP","#B3C7D6FF"]],
                          experience:[["YouView TV",YOUVIEW_SRC,{
                                            wid:"Software Development Intern\n - web development\n - ReactJS \n - NodeJS \n - Charity Quiz Master",
                                            title:"Youview TV"}], 
                                      ["MS Learning Circle",MSLC_SRC,{
                                          wid:"Mathematics Tutor / Admin\n - Maths Tutor (A-level & GCSE) \n - Created and Manage Admiin / invoicing system", 
                                          title:"MS Learning Circle"}],
                                      ["Next PLC",NEXT_SRC,{
                                          wid:"Sale Assistant \n - managed till point \n - stock room \n - shop floor \n - deliveries / instore orders ",
                                          title:"NEXT"}],
                                      ["Skyline Developers",SD_SRC,{
                                          wid:"Developer \n - organising projects \n - meetings with clients \n - agile work environment",
                                          title:"Skyline Developers"}]],
                          education:["City, University", "Wanstead High School"],
                          interests:["swimming","teaching","AI"],
                            status:0,
                            show:false,
                            modalPointer:0,
                            showKey:false}
        }


        setStatus=(val)=>{
            this.setState({status:val})

        }

         handleClose = (e) => {
             this.setState({show:false})
         }
         handleShow = (e,modalPointer) => {

            console.log(modalPointer)
             this.setState({show:true,modalPointer:modalPointer})
         }

         toggleKey=()=>{
             this.setState({showKey:!this.state.showKey})
         }
      

    render() {

        return ( 
            
      

            <div style={imageStyle}>

                <div className='nav-port'>
                    <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
                    <Navbar.Brand href="#home"><h2>Hamid's Portfolio</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto nav-port">
                        <Nav.Link onClick={()=>{this.setStatus(1)}} href="#">Knowledge</Nav.Link>
                        <Nav.Link onClick={()=>{this.setStatus(2)}} href="#">Experience</Nav.Link>
                        <Nav.Link  onClick={()=>{this.setStatus(3)}} href="#">Education</Nav.Link>
                        <Nav.Link  onClick={()=>{this.setStatus(4)}} href="#">Latest</Nav.Link>
                        
                    
                        </Nav>

                    </Navbar.Collapse>
                    </Navbar>


              

                </div>
                {this.state.status == 1?
                <div className='container'>
         



                <div className='grid-grid '>
                    <div className='service'>
                        <div className='grid'>

                            {
                                this.state.skills.map((item,index)=>(
                                    <div  className='service ' >
                                    <div className="custom-card" style={{color:'black'},{background:item[1]}}>
                                    {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                                    <div className="">
                                    <h5 className="card-title">{item[0]}</h5>
                                 
                                    </div>
                                  </div>
                                </div>
                                ))
                            }
            
                        </div>
                        

                    </div>

           
                    <div className='service desc '>
                        <p>
                            My aim is to be seen as "not your average developer". 
                            I have a diverse set of skills, mostly self taught in my spare time. 
                            Strong Skills in Web Development
                        </p>
                        Why the colours
                        <svg class="bi bi-question-circle-fill fa-3x " onClick={this.toggleKey} width="10em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.57 6.033H5.25C5.22 4.147 6.68 3.5 8.006 3.5c1.397 0 2.673.73 2.673 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.355H7.117l-.007-.463c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.901 0-1.358.603-1.358 1.384zm1.251 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"/>
                        </svg>
                        {
                            this.state.showKey?(

                                <div className='row'>
                                <div className='col title-card' style={{margin:"3px",background:"#2460A7FF"}}>
                                    Advanced
                                </div>
                                <div className='col title-card' style={{margin:"3px",background:"#85B3D1FF"}}>
                                    Intermediate
                                </div>
                                <div className='col title-card' style={{margin:"3px",background:"#B3C7D6FF"}}>
                                    Basic
                                </div>

                            </div>


                            ):null
                        }
                   


                    </div>

                </div>
                
        
                </div>
                :null}

                {this.state.status == 2?
           
                        <div className='grid-exp'>
                            <div className='service'>

                            <div className='grid'>
                            {
                                this.state.experience.map((item,index)=>(
                                    <div  className='service '>
                                    <div className="custom-card" style={{color:'black'}}>
                                    {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                                    <div className="custom-card" onClick={(e)=>this.handleShow(e,index)}>
                                    
                                    <img src={item[1]}/>
                                    <h5 className="card-title">{item[0]}</h5>
                                 
                                    </div>
                                  </div>
                                </div>
                                ))
                            }

                            </div>
                            </div>
                            <div className='service desc'>
                                    <p>
                                        I have a diverse skill set, Aquired over my experieces. Each experience is an oppurtunity to learn.
                                        I have taken the skills I have learnt both technical and work related and used them in my future experineces and personla life
                                        to better myself career wise and to better myself as a person !
                                    </p>

                         </div>


              
            
                        </div>
                        

                   

           
           

           
                
        
             
                :null}
                
                {this.state.status == 3?
                <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='grid'>
              

                            <Education/>
            
                        </div>
                        

                    </div>

           
                    <div className='col-5 desc'>
                        <p>
                            My aim is to be seen as "not your average developer". 
                            I have a diverse set of skills, mostly self taught in my spare time. 
                            Strong Skills in Web Development
                        </p>

                    </div>

                </div>
                
        
                </div>
                :null}
                
                {this.state.status == 4?
                <div>
                    <div className='text'><h3>Nothing to see here, Just working on a responsive UI</h3></div>

                <div className='wrapper'>
                        <div className='nav' id="nav">Nav</div>
                        <div className='box1' id='box1'>Box 1</div>
                        <div className='box2' id='box2'>Box 2</div>
                        <div className='box3' id='box3'>Box 3</div>
                        <div className='box4' id='box4'>Box 4</div>
                        <div className='box5' id='box5'>Box 5</div>
                        <div className='box6' id='box6'>Box 6</div>
                      
                </div>
                </div>
                :null}


            <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{(this.state.experience[this.state.modalPointer][2]).title}</Modal.Title>
        </Modal.Header>
                        <Modal.Body>
                            {(this.state.experience[this.state.modalPointer][2]).wid.split('\n').map(i=>(
                                <p>{i}</p>
                            
            )    )

                            
                            
                            
                            }
                        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>

  

              
   
            </div>

        );
    }
}

export default withRouter(PortfolioHamid);