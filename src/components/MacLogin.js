import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
import { Grid, Row, Col, Image ,FormControl } from 'react-bootstrap';
import { Pin, View ,TextInput ,Text} from 'react-desktop/macOs';

import '../css/MacLogin.css';
import mainLogo from'./icon.png';


class MacLogin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      insert_pwd: 'none',
    };

    
    this.insert_pwd = this.insert_pwd.bind(this);
  }

  insert_pwd() {
    this.setState({insert_pwd: 'inline'});
  }

  render() {
    return (



      <div class="box">
        <p class="text">
        <div>
          <Image style={{width:'100px' , 'border-radius': '100px' , border : 'black', top: '50%',bottom: '50%'}} src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/11701043_1053316741363774_1251831100533488450_n.jpg?_nc_cat=109&_nc_ht=scontent-tpe1-1.xx&oh=d3f8f1110e11fb967cdea617e285132f&oe=5D942641" circle />   
        </div>

        <Text style={{color:"#FFFFFF", marginTop:'10px'}}>
          Dennis Resume
        </Text>

        <div width="10px" style={{marginTop : '10px', }}>
          {/* <TextInput 
            placeholder="password"
            defaultValue=""
            onChange={this.handleChange}
            style={{width:'120px'}}
            centerPlaceholder	= 'true'
          /> */}

          {/* <FormControl style={{width:'150px',height:'30px'}}  aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> */}
          <Row>
            <Col>
              <input type="text" class="form-control form-control-sm" value="Let's Go" onClick={this.insert_pwd} style={{backgroundColor:'#8594A2' ,opacity:0.25}}></input>
            </Col>
            <Col style={{marginLeft:'5px', display: this.state.insert_pwd}}>
              <a href="#/resume"><img  width="30px"   src={mainLogo}  alt="fireSpot"/></a>
            </Col>
          </Row>
          
          
        </div>

        
        
        
        
        </p>
        

      
      

                    
      </div>
    );
  }
}

export default MacLogin;
