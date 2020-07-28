import React ,{Component} from 'react'
import * as d3 from 'd3'
import { svg } from 'd3';
class Chart4 extends Component{

    constructor(props){
        super(props);
        this.myRef = React.createRef();
    

    }
    onlyUnique=(value, index, self)=> { 
        return self.indexOf(value) === index;
    }

    componentDidMount = () =>{

        
        var dataset = {
            "children": [{"Name":"JavaScript","Count":4319},
                {"Name":"AWS","Count":2159},
                {"Name":"MongoDB","Count":3583},
                {"Name":"React","Count":5074},
                {"Name":"Java","Count":1894},
                {"Name":"Data Structures","Count":4000},
                {"Name":"C++","Count":1000},
                {"Name":"SQL","Count":3000},
                {"Name":"C#","Count":500},
                {"Name":"D3JS","Count":500},
                {"Name":"Leadership","Count":3000},
                {"Name":"Presenting","Count":5000},
                {"Name":"AWS DynamoDB","Count":3000},
                {"Name":"NodeJS","Count":3000},
                {"Name":"CSS","Count":4000},
                {"Name":"HTML","Count":4000},
                {"Name":"GitHub","Count":3000},

            ]
        };
      
        // const svgCanvas = d3.select(this.refs.myDiv)
        const diameter =600;
        var color = d3.scaleOrdinal(d3.schemeCategory10);

        var bubble = d3.pack(dataset)
        .size([diameter, diameter])
        .padding(1.5);


      
        
        var svg = d3.select("body")
        .append("svg")
        .attr("width", diameter)
        .attr("height", diameter)
        .attr("class", "bubble");

        var nodes = d3.hierarchy(dataset)
            .sum(function(d) { return d.Count; }); /// takes all nodes not just leaf



          
   


       

        
        var node = svg.selectAll(".node")
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function(d){
            
            return  !d.children // loops through children, skips the 1 parent node
        })
        .append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });


        
        node.append("circle")
        .attr("r", function(d) {
            return d.r;
        })
        .style("fill", function(d,i) {
            return color(i);
        });


        node.append("text")
            .attr("dy", ".2em")
            .style("text-anchor", "middle")
            .text(function(d) {
                return d.data.Name;
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", function(d){
                return d.r/5;
            })
            .attr("fill", "white");



        // d3.select(self.frameElement)
        //     .style("height", diameter + "px");



    }

render(){
    return(


        <div ref="myDiv">

        </div>

   
       


          
           

        
    )
}

}


export default Chart4