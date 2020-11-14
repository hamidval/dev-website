import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { withRouter} from 'react-router-dom'
import coffee from './images/coffee.jpg'
import NavBar from './Navbar'
 



class Order extends Component {


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

    addToOrder = async (e,index)  =>{
        await this.setState({orderItems:this.state.orderItems.concat(index)})
        await localStorage.setItem("orderItems",JSON.stringify(this.state.orderItems))
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
                    <div class="card " styles="width: 18rem;">
                        <img class="card-img-top card-thumb" src={coffee} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Coffee</h5>
                            <p class="card-text"> enjoy a nice cup of coffe, to start the morning, after a long day, or just for bants</p>
                            <button onClick={(e)=>{this.addToOrder(e,0)}} class="btn btn-primary">Add To Basket</button>
                        </div>                
                    </div>
                    <div class="card " styles="width: 18rem;">
                        <img class="card-img-top card-thumb" src={coffee} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Coffee</h5>
                            <p class="card-text"> enjoy a nice cup of coffe, to start the morning, after a long day, or just for bants</p>
                            <button onClick={(e)=>{this.addToOrder(e,1)}} class="btn btn-primary">Add To Basket</button>
                        </div>                
                    </div>
                    <div class="card " styles="width: 18rem;">
                        <img class="card-img-top card-thumb" src={coffee} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Coffee</h5>
                            <p class="card-text"> enjoy a nice cup of coffe, to start the morning, after a long day, or just for bants</p>
                            <button onClick={(e)=>{this.addToOrder(e,2)}} class="btn btn-primary">Add To Basket</button>
                        </div>                
                    </div>
                    <div class="card " styles="width: 18rem;">
                        <img class="card-img-top card-thumb" src={coffee} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Coffee</h5>
                            <p class="card-text"> enjoy a nice cup of coffe, to start the morning, after a long day, or just for bants</p>
                            <button onClick={(e)=>{this.addToOrder(e,3)}} class="btn btn-primary">Add To Basket</button>
                        </div>                
                    </div>
                </div>
    </div>
    </div>

                
           
        
        );
    }
}

export default withRouter(Order);