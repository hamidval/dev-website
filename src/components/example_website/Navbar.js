import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import {Navbar,Nav,NavDropdown,OverlayTrigger,Popover,Button} from 'react-bootstrap'


class NavBar extends Component {
  constructor(props){
  super(props)
  this.state = {addedItems:[]}
  }

  componentDidMount = ()=>{

    console.log(this.props.items)
    this.setState({addedItems:this.props.items})
  }



    render() {

        return (          
            <div style={{background:'#D02030 !important'}}> 
            <Navbar  style={{backgroundColor: '#D02030'}} collapseOnSelect expand="lg"  variant="dark">
            <Navbar.Brand href="#gails">Gails</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Gallary</Nav.Link>
                <Nav.Link href="#gails/order">Place an Order</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Social Media</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Recipe</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
               <Nav.Link >
                <OverlayTrigger
                  trigger="click"
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Popover id={`popover-positioned-bottom`}>
                      <Popover.Title as="h3">{`Basket`}</Popover.Title>
                      <Popover.Content>
                        <div className="col">

                          {this.props.items?
                          this.props.items.length >0 ?
                            this.props.items.map((item,index)=>(
                              <div className="row basket-item">
                                  {item}
                              </div>
                            ))
                            :null
                          :null}
                        </div>
                      </Popover.Content>
                    </Popover>
                      }
                    >
                  
                  <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-basket" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                  </svg>
    
                </OverlayTrigger>
                </Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>


            </div>

        );
    }
}

export default withRouter(NavBar);