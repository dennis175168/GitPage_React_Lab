import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Grid, Row, Col, Image, Table , Jumbotron , Card} from 'react-bootstrap';
import { Window, TitleBar, Text, SearchField} from 'react-desktop/windows';
import '../css/WinResume.css';
import winS from '../images/win-s-logo.png';
import winSearch from '../images/win10search.png';

class WinResume extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data: {name:null,age:null},
        };
    }

    componentDidMount() {
        //his.get_data();
    }

    render(){
        var h =window.innerHeight;
        var w =window.innerWidth;

        return(
            <div>
                <div  className="Winindex" style={{ height: h-50, paddingLeft:'5%' ,paddingRight:'5%'}} >
                    <Window
                        color={this.props.color}
                        theme={this.props.theme}
                        chrome
                        height="300px"
                        width='500px'
                        padding="12px"
                    >
                        <TitleBar title="My Windows Application" controls/>
                        <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
                    </Window>
                </div>
                <div style={{background:'black', height:'50px'}}>
                    <div>
                        <Row style={{width:'100%'}} >
                            <Col style={{padding:'10px', marginLeft:'20px'}}>
                                <img src={winS} width='25px' />
                            </Col>
                            <Col style={{padding:'10px'}}>
                                <img src={winSearch} width='22px' />
                            </Col>
                        </Row>
                    </div>
                </div>
                
            </div>
        )
    }
    
}

export default WinResume;