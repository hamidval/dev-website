import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { withRouter} from 'react-router-dom'
import coffee from './images/coffee.jpg'
import NavBar from './Navbar'
import data from './data.json'



class Order extends Component {


    constructor(props){
        super(props)
        this.state = {orderItems:[],orderItemIds:[],allItems:[]}
        this.child = React.createRef();
        
   }

    componentDidMount = async ()=>{
    
        this.setState({allItems:data.data})

        
       
      }
    

    
    addToOrder = async (e,index,quantity)  =>{
        await this.setState({orderItemIds:this.state.orderItemIds.concat({"id":index,"quantity":quantity})})
        await localStorage.setItem("orderItemIds",JSON.stringify(this.state.orderItemIds))
 

    }

    incrementQuantity = (index)=>{
        
        var quantity = this.state.allItems[index].quantity
        this.state.allItems[index].quantity = quantity+1;
        this.setState({allItems:this.state.allItems})
        
    }

    decrementQuantity = (index)=>{

        var quantity = this.state.allItems[index].quantity
        this.state.allItems[index].quantity = quantity - 1;
        this.setState({allItems:this.state.allItems})

    }


    render() {

        return ( 
            

    <div>
            
        
                        <NavBar />
     
            <div className="container"> 

         
                <div className="row">
                    <div className="col">
                        <h1 className="float-left">Place an Order</h1>
                    </div>
                </div>

                <div className="grid-projects">

                    {
                        this.state.allItems?
                            this.state.allItems.length>0?
                                this.state.allItems.map((item,index)=>(                        
                        
                        <div class="card " styles="width: 18rem;">
                            <img class="card-img-top card-thumb" src={coffee} alt="Card image cap"></img>
                            <div class="card-body">
                            <h5 class="card-title">{item.productName}</h5>
                                <p class="card-text">{item.description}</p>
                                <div class="input-group">
                                    <span class="input-group-btn">
                                        <button class="btn btn-primary"  onClick={()=>{this.decrementQuantity(index)}}>
                                            <span>-</span>
                                        </button>
                                    </span>
                                    {/* <input type="text" name="quant[1]" class="form-control input-number" value={item.quantity} min="1" max="10"/> */}
                                        <div className='form-control' style={{marginLeft:'5px',marginBottom:'5px',marginRight:'5px'}}>{item.quantity}</div>
                                    <span class="input-group-btn">
                                        <button class="btn btn-primary" onClick={()=>{this.incrementQuantity(index)}}>
                                            <span >+</span>
                                        </button>
                                    </span>
                                </div>
                                <button onClick={(e)=>{this.addToOrder(e,item.id,item.quantity)}} class="btn btn-primary">Add To Basket</button>
                            </div>                
                        </div>  


                        )):null:null
                    }
                              
                </div>
    </div>
    </div>

                
           
        
        );
    }
}

export default withRouter(Order);