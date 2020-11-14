import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import video from './video.mp4'
import logo from './gailslogo.png'
import {Carousel} from 'react-bootstrap'
import Navbar from './Navbar';
import hampersimg from './images/hampers.png'
import bahkimg from './images/bahk.png'
import sourdough from './images/sourdough.png'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {orderItems:[]}
  }
  componentDidMount = async ()=>{
    
    await this.getBasketItems();

      
     
    }

  getBasketItems = async ()=>{
    var items = JSON.parse(localStorage.getItem("orderItems"));
    if(items != null){
     this.setState({orderItems:items})
    }
  }
    render() {

        return ( 
            <div >

              <Navbar items={this.state.orderItems}/>
        

          <section className='video-container' >
            <div className="video-container">
            <video loop className='video' autoPlay>
              <source src={video} type="video/mp4"></source>
           
            </video>
            <h1 className="gails-title">
              <img className="gails-logo" src="https://gailsbread.co.uk/order/themes/gailsbread2019/img/logo.png"></img>
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