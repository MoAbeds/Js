import React, { Component } from 'react'
import './upgrade.css'
import { Card,CardDeck,ListGroup,ListGroupItem,Button } from 'react-bootstrap';

export default class upgrade extends Component {
  render() {
    return (
        <React.Fragment>
             <Card  style={{height:'100%',width:'95%',background:'linear-gradient(white,#d1f1ff)'}} >
            <Card.Body>
                <Card.Title style={{textAlign:'center',fontSize:'1.875rem'}}>Get more from Klockify!</Card.Title>
                <Card.Subtitle style={{textAlign:'center',fontSize:'16px'}}>
                Choose one of our monthly plans to boost your productivity with extra features and add-ons.
                </Card.Subtitle>
            </Card.Body>
            
        <CardDeck style={{marginTop:'120px'}}>
       

            <Card style={{width:'10rem',height:'35rem',boxShadow:'0 0 7px #ccc'}}>
                <Card.Title style={{fontSize:'16px',textAlign:'center',textTransform:'uppercase',color:'#ffbf00'}}>FREE</Card.Title>
                <Card.Text> <p  style={{fontWeight:'700',fontSize:'30px'}}> $0</p><span className="spanmonthplan">/month</span></Card.Text>
                <Card.Subtitle style={{fontSize:'14px',}}>
                For teams that just need a simple and easy to use time tracker
                </Card.Subtitle>
                <ListGroup>
                <ListGroupItem> Time tracking</ListGroupItem>
                <ListGroupItem>Unlimited users</ListGroupItem>
                <ListGroupItem>Unlimited projects</ListGroupItem>
                <ListGroupItem>Reports</ListGroupItem>
                <ListGroupItem>Billable rates</ListGroupItem>
                <ListGroupItem>Apps and integrations</ListGroupItem>
                </ListGroup>
                <Button variant="outline-warning" style={{width:'80%',textTransform:'uppercase',alignSelf:'center'}} >your current plan</Button>
            </Card>

            <Card style={{width:'20rem',height:'35rem',boxShadow:'0 0 7px #ccc'}}>
                <Card.Title style={{fontSize:'16px',textAlign:'center',textTransform:'uppercase',color:'#03a9f4'}}>PLUS</Card.Title>
                <Card.Text><p  style={{fontWeight:'700',fontSize:'30px'}}> $10</p><span style={{marginLeft:'20px'}} className="spanmonthplan">/month</span></Card.Text>
                <Card.Subtitle>
                For companies that need a bit more control over who can do what
                </Card.Subtitle>
                <ListGroup>
                <ListGroupItem>Private time entries</ListGroupItem>
                <ListGroupItem>Lock timesheets</ListGroupItem>
                <ListGroupItem>Required fields</ListGroupItem>
                <ListGroupItem>Time rounding</ListGroupItem>
                <ListGroupItem>Time audit</ListGroupItem>
                <ListGroupItem>Branded reports</ListGroupItem>
                <ListGroupItem>Targets and reminders</ListGroupItem>
                </ListGroup>
                <Button  variant="info" style={{width:'80%',textTransform:'uppercase',alignSelf:'center'}} >Upgrade</Button>
            </Card>



            <Card style={{width:'20rem',height:'35rem',boxShadow:'0 0 7px #ccc'}}>
                <Card.Title style={{fontSize:'16px',textAlign:'center',textTransform:'uppercase',color:'#8bc34a'}}>premium</Card.Title>
                <Card.Text><p  style={{fontWeight:'700',fontSize:'30px'}}> $30</p><span style={{marginLeft:'20px'}} className="spanmonthplan">/month</span></Card.Text>
                <Card.Subtitle>
                For managers that want to improve their productivity and get better reports
                </Card.Subtitle>
                <ListGroup>
                <ListGroupItem>Private time entries</ListGroupItem>
                <ListGroupItem>Lock timesheets</ListGroupItem>
                <ListGroupItem>Required fields</ListGroupItem>
                <ListGroupItem>Time rounding</ListGroupItem>
                <ListGroupItem>Time audit</ListGroupItem>
                <ListGroupItem>Branded reports</ListGroupItem>
                <ListGroupItem>Targets and reminders</ListGroupItem>
                </ListGroup>
                <Button variant="success" style={{width:'80%',textTransform:'uppercase',alignSelf:'center'}} >Upgrade</Button>
                
            </Card>

     
            <Card style={{width:'20rem',height:'35rem',boxShadow:'0 0 7px #ccc'}}>
                <Card.Title  style={{fontSize:'16px',textAlign:'center',textTransform:'uppercase',color:'#ea6eff'}}>server</Card.Title>
                <Card.Text><p  style={{fontWeight:'700',fontSize:'30px'}}> $450</p><span style={{marginLeft:'20px'}} className="spanmonthplan">/month</span></Card.Text>
                <Card.Subtitle>
                For large organizations that need complete control over their data
                </Card.Subtitle>
                <ListGroup>
                <ListGroupItem>Host on own servers</ListGroupItem>
                <ListGroupItem>Scalable to thousands of users</ListGroupItem>
                <ListGroupItem>Installation assistance</ListGroupItem>
                <ListGroupItem>Single Sign-On integration</ListGroupItem>
                <ListGroupItem>Priority support</ListGroupItem>
                <ListGroupItem>Custom development and SLA</ListGroupItem>
                <ListGroupItem>All features and updates</ListGroupItem>
                </ListGroup>
                <Button style={{width:'80%',textTransform:'uppercase',alignSelf:'center',background:'#ea6eff',border:'none'}} >contact</Button>
                
            </Card>
            <ListGroup style={{marginTop:'90px'}}>
            <h2>Frequently asked questions</h2>
            <ListGroupItem>
            <h3>Does it matter how many users I have?</h3>
            <p>It doesn't matter how many users you have, all the prices are flat. However, plans are workspace specific: if you have multiple workspaces, you can choose which ones you want to pay for.
</p>
            </ListGroupItem>
            <ListGroupItem>
            <h3>Can I try it out first?</h3>
            <p>Absolutely! You can try out premium features free for one whole week
  (you don't even need a credit card). To start your free trial,
  </p>
            </ListGroupItem>
            <ListGroupItem>
                <h3>Can I pay yearly?</h3>
                 <p>We will support annual payments in the future.</p>
            </ListGroupItem>
            <ListGroupItem>
            <h3>Do you offer any discounts?</h3>
             <p>We will offer a 10% discount when paying annually in the future.</p>
            </ListGroupItem>
            <ListGroupItem>
                <h3>Do you issue refunds?</h3>
                <p>We don’t offer refunds. But if you're on a paid monthly plan, you can cancel any time you want and all future payments will be stopped.
                </p>
            </ListGroupItem>
            <ListGroupItem>
            <h3>What types of payment are supported?</h3>
            <p>We support only payments by credit card. Wire/bank transfers, PayPal, and purchase orders aren't supported (except for the Server plan).</p>
            </ListGroupItem>
            <ListGroupItem>
            <h3>Are there any additional taxes?</h3>
            <p>No, we take care of all the taxes. The price you see is what you'll get charged. You can enter your VAT, but it will only be used as an additional info displayed in your invoices.</p>
            </ListGroupItem>
            </ListGroup>

        </CardDeck>
        </Card>
        </React.Fragment>

     
    )
  }
}
