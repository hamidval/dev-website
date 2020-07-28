import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { FaRobot,FaTwitter,FaInstagram,FaFacebook } from 'react-icons/fa';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];



class Projects extends Component {
    constructor(){
        super()
        this.state = {projects:[['AI',<FaRobot size={70}/>],['Twitter',<FaTwitter size={70}/>],['Instagram',<FaInstagram size={70}/>],['Facebook',<FaFacebook size={70}/>]]}
    }
    render(){
        return(
          <div className=''>
            <h1>Projects</h1>
            <div className='grid-about'>
            {
              this.state.projects.map((item,index)=>(
                <div  >
                <div className="card" style={{color:'black'}}>
                {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                <div className="card-body">
                <h5 className="card-title">{item[0]}</h5>
                {item[1]}
                </div>
              </div>
            </div>


              ))
            }

            </div>

          </div>

        )
    }
}

export default Projects