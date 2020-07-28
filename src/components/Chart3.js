import React ,{Component} from 'react'
import * as d3 from 'd3'
import { svg } from 'd3';
class Chart3 extends Component{

    constructor(props){
        super(props);
        this.myRef = React.createRef();
    

    }
    onlyUnique=(value, index, self)=> { 
        return self.indexOf(value) === index;
    }

    convertData=(data)=>{
                var arr = []

                data.map((item,index)=>{
                   
                    var year = parseInt(item.startDate.slice(6))
                    var endYear = parseInt(item.endDate.slice(6))
                    var startMonth = parseInt(item.startDate.slice(3,5))
                    var endMonth = parseInt(item.endDate.slice(3,5))
                    var months = (endYear - year)*12+(endMonth-startMonth)


                    arr.push({year:year,endYear:endYear,startMonth:startMonth,company:item.company,months:months})
                })

                console.log(arr)

                return arr
    }

    createListOfYears = (allYears)=>{

        var sortedYears = allYears.sort((a,b)=>a<b)
        var years = []

        var i = sortedYears[0]-1;

        while(i<=sortedYears[sortedYears.length-1]){
            i++;
            years.push(i)
           
            

        }
        


        return years



    }


    

    componentDidMount = async () =>{
        var data2 = [{startDate:"24/05/2016",endDate:"02/12/2017",company:"Youview"},
                     {startDate:"24/00/2017",endDate:"02/10/2017",company:"Next"},
                     {startDate:"24/00/2018",endDate:"02/08/2018",company:"OVO"}
                    ]
       
        data2 =  await this.convertData(data2)


        console.log(data2)



        const canvasHeight = 500
        var canvasWidth = 600
        const data = data2

        console.log(data)
        
        
        var arr = []
        data.map((item,index)=>{
            arr.push(item.year);
          

        })


        var arr = await this.createListOfYears(arr)

      
        var unique = arr.filter( this.onlyUnique );
      

        var sections = unique.length+1
        var divider = sections*12

        var x_scale = d3.scaleBand().range ([0, canvasWidth]).padding(0.4),
            y_scale = d3.scaleBand().range([canvasHeight, 0]).padding(0.4);
 
         x_scale.domain(arr.map(function(d) { return d; }));
         y_scale.domain(data.map(function(d) { return d.company; }));
      

        const svgCanvas = d3.select(this.refs.myDiv)
        .append("svg")
        .attr("transform", "translate(" + 0 + "," + 0 + ")")
        .attr("width", canvasWidth)
        .attr("height", canvasHeight)
    

        var g = svgCanvas.append("g")
     
       

        g.append("g")
        .attr("transform", "translate(0," + canvasHeight-100 + ")")
        .call(d3.axisBottom(x_scale))
        .append("text")
        .attr("y", canvasHeight - 250)
        .attr("x", canvasWidth - 100)
        .attr("text-anchor", "end")
        .attr("stroke", "black")


        g.append("g")
        .attr("transform", "translate(50," + 0 + ")")
        .call(d3.axisLeft(y_scale))
        .append("text")
        .attr("y", 0)
        .attr("x", 100)
        .attr("text-anchor", "end")
        .attr("stroke", "black")
          
     

        var i = 0
        data.map((item,index)=>{
         var  width = (item.months/divider)*canvasWidth
         
         
         var startMonth = (item.startMonth/divider)*canvasWidth
         console.log(width,startMonth)
           i++;
            g
            .append("rect")
            .attr("x",x_scale(item.year)+0+(0.5*width)+startMonth)
            .attr("y",y_scale(item.company))
            .attr("width",width)
            .attr("height",70)
            .attr("fill","#DC143C")
        

        })



   


     
        
 
     
        

        
          
 
        

   
     

     
   

        



    }

render(){
    return(


        <div ref="myDiv">

        </div>

   
       


          
           

        
    )
}

}


export default Chart3