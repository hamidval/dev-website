import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'


 



class Basket extends Component {



    render() {

        return ( 
            



            <div>

                <div className="row" style={{marginTop:'50px'}}>
                    <div className="col-3">
                        <h1 >Basket</h1>
                    </div>
                </div>
                <div>
                    
                </div>

                
           
        
            </div>

        );
    }
}

export default withRouter(Basket);