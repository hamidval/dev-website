import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { withRouter} from 'react-router-dom'
import coffee from './images/coffee.jpg'
import NavBar from './Navbar'
import data from './data.json'



class Order extends Component {


    constructor(props){
        super(props)
        this.state = {orderItems:[],orderItemIds:[]}
        
   }

    componentDidMount = async ()=>{
    
      await this.getBasketItems();

        
       
      }
    
      getBasketItems = async ()=>{
       var items = JSON.parse(localStorage.getItem("orderItemIds"));
       if(items != null){
        this.setState({orderItemsIds:items})
       }
   
     
       
      }

    addToOrder = async (e,index)  =>{
        await this.setState({orderItemIds:this.state.orderItemIds.concat(index)})
        await localStorage.setItem("orderItems",JSON.stringify(this.state.orderItemIds))
        await this.getBasketItems();

    }


    render() {

        return ( 
            

    <div>
            <NavBar items={this.state.orderItems}/>
            <div className="container"> 

         
                <div className="row">
                    <div className="col">
                        <h1 className="float-left">Place an Order</h1>
                    </div>
                </div>

                <div className="grid-projects">

                    {
                        data.data.map((item,index)=>(
                        
                        <div class="card " styles="width: 18rem;">
                            <img class="card-img-top card-thumb" src={coffee} alt="Card image cap"></img>
                            <div class="card-body">
                            <h5 class="card-title">{item.productName}</h5>
                                <p class="card-text">{item.description}</p>
                                <button onClick={(e)=>{this.addToOrder(e,item.id)}} class="btn btn-primary">Add To Basket</button>
                            </div>                
                        </div>  


                        ))
                    }
                              
                </div>
    </div>
    </div>

                
           
        
        );
    }
}

export default withRouter(Order);