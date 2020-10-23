import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import fcleytonstone from '../images/fcleytonstone.png'
import mslclogo from '../images/mslclogo.png'


class Testimonial extends Component {

   constructor(props){
       super(props)
       


   }


    render() {

        return ( 
      
        <div >
            <h1>Testimonial</h1>

            <div className="scrollable" >
            <div class="card text-white bg-primary mb-3" style={{margin: '0% 15%'}} >
                <div class="card-header h4" >MS Learning Circle</div>
                <div class="card-body">
                    <div className='row'>
                    <div className="testimonail-img"> 
                    <img class="col" src={mslclogo}></img>
                    </div>
               
                    <p className="h5" ><em>"Very Proffessional, Very organised. "</em></p>
                    </div>
                </div>
            </div>
            <div class="card text-white bg-primary mb-3" style={{margin: '0% 15%'}} >
                <div class="card-header h4">FC Leytonstone</div>
                <div class="card-body">
                    <div className='row'>
                    <div className="testimonail-img"> 
                    <img class="col" src={fcleytonstone}></img>
                    </div>
               
                    <p className="h5"><em>"This line rendered as italicized text."</em></p>
                    </div>
                </div>
            </div>
                        
            


        
            </div>

        </div>

   

        );
    }
}

export default withRouter(Testimonial);