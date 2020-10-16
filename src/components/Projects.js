import React, { Component } from 'react';
import gailsThumbnail from './thumbnail-gails.png'

import { Modal,Button } from 'react-bootstrap';



class Projects extends Component {
    constructor(){
        super()

        this.state= {show:false}
            }


            handleClose= ()=>{

              this.setState({show:!this.state.show})
             }

    render(){
        return(
          <div >
            <h1 className="projects-title">Projects</h1>

            <div className='grid'>


            <div class="card" styles="width: 18rem;">
              <img onClick={this.handleClose}  class="card-img-top" src={gailsThumbnail} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title" >Gails Bakery</h5>
                <p class="card-text"> Example Site</p>
                <a href='/#/gails' class="btn btn-primary">See Project</a>
              </div>



              </div>

              <div class="card" styles="width: 18rem;">
              <img class="card-img-top" src={gailsThumbnail} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title" >Gails Bakery</h5>
                <p class="card-text"> Example Site</p>
                <a href='/#/gails' class="btn btn-primary">See Project</a>
              </div>

              </div>


         
     

            </div>

            
            <Modal
        show={this.state.show}
        onHide={this.handleClose}
    
      >
        <Modal.Header >
        <Modal.Title>Dynamic Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={gailsThumbnail}>
        </img>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={this.handleClose}>
            Close
          </button>
        
        </Modal.Footer>
      </Modal>



       
          </div>

        )
    }
}

export default Projects