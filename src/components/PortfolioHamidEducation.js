import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import hamidBack from './hamid-back.jpg'
import {Navbar,Nav, NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import WANSTEAD_SRC from './images/wanstead.png'
import CITY_SRC from './images/cityuni.png'

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
  

class PortfolioHamidEducation extends Component {
        constructor(props){
            super(props)
            this.state = {
                education:[["City, University of London",
                            {wid:"BSc Computer Science \n 2017-2020 \n Grade : 1st(predicted) \n \n Modules \n Programming with Java \n Cloud Computing \n information Security \n Mathematics for AI  ", src:CITY_SRC}], 
                            ["Wanstead High School",
                            {wid:"2009-2016 \n Grades \n GCSE \n 9 A-B \n 1 C \n A-Level \n \n Maths - A \n Biology - B \n History - B \n AS \n Chemistry - C", src:WANSTEAD_SRC}]],
                            modalPointer:0
                 
        }

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
        

    render() {

        return ( 
            
      


                 <div>

{
                                this.state.education.map((item,index)=>(
                                    <div  className='service skills' onClick={(e)=>(this.handleShow(e,index))}>
                                    <div className="card" style={{width: '18rem',color:'black'}}>
                                
                                    <div className="card-body">
                                    <h5 className="card-title">{item[0]}</h5>
                                    <img
                                        src={item[1].src}
                                    />
                                 
                                    </div>
                                  </div>
                                </div>
                                ))
                            }


             <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{(this.state.education[this.state.modalPointer][0])}</Modal.Title>
        </Modal.Header>
                        <Modal.Body>
                            {(this.state.education[this.state.modalPointer][1]).wid.split('\n').map(i=>(
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


export default PortfolioHamidEducation;