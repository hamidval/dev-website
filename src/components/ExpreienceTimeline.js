import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import Education from './PortfolioHamidEducation'
import hamidBack from './hamid-back.jpg'
import {Navbar,Nav, NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import YOUVIEW_SRC from '../images/youview.png'
import NEXT_SRC from '../images/next-black.png'
import MSLC_SRC from '../images/mslc.png'
import SD_SRC from '../images/skyline.png'
import Modal from './Modal'

import PortfolioHamidKnowledge from './PortfolioHamidKnowledge';
const imageStyle = {
    backgroundImage: `url(${hamidBack})`,
    backgroundSize: 'cover',
    height: '100%',
    width:'100%',
    top: '0',
    position: 'fixed',
    overflow:'auto'
  
  };
  

class ExperienceTimeline extends Component {
        constructor(props){
            super(props)
            this.state = {skills:[["AWS","#85B3D1FF"],["JavaScript","#2460A7FF"],["ReactJS","#2460A7FF"],["NodeJs","#2460A7FF"],["Java","#85B3D1FF"],["Python","#85B3D1FF"],["ExpressJS","#2460A7FF"],["PHP","#B3C7D6FF"]],
                          experience:[{     name:"YouView Ltd",
                                            src:YOUVIEW_SRC,
                                            wid:"Software Development Intern\n - web development\n - ReactJS \n - NodeJS \n - Charity Quiz Master",
                                            startDate:"20-05-2019",
                                            endDate:"20-09-2019"},
                                      {     name:"MS Learning Circle",
                                            src:YOUVIEW_SRC,
                                            wid:"Software Development Intern\n - web development\n - ReactJS \n - NodeJS \n - Charity Quiz Master",
                                            startDate:"20-11-2016",
                                            endDate:"20-12-2020"
                                        },
                                        {     name:"NEXT PLC",
                                        src:YOUVIEW_SRC,
                                        wid:"Software Development Intern\n - web development\n - ReactJS \n - NodeJS \n - Charity Quiz Master",
                                        startDate:"20-09-2016",
                                        endDate:"20-12-2017"
                                    },
                                    {     name:"Barclays",
                                    src:YOUVIEW_SRC,
                                    wid:"Software Development Intern\n - web development\n - ReactJS \n - NodeJS \n - Charity Quiz Master",
                                    startDate:"20-09-2013",
                                    endDate:"20-12-2014"
                                }
                                        ],
                          education:["City, University", "Wanstead High School"],
                          interests:["swimming","teaching","AI"],
                          firstDate:null,
                          lastDate:null,
                          maxWidth:null,
                          valuesSet:false,
                          years:[],
                          yearsWithMargin:[],
                          trans:0,
                          firstMargin:null,
                          yearMargin:null,
                          firstYear:null,
                          show:false,
                          chosenExp:null




                                    }


         

                                }



    componentDidMount = async () =>{
        await this.setDates();
        await this.calculateDetails();

    }


    showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };



    calculateDetails = async () =>{
        await this.state.experience.map((item,index)=>{
           
            
            item.strPercentage = (((item.strDate - this.state.firstDate )/this.state.maxWidth)*100).toString()
            item.endPercentage = ((((item.lstDate-item.strDate)/this.state.maxWidth)*100)+parseInt(item.strPercentage)).toString()

          

            
        })


        await this.setState({valuesSet:true})
    }


    dateToNumber = (date)=>{
        var day = date.slice(0,2)
        var month = date.slice(3,5)
        var year = date.slice(6)

        return year+month+day

    }

    setDates= async ()=>{
        var arr = []
        await this.state.experience.map((item,index)=>{


            item.strDate = parseInt(this.dateToNumber(item.startDate))
            item.lstDate = parseInt(this.dateToNumber(item.endDate))
       
            
            arr.push(item.strDate); 
            arr.push(item.lstDate); 

        })


        await this.setState({
            firstDate: Math.min.apply(null,arr),
            lastDate:Math.max.apply(null,arr)

        })
        await this.setState({maxWidth:(this.state.lastDate-this.state.firstDate)})

      


     await this.calculateMargin()



        
    }



    handleClose = () =>{
        this.setState({show:false})
}


    calculateMargin = () =>{

        

        var arr = []
       
        
        var firstYear = parseInt(this.state.firstDate.toString().slice(0,4))+1
        var lastYear = parseInt(this.state.lastDate.toString().slice(0,4))
       
        while(firstYear <= lastYear){
            arr.push(firstYear)
            firstYear = firstYear+1
        }
     

        var firstMargin = ((parseInt(arr[0].toString().concat('0000')) - this.state.firstDate)/this.state.maxWidth)*100
        var yearMargin = (10000/this.state.maxWidth)*100
        var arr = arr.slice(1,arr.length)

        this.setState({firstMargin:firstMargin,yearMargin:yearMargin,years:arr,firstYear:parseInt(this.state.firstDate.toString().slice(0,4))+1})
     
             
        
    



        
       
    }



    render() {


     
        return ( 
            
      
            <div >
         <div className='timeline'  >


    





           
        
        


            <div className='holder'>
  

                <div className='dates'>
                    <div style={{marginLeft:this.state.firstMargin}}>{this.state.firstYear}</div>
                    {this.state.years.map((item,index)=>(
                        <div  style={{marginLeft:this.state.yearMargin.toString()+'%'}} >{item}</div>
                    ))}
                </div>
       

            {this.state.valuesSet?this.state.experience.map((item,index)=>(


                (item.endPercentage-item.strPercentage) < 0.7? item.endPercentage = item.endPercentage*1.01:null,

                // console.log('background' +' : '+ 'linear-gradient(90deg, white 0% '+ item.strPercentage +'%, blue '+ item.strPercentage+'% '+ (item.strPercentage+item.length) +'% , white '+(item.length+item.strPercentage) +'% 100%)'),
                <div className='bar' onClick={()=>this.setState({chosenExp:item,show:true})} style= {{'background' : 'linear-gradient(90deg, transparent 0% '+ item.strPercentage +'%, #00BFFF '+ item.strPercentage+'% '+ (item.endPercentage) +'% , transparent '+(item.endPercentage) +'% 100%)'}}>{item.name}</div>
            
        )):null}   
            </div>

            

        </div>


                <Modal   item={this.state.chosenExp} show={this.state.show} handleClose={this.handleClose} />


        </div>

        );
    }
}

export default withRouter(ExperienceTimeline);