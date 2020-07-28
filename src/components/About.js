import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import londonSky from './londonSky.jpg'
import { IoIosBrowsers } from 'react-icons/io';
import { FaChartLine, FaLaptop,FaRobot,FaTwitter,FaInstagram,FaFacebook } from 'react-icons/fa';

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
                    image:null}

   }


   componentDidMount = ()=>{
    this.setState({image:londonSky})
   }


    render() {

        return ( 
      
        <div >
            <h1>About Us</h1>
            <h3>Who we are ? What we do?</h3>
            <p className='h6'>
                        We are a small development group based in London, looking to take on small and medium sized projects
                         Our developers are young, ambitious and skilled in web and app development projects
            </p>
            <h3>Services</h3>
   
            

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
   

        </div>

        );
    }
}

export default withRouter(About);