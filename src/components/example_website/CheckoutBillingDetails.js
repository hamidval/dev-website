import React,{Component} from 'react'
import NavBar from './Navbar'
import data from './data.json'
import {Form,Button} from 'react-bootstrap'
import PayPalBtn from './PayPalBtn'
class CheckoutBillingDetails extends Component {
    
    constructor(props){
        super(props)
        this.state = {orderItemIds:[],orderItems:[],data:data.data,total:0,stage:0,title:'Order Details'}

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

    isBillingComplete = (e)=>{
        this.setState({stage:1})
        this.setState({title:'Address Details'})
    }

    isAddressDetailsComplete = (e) =>{
        this.setState({stage:2})
        this.setState({title:'Payment Details'})
    }
    paymentHandler = (details, data) => {
        /** Here you can call your backend API
          endpoint and update the database */
        console.log(details, data);
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
                            <h2>{this.state.title}</h2>
                            
                            {
                                
                                this.state.stage == 0?
                                    <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label style={{float:'left'}}  >First Name</Form.Label>
                                        <Form.Control  placeholder="First Name" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label style={{float:'left'}} >Last Name</Form.Label>
                                        <Form.Control placeholder="Last Name" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label style={{float:'left'}} >Email</Form.Label>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label style={{float:'left'}} >Phone</Form.Label>
                                        <Form.Control placeholder="Phone" />
                                    </Form.Group>
                                    <Button onClick={this.isBillingComplete} variant="primary" type="submit">
                                        Submit
                                    </Button>
                                    </Form>
                                :null

                            }
                             {
                                this.state.stage == 1?
                                
                                <Form>
                            
                              
                                <Form.Group controlId="formGridAddress1">
                                  <Form.Label>Address</Form.Label>
                                  <Form.Control placeholder="1234 Main St" />
                                </Form.Group>
                              
                                <Form.Group controlId="formGridAddress2">
                                  <Form.Label>Address 2</Form.Label>
                                  <Form.Control placeholder="Apartment, studio, or floor" />
                                </Form.Group>
                                <div className='row'>
                                    <div className='col'>
                                        <Form.Group controlId="formGridCity">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control />
                                         </Form.Group>

                                    </div>
                                    <div className='col'>
                                        <Form.Group controlId="formGridZip">
                                            <Form.Label>Postcode</Form.Label>
                                            <Form.Control />
                                        </Form.Group>                        
                                    </div>
                                </div>
                  
                                <Button onClick={this.isAddressDetailsComplete} variant="primary" type="submit">
                                        Submit
                                    </Button>
                              </Form>
                                :null

                            }
                              {
                                this.state.stage == 2?
                                
                                <PayPalBtn
                                amount = {this.state.total}
                                currency = {'USD'}
                                onSuccess={this.paymentHandler}/>


                                :null

                            }
                                               
                      


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