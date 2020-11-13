import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import video from './video.mp4'
import logo from './gailslogo.png'
import {Navbar,Nav,NavDropdown,Carousel} from 'react-bootstrap'
import hampersimg from './images/hampers.png'
import bahkimg from './images/bahk.png'
import sourdough from './images/sourdough.png'

class Home extends Component {



    render() {

        return ( 
            <div >
              <div style={{background:'#D02030 !important'}}> 
              <Navbar  style={{backgroundColor: '#D02030'}} collapseOnSelect expand="lg"  variant="dark">
              <Navbar.Brand href="#home">Gails</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#features">Gallary</Nav.Link>
                  <Nav.Link href="#pricing">Place an Order</Nav.Link>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Social Media</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Recipe</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">AboutUs</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>


              </div>

          <section className='video-container' >
            <div className="video-container">
            <video loop className='video' autoPlay>
              <source src={video} type="video/mp4"></source>
           
            </video>
            <h1 className="gails-title">
              Gails
            </h1>
           

            </div>
          
        
           
          </section> 
           <section className="wrapper-2">
           <div className="grid-projects">
           <div class="card " styles="width: 40rem;">
           <img class="card-img-top card-thumb" src={hampersimg} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title" >Hampers</h5>
                <p class="card-text">Hampers for every moment of the day – from breakfast feasts to apéritifs</p>
                <a href='/#/gails' class="btn" style={{backgroundColor:'#D02030',color:'white'}}>See More</a>
              </div>
           </div>
           <div class="card" >
           <img class="card-img-top card-thumb" src={bahkimg} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title" >BAKE AT HOME KITS</h5>
                <p class="card-text">Recreate your favourite GAIL’s bakes in the comfort of your own kitchen</p>
                <a href='/#/gails' class="btn" style={{backgroundColor:'#D02030',color:'white'}}>See More</a>
              </div>
           </div>
           <div class="card " styles="width: 40rem;">
           <img class="card-img-top card-thumb" src={sourdough} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">SOURDOUGH</h5>
                <p class="card-text"> Baked to order for home delivery or Click & Collect</p>
                <a href='/#/gails' class="btn" style={{backgroundColor:'#D02030',color:'white'}}>See More</a>
              </div>
           </div>
           </div>
            <div>

              <Carousel style={{padding:'10%',background:'lightgrey'}}>
                <Carousel.Item>
                  <div className="row">
                    <div className="col" >
                    <img class="card-img-top card-thumb" src={hampersimg} alt="Card image cap"></img>
                    </div>
                    <div className="col" >
                    <img class="card-img-top card-thumb" src={bahkimg} alt="Card image cap"></img>
                    </div>                   
                  </div>          
                </Carousel.Item>
                <Carousel.Item>
                <div className="row">
                    <div className="col" >
                    <img class="card-img-top card-thumb" src={bahkimg} alt="Card image cap"></img>
                    </div>
                    <div className="col" >
                    <img class="card-img-top card-thumb" src={bahkimg} alt="Card image cap"></img>
                    </div>                   
                  </div> 
               </Carousel.Item>
                <Carousel.Item>
                <div className="row">
                    <div className="col" >
                    <img class="card-img-top card-thumb" src={sourdough} alt="Card image cap"></img>
                    </div>
                    <div className="col" >
                    <img class="card-img-top card-thumb" src={hampersimg} alt="Card image cap"></img>
                    </div>                   
                  </div> 
                </Carousel.Item>
              </Carousel>
              </div>
          
           
          </section>




            </div>
         

        );
    }
}

export default withRouter(Home);