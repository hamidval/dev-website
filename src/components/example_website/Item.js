import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import Navbar from './Navbar';
import data from './data.json'


class Item extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                items
            </div>
        )
    }

}

export default withRouter(Item);