import React ,{Component} from 'react'
import * as d3 from 'd3'
class Chart2 extends Component{

    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.ref = React.createRef();

    }


    componentDidMount = () =>{

        var h = 400;
        var w = 500;
        const data = [38,30,30]
        let accessToRef = d3.select(this.myRef.current)

        
        
        // accessToRef.append("svg")
        // .attr("width",w)
        // .attr("height",h)
        // .style("background-color","yellow")
        // .style("padding",10)
        // .style("margin-left",10)


        



        accessToRef.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x",(d,i)=>i*70)
        .attr("y",(d,i)=>h-10*d)
        .attr("width",65)
        .attr("height",(d,i)=>d*10)
        .attr("fill","tomato")


    }

render(){
    return(


        <svg ref={this.myRef}/>

   
       


          
           

        
    )
}

}


export default Chart2