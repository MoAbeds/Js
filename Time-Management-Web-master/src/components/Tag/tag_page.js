import React, { Component } from 'react'
import './tagpage.css';
import { WithContext as ReactTags } from 'react-tag-input';
import { connect} from 'react-redux';
import { ADDTags,RemoveTags} from '../../Actions/Actions'
import 'semantic-ui-css/semantic.min.css'
import { Input,Form,Button, Icon,Label,Grid } from 'semantic-ui-react'
import uniqid from 'uniqid';


 class tagpage extends Component {
     
    constructor(props){
        super(props);
        this.state={
            inputvalue: '',
            fulldata: {
                key: '',
                value: '',
                text: ''
            },

            key:'hi'

        }
       
    
    }

 


  render() {
   

    return (
        <div className="tag-container">
        <div className="tagpage-container">
        <div  className="tagdiv">
            <h1 className="tagtitle-page">Tags</h1>
        <div  className="div__content-tag--add-new-tag">
        <Grid>
        {this.props.Tags.map(tag=>(
                <Grid.Column className="div__content-tag--add-new-tag" width={4}>
                <Button as='div' animated labelPosition='left' >
                <Label as='a' basic pointing='right' >{tag.text}</Label>
                    <Button onClick={()=>this.props.RemoveTags(tag.key)}  icon >
                    <Icon name="delete" />
                    </Button>

                </Button>
                </Grid.Column>
        ))}
        </Grid>
                
                
                            <div>
                                <Form onSubmit={()=>{this.props.ADDTags(this.state.fulldata)
                                    this.setState({
                                        inputvalue: '',
                                        fulldata: {text:'',value: '' ,key: ''}

                                    })
                                    
                                }} >
                            <Form.Input
                                    value={this.state.inputvalue}
                                    onChange={(e)=>this.setState({
                                        inputvalue: e.target.value,
                                        fulldata: {...this.state.fulldata,value:e.target.value,text: e.target.value,key: uniqid()}
                                    })}
                                    icon='tags'
                                    iconPosition='left'
                                    placeholder='Enter tags'
                                />
                                <Form.Button style={{background: 'red'}} icon="tags" iconPosition='left' />
                                </Form>
                               
                                

                            </div>
        </div>
        </div>
        </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    Tags: state.time.Tags
  });

export default connect(mapStateToProps,{ADDTags,RemoveTags})(tagpage);
