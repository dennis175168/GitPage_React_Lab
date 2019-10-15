import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Grid, Row, Col, Image, Table , Jumbotron , Card} from 'react-bootstrap';
import { Window, TitleBar, Text, SearchField} from 'react-desktop/windows';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import { PDFReader } from 'reactjs-pdf-reader';
import { MobilePDFReader } from 'reactjs-pdf-reader';
import PDFViewer from 'pdf-viewer-reactjs';
import '../css/WinResume.css';
import winS from '../images/win-s-logo.png';
import winSearch from '../images/win10search.png';
import apple  from'../images/apple.png';

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
                        height="700px"
                        width='1100px'
                        padding="12px"
                    >
                        <TitleBar title="My Event Experience" controls/>
                        <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>
                            <div style={{background:'	#DDDDDD', width:'300px' ,height:'600px' }}>
                            <Timeline>
                                <TimelineEvent title="Microsoft Taiwan" createdAt="2019/04/01" icon=''>
                                    Job Title : PTS
                                </TimelineEvent>
                                <TimelineEvent title="Microsoft Taiwan" createdAt="2019/04/01" icon=''>
                                    <p>Job Title : PTS</p>
                                    <p>Job Title : PTS</p>
                                    <p>Job Title : PTS</p>
                                    <p>Job Title : PTS</p>
                                    <p>Job Title : PTS</p>
                                    <p>Job Title : PTS</p>
                                    
                                </TimelineEvent>
                                <TimelineEvent title="Microsoft Taiwan" createdAt="2019/04/01" icon=''>
                                    Job Title : PTS
                                </TimelineEvent>
                            </Timeline>
                            </div>
                            
                        </Text>
                        <PDFViewer
                            document={{
                                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf'
                            }}
                        />
                    </Window>
                </div>
                <div style={{background:'black', height:'50px'}}>
                    <div>
                        <Row style={{width:'100%'}} >
                            <Col style={{padding:'10px', marginLeft:'20px'}}>
                                <img src={winS} width='25px' />
                            </Col>
                            <Col style={{padding:'10px'}}>
                                <img  src={winSearch} width='22px' />
                            </Col>
                            <Col style={{padding:'10px'}}>
                                <img  src={apple} width='22px' onClick={()=>{
                                    window.location = '#/resume';
                                    }} />
                            </Col>
                        </Row>
                    </div>
                </div>
                
            </div>
        )
    }
    
}

export default WinResume;