import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import Chart3 from './Chart3'



class Timeline extends Component {

   constructor(props){
        super(props)
  
   }

   componentDidMount = () =>{

      
   }

 



    render() {




        return ( 
      
            <div >

                <Chart3/>
        
        </div>

        );
    }
}

export default withRouter(Timeline);