import React,{Component} from 'react'
import NavBar from './Navbar'
import data from './data.json'
class CheckoutBillingDetails extends Component {
    
    constructor(props){
        super(props)
        this.state = {orderItemIds:[],orderItems:[],data:data.data,total:0}

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
      }
    }

    calculateTotal = () =>{
        var total = 0
        this.state.orderItems.map((item,index)=>{
              total = total + (item.price*item.quantity)

        })
        this.setState({total:total})
    }



    render(){
        return(
            <div>
                <NavBar/>
                <div className='container'>
                    <div className='row'>
                        <h1>Billing</h1>      
                    </div>
                    <div className='row'>
                        <div className='col'>

                        </div>
                        <div className='col-5'>
                            <h2>Order Summary</h2>
                            {this.state.orderItems?
                                this.state.orderItems.length>0?
                                this.state.orderItems.map((item,index)=>(
                                <div className='row' style={{margin:'10px'}}>
                                    <div className='col-4'>
                                        <img style={{height:'100px',width:'100px'}} src={item.source}></img>
                                    </div>
                                    <div className='col' >
                                        <p>
                                            {item.productName}<br/>
                                            {'Price: £'+item.price}<br/>
                                            {'Quantity '+item.quantity}<br/>
                                            {'Subtotal: £'+item.price*item.quantity}
                                                                            
                                        </p>
                                    </div>
                                </div>    
                            ))
                                :null
                            :null
                            }
                            <div>
                                {
                                    this.state.total >0?
                                       <h2>{'Total  £'+this.state.total}</h2>
                                    :null
                                }
                            </div>


                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default CheckoutBillingDetails;