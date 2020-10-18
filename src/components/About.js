import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import londonSky from './londonSky.jpg'
import { IoIosBrowsers } from 'react-icons/io';
import { FaChartLine, FaLaptop,FaRobot,FaTwitter,FaInstagram,FaFacebook } from 'react-icons/fa';
import Collapse from 'react-bootstrap/Collapse'
const imageStyle = {
    backgroundImage: `url(${londonSky})`,
    height:'33%',
    backgroundSize: '100% auto'

  }

class About extends Component {

   constructor(props){
        super(props)
        this.state={services:[["Websites",<IoIosBrowsers size={70}/>],
                              ["SEO",     <FaChartLine size={70}/>],
                              ["Business Systems",<FaLaptop size={70}/>]],
                    image:null,openWHA:false,openWWD:false,openOS:false}

   }


   componentDidMount = ()=>{
    this.setState({image:londonSky})
   }


    render() {

        return ( 
      
        <div >
            <h1 className="title-style">About Us</h1>
            <div className="btn btn-success panel"  onClick={()=>{this.setState({openWHA:!this.state.openWHA})}}>Who We Are?</div>
              <Collapse in={this.state.openWHA}>
                <div >
                  <p className='h6'>
                          We are a small development group based in London, looking to take on small and medium sized projects
                          Our developers are young, ambitious and skilled in web and app development projects
                  </p>
                </div>
              </Collapse>
            <div className="btn btn-primary panel"  onClick={()=>{this.setState({openWWD:!this.state.openWWD})}}>What We Do?</div>
              <Collapse in={this.state.openWWD}>
                  <div >
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                  </div>
                </Collapse>
            <div className="btn btn-danger panel"  onClick={()=>{this.setState({openOS:!this.state.openOS})}}>Our Services</div>
              <Collapse in={this.state.openOS}>
              <div className='grid-about'>
            {
                        this.state.services.map((item,index)=>(
                        
                            <div className="card">
                            {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                            <div className="card-body">
                            <h5 className="card-title">{item[0]}</h5>
                            {item[1]}
                           
                     
                            
                            </div>
                          </div>
                        
                        ))
                    }

            </div>
   
                </Collapse>
            
            
       

            
           
   
            

           

        </div>

        );
    }
}

export default withRouter(About);