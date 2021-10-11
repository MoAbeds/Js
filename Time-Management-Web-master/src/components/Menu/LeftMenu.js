import React, { Component } from 'react';
import { connect} from 'react-redux';
import clock from '../icons/clock.svg';
import rubik from '../icons/rubik.svg';
import linechart from '../icons/linechart.svg'
import docs from '../icons/docs.svg';
import team from '../icons/team.svg';
import tag from '../icons/tag.svg';
import user from '../icons/user.svg';
import computerscreen from '../icons/computerscreen.svg';
import headphones from '../icons/headphones.svg'
import upgrade from '../icons/upgrade.svg';
import network from '../icons/network.svg';
import { HashLink as Link } from 'react-router-hash-link';
import './menu.css';
import { Image,Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


 class LeftMenu extends Component {
  state={
    showTr: true
  }


  render() {
    return (
      <Navbar fixed='left'className="flex-column">
        <Navbar.Brand>
sadsad
        </Navbar.Brand>
        <LinkContainer style={{borderLeft:'5px solid #f44336'}} to='/tracker'>
        <Nav.Item  >
        <Image alt="clockTracker"  src={clock} rounded /><span>Time Tracker</span>

        </Nav.Item>

        </LinkContainer>
         
         <LinkContainer style={{borderLeft:'5px solid #03a9f4'}} to='/dashboard'>
         <Nav.Item >

<Image src={rubik} alt="dashboard"/><span>Dashboard</span>
        </Nav.Item>
         </LinkContainer>

         <LinkContainer style={{borderLeft:'5px solid #8bc34a'}}  to='teams'>
         <Nav.Item >

            <Image src={team} alt="team"/><span>Team</span>
        </Nav.Item>  
         </LinkContainer>

         <LinkContainer style={{borderLeft:'5px solid #9c27b0'}} to='/tag'>
         <Nav.Item >
            <Image src={tag} alt="tags"/><span>Tags</span>
            
        </Nav.Item>

         </LinkContainer>

         <LinkContainer style={{borderLeft:'5px solid #009688'}} to='/usergroup'>
         <Nav.Item >


            <Image src={network} alt="usergroup"/><span>User Group</span>


          </Nav.Item>
         </LinkContainer>

         <LinkContainer  style={{borderLeft:'5px solid #1de9b6'}} to='/client'>
         <Nav.Item>
            <Image src={user} alt="clients"/><span>Clients</span>
        </Nav.Item>
         </LinkContainer>

         <LinkContainer  style={{borderLeft:'5px solid #ff9f98'}} to='/workspaces'>
         <Nav.Item>
            <Image src={computerscreen} alt="computerscreen"/><span>WorkSpace</span>
            
        </Nav.Item>
         </LinkContainer>

         <LinkContainer style={{borderLeft:'5px solid #ea6eff'}} to='/upgrade'>
         <Nav.Item >
            <Image src={upgrade} alt="upgrade"/><span>Upgrade</span>
        </Nav.Item>
    
         </LinkContainer>
        

          

       
        
       
        
        
        
        

        
      

        

            
            
            

           
           
            
            
       
     
      </Navbar>

    )
  }
}
export default connect(null)(LeftMenu);