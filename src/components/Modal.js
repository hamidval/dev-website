import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import londonSky from './londonSky.jpg'
import About from './About'
import Projects from './Projects'
import { colors } from '@material-ui/core';
const imageStyle = {
    backgroundImage: `url(${londonSky})`,
    height:'100vh',
    backgroundSize: 'auto 100%',
    textAlign: 'center',
    position: 'inline',
    marginTop: '0  !important'

  }

  const aboutStyle = {
    backgroundColor:'white',
    minHeight:'100vh',
    backgroundSize: 'auto 100%',
    textAlign: 'center',
    position: 'inline',
    marginTop: '0  !important'

  }

  const projectsStyle = {
    backgroundColor:'black',
    minHeight:'100vh',
    backgroundSize: 'auto 100%',
    textAlign: 'center',
    position: 'inline',
    marginTop: '0  !important',
    color: 'white'

  }



class Modal extends Component {



            constructor(props){
                super(props)
                this.state = {showHideClassname:this.props.show ? "modal display-block" : "modal display-none"}

            }



            handleClose = () =>{
                    this.props.handleClose()
            }
    render() {

   

        return ( 



    


        this.props.item? 

           <div >
        
   
             {this.props.show?
                <div  className='modal-border'  >
                        <section className=" modal-main">
            <div className='title'> {this.props.item.name}</div>
                            <div>
                              <img className='image' src={this.props.item.src}></img>
                            </div>
                            <div className='row'>
                              <div className='col days' >First Day : </div>
                              <div className='col' >{this.props.item.startDate}</div>
                            </div>
                            <div className='row '>
                              <div className='col days' >Last Day : </div>
                              <div className='col' >{this.props.item.endDate}</div>
                            </div>
                      
                            <div className='wid'>{this.props.item.wid}</div>



                            {console.log(this.props.item)}
                          <button className='cls-btn' onClick={this.handleClose}>Close</button>
                        </section>
                </div>
          :null}

           </div>


        :null

  
        

    

        

        );
    }
}

export default withRouter(Modal);