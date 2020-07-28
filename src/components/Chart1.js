import React ,{Component} from 'react'
import * as d3 from 'd3'
class Chart1 extends Component{

    constructor(props){
        super(props);
        this.myRef = React.createRef();

    }


    componentDidMount = () =>{
        let accessToRef = d3.select(this.myRef.current);
        accessToRef.style("background-color","green");

    }

render(){
    return(


        <svg ref={this.myRef}/>
              
        
    )
}

}


export default Chart1