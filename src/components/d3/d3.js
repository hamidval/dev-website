import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import Chart4 from './Chart4'



class d3 extends Component {

   constructor(props){
        super(props)
  
   }

   componentDidMount = () =>{

      
   }

 



    render() {




        return ( 
      
            <div >

                <Chart4/>
        
        </div>

        );
    }
}

export default withRouter(d3);