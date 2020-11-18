import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import Navbar from './Navbar';
import data from './data.json'


class Basket extends Component {

    constructor(props){
        super(props)
        this.state = {orderItems:[],orderItemIds:[],data:data.data,total:0}
      }

    componentDidMount = async ()=>{
    
        await this.getBasketItemIds();
        await this.setOrderItems();
        await this.calculateTotal();

    
          
         
        }
    
      getBasketItemIds = async ()=>{
        var items = JSON.parse(localStorage.getItem("orderItemIds"));
        if(items != null){
         this.setState({orderItemIds:items})
        }
       
      }

      setOrderItems = async () => {
          if(this.state.orderItemIds != null){
            var arr =[]
            this.state.orderItemIds.map((item,index)=>{
               
                this.state.data.map((prod,index)=>{
                    if(prod.id == item.id){
                        prod.quantity = item.quantity;
                        arr.push(prod) 
                                        
                    }
                })
                this.setState({orderItems:arr})
            })

            console.log(this.state.orderItems)
        }
      }

      calculateTotal = () =>{
          var total = 0
          this.state.orderItems.map((item,index)=>{
                total = total + (item.price*item.quantity)

          })
          this.setState({total:total})
      }

    render() {

        return ( 
            

            <div>
                {
                    this.state.orderItems?
                        <Navbar items={this.state.orderItems}/>
                    :null

                }
                 
            <div class="container">
               

                <div className="row" >
                    <div className="col-3">
                        <h1 >Basket</h1>
                     </div>
                </div>

                <div className="row">
                    {
                        this.state.orderItems?
                            this.state.orderItems.length >0?
                            (
                                <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Order Details</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {
                                    this.state.orderItems.map((item,index)=>(
                                        <tr >
                                            <td>{item.productName}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price}</td>
                                            <td>{item.price * item.quantity}</td>
                                        </tr>
                                    ))
                                   }
                                </tbody>
                                </table>
                            )
                            
                            :null
                        :null
                    }
                     
                   
                    </div>
                    <div className='row' style={{display:'flow-root'}}>
                            <div className="checkout-total" style={{float:'right'}}  > Total : £
                                {this.state.total?
                                        this.state.total
                                    :null
                                }
                            </div>
                    </div>
                    <div className='row' style={{display:'flow-root'}}>
                        <button onClick={()=>{window.location.href = '#/gails/checkout'}} 
                        className='btn btn-danger' style={{float:'right',marginRight:'5rem'}} >Checkout</button>
                       
                        
                    </div>
                 
                 


                   
                   
                </div>
              
                
           
        
     
            </div>

        );
    }
}

export default withRouter(Basket);