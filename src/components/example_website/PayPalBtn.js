import React,{Component} from 'react'
import { PayPalButton } from "react-paypal-button-v2";


class PayPalBtn extends Component {

    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                   <PayPalButton
              amount={this.props.amount}
              currency={this.props.currency}
              onSuccess={(details, data) => this.props.onSuccess(details, data)}
              options={{
                clientId: "client_id"
              }}
          />

            </div>
        )
    }
}

export default PayPalBtn