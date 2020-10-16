import React, { Component } from 'react';
import gailsThumbnail from './thumbnail-gails.png'

import { Modal,Button } from 'react-bootstrap';



class Projects extends Component {
    constructor(){
        super()

        this.state= {show:false,imgs:[{title:"Gail's",image:gailsThumbnail}],imageIndex:0}
            }


            handleClose= (imageIndex)=>{


              this.setState({imageIndex:imageIndex})
              this.setState({show:!this.state.show})
             }

    render(){
        return(
          <div >
            <h1 className="projects-title">Projects</h1>

            <div className='grid-projects'>


            <div class="card " styles="width: 18rem;">
              <img onClick={()=>this.handleClose(0)}  class="card-img-top card-thumb" src={gailsThumbnail} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title" >Gails Bakery</h5>
                <p class="card-text"> Example Site</p>
                <a href='/#/gails' class="btn btn-primary">See Project</a>
              </div>



              </div>

              <div class="card" >
              <img  onClick={()=>this.handleClose(0)}  class="card-img-top card-thumb" src={gailsThumbnail} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title" >Gails Bakery</h5>
                <p class="card-text"> Example Site</p>
                <a href='/#/gails' class="btn btn-primary">See Project</a>
              </div>

              </div>


         
     

            </div>

            {
              this.state.imgs[this.state.imageIndex]?
                (

                  <Modal size={'lg'}  show={this.state.show}
                  onHide={this.handleClose}>
            <Modal.Header >
            <Modal.Title>{this.state.imgs[this.state.imageIndex].title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img src={this.state.imgs[this.state.imageIndex].image}>
            </img>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-danger" onClick={this.handleClose}>
                Close
              </button>
            
            </Modal.Footer>
          </Modal>
    
    



                )


              :null


            }
           

       
          </div>

        )
    }
}

export default Projects