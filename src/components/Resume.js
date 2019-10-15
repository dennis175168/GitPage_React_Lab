import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Grid, Row, Col, Image, Table , Jumbotron , Card} from 'react-bootstrap';
import { Window, TitleBar, Text, SearchField} from 'react-desktop/macOs';
import Dock from "react-osx-dock";
import {Timeline, TimelineEvent} from 'react-event-timeline'
import ReactStoreIndicator from 'react-score-indicator'
import '../css/Resume.css';
import apple  from'../images/apple.png';
import wifi from "../images/mac-wifi.png";
import battery from "../images/mac-battery.png";
import star from "../images/icons8-rating-200.png";



class Resume extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {name:null,age:null},
      data_edu: [],
      data_lauguage:[],
      data_skill:[],
      Profile : 'inline',
      summary:'none',
      edu:'none',
      skill:'none',
      tools:'none'
    };
    this.summary = this.summary.bind(this);
    this.Tools = this.Tools.bind(this);
    this.Edu = this.Edu.bind(this);
    this.Program = this.Program.bind(this);
    this.skill_score = this.skill_score.bind(this);
  }

  componentDidMount() {
    this.get_data();
    this.setState({skill_name:'Click button'});
    this.setState({skill_score:0})
  }


  get_data(){
    const data = new FormData();
    data.append('name','123')

    fetch('https://prod-21.southeastasia.logic.azure.com:443/workflows/3934ef68500b4ac5b582946aec253baa/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=5UUEh4BrHTOMy8Z53vmbjhx-KOlRD3CqukI7HytE3ZI', {
        method:'post',
        body:data,
    })
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        this.setState(
          {
            data: {
              name :res["value"][0]["name"], 
              age:res["value"][0]["age"], 
              address:res["value"][0]["address"], 
              mail:res["value"][0]["mail"],
              summary : res["value"][0]["summary"]
          }});
        
          this.setState(
            {
              data_edu:res["edu_data"]
                
            }
          )

          this.setState(
            {
              data_lauguage:res['language_data']
            }
          )

          this.setState(
            {
              data_skill:res['skill_data']
            }
          )
        console.log(res);
    });
    }

  summary() {
    if (this.state.summary == 'inline') {
      this.setState({ summary: 'none' });
    } else {
      this.setState({ summary: 'inline' });
    }
  }

  Tools() {
    if (this.state.tools == 'inline') {
      this.setState({ tools: 'none' });
    } else {
      this.setState({ tools: 'inline' });
    }
  }

  Program() {
    if (this.state.skill == 'inline') {
      this.setState({ skill: 'none' });
    } else {
      this.setState({ skill: 'inline' });
    }
  }

  Edu() {
    if (this.state.edu == 'inline') {
      this.setState({ edu: 'none' });
    } else {
      this.setState({ edu: 'inline' });
    }
  }

  skill_score (s){
    //this.setState({ score: s });
  }


  render() {
    var h =window.innerHeight;
    var w =window.innerWidth;
    var qq = this.state.data_edu

    return (
      <div>
        {/* header */}
        <div style={{width:'100%', height:'28px', backgroundColor:'#1A2940'}} className="pull-right">
          <Row style={{width:'100%'}} >
            <Col>
              <img src={apple} width="25%" />
            </Col>
            <Col style={{color:'#FFFFFF' ,paddingLeft:'0%'}}>
              <p >Dennis</p>
            </Col>
            <Col style={{color:'#FFFFFF' ,paddingLeft:'1%'}}>
              <p >Handson</p>
            </Col>
            <Col style={{color:'#FFFFFF' ,paddingLeft:'1%'}}>
              <p >Awesome</p>
            </Col>
            <Col style={{color:'#FFFFFF' ,paddingLeft:'1%'}}>
              <p >Nice</p>
            </Col>
            <Col style={{color:'#FFFFFF' ,paddingLeft:'1%'}}>
              <p >Help</p>
            </Col>
            <Col md={7}>md=4</Col>
            <Col >
              <img src={wifi} width="40%" />
            </Col>
            <Col>
              <img src={battery} width="25%" />
            </Col>
            <Col style={{color:'#FFFFFF' ,paddingLeft:'1%', textAlign:'right', float:'right'}} >
              <p >Mon 9:41 AM</p>
            </Col>
          </Row>
          
        </div>
        {/* Content */}
        <div  className="index" style={{ height: h-28, paddingLeft:'5%' ,paddingRight:'5%'}} >
          <Row>
            {/* <Col xs={12} md={3}>
            
            </Col> */}
            {/* Profile */}
            <Col xs={6} md={3} style={{display:this.state.Profile }}>
              <Window chrome='true' height={h*0.7} width='100%' padding="0px" >
                <TitleBar title="Profile" controls/>
                <div style={{ padding:'35px' , fontSize:'10px'}}>
                  <Image style={{border:'1px #000000 solid', width:'100px' , 'border-radius': '160px' ,'width':'60%' , 'marginBottom': '20px'}} src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/11701043_1053316741363774_1251831100533488450_n.jpg?_nc_cat=109&_nc_ht=scontent-tpe1-1.xx&oh=d3f8f1110e11fb967cdea617e285132f&oe=5D942641" roundedCircle />
                  <h4>{(this.state.data["name"])}</h4>
                  <p>{(this.state.data["age"])} years old / {(this.state.data["mail"])} </p>
                  <p>Address: {(this.state.data["address"])}</p>
                  <h5>Summary</h5>
                  <p>
                  {(this.state.data["summary"])}
                  </p>
                </div>
              </Window>
            </Col>
            {/* Summary */}
            
            {/* Education */}
            <Col xs={6} md={4} style={{paddingTop:'20px'}} style={{display:this.state.edu}}><br/>
                <TitleBar title="Education" controls/>
                <div className='win'>
                  <Timeline>
                    {this.state.data_edu.map(function (object, i) {
                      return (
                        <TimelineEvent title={object.school} createdAt={object.start} icon=''>
                          Content
                        </TimelineEvent>
                      )
                    })}
                  </Timeline>
                </div>
            </Col>
            {/* Tools */}
            <Col xs={7} md={4} style={{paddingTop:'20px' , marginTop:'100px'}} style={{display:this.state.tools}}>
                <br/>
                <TitleBar title="Familiar with Tools" controls/>
                <div className='win' style={{'height':h*0.4}}>
                <div class="list-group">
                  
                
                {this.state.data_skill.map(function (object, i) {
                     return (
                      // <div class="card bg-primary text-white" style={{marginBottom:'10px'}}>
                      //   <div class="card-header">{object.Tools} <br/> {object.Description}</div>
                      // </div>
                      <a href="#" class="list-group-item list-group-item-action">
                        <div><h4>{object.Tools}</h4></div>
                        <div>{object.Description}</div>
                      </a>
                     )
                })}
                </div>
                
                
                
                </div>
            </Col>
            {/* Program */}
            <Col xs={6} md={4} style={{paddingTop:'20px'}} style={{display:this.state.skill}}><br/>
                <TitleBar title="Database & Program Skills " controls/>
                <div className='win' style={{'height':h*0.45, 'overflow-y': 'scroll'}}>
                <table>
                  <tr>
                  <td  style={{height:h*0.05 , padding:'30px'}}>
                    {this.state.data_lauguage.map(function (object, i) {
                        return (
                            
                              <div style={{ paddingBottom:'10px'}}><button style={{width:200}} type="button" class="btn btn-primary" onClick={()=>{
                                this.setState({skill_name: object.Skill});this.setState({skill_score: object.score})
                              }}>
                                {object.Skill} 
                              </button></div>
                            
                        )
                    }.bind(this))}
                    </td>
                    <td >
                      <div>
                        <ReactStoreIndicator
                                  width= {200}
                                  value={this.state.skill_score}
                                  maxValue={5}
                        />  
                      </div>
                      <div>
                        <h4>{this.state.skill_name}</h4>
                      </div>
                      
                    </td>
                  </tr>
                </table>
                </div>
              
            </Col>
            
            

            <Col className='dock'  xs={12} md={12}>
              
            </Col>
          </Row>

          {/* style={{marginTop :h/2+28 }} */}

          
        
{/* 
          <Window className='dock' chrome='true' height="60px" width='70%' padding="10px" style={{ position: 'fixed', bottom: '0px', marginLeft: '5%', marginRight: '5%' }}>
            <Image onClick={() => {
              if (this.state.Profile == 'block') {
                this.setState({ Profile: 'none' });
              } else {
                this.setState({ Profile: 'block' });
              }
            }} className="tt" src={code} />
            <Image onClick={this.summary} className="tt" src={trash} />
            <Image className="tt" src={trash} />
            <Image className="tt" src={trash} />
            <Image className="tt" src={trash} />
            
          </Window> */}

                    
        </div>
        {/* Docker */}
        <div style={{ bottom: '0px',position: 'fixed', 'z-index':'2', paddingLeft:'25%' , }}>
            <Dock width={600} magnification={1} magnifyDirection="up" backgroundClassName='ww' >

                <Dock.Item className="aa" style={{border:'solid'}} onClick={() => {
              if (this.state.Profile == 'inline') {
                this.setState({ Profile: 'none' });
              } else {
                this.setState({ Profile: 'inline' });
              }
            }} >
                  {/* <img style={{ width:'50px', marginRight:'1px'}}  src={trash} />  */}
                </Dock.Item>

                <Dock.Item className="bb" style={{border:'solid'}} onClick={this.summary} >
                </Dock.Item>

                <Dock.Item className="cc" style={{border:'solid'}} onClick={this.Tools}  >
                </Dock.Item>

                <Dock.Item className="dd" style={{border:'solid'}} onClick={this.Program} >
                </Dock.Item>

                <Dock.Item className="chrome" style={{border:'solid'}} onClick={this.Edu} >
                </Dock.Item>

                <Dock.Item className="terminal" style={{border:'solid'}}  >
                </Dock.Item>

                <Dock.Item className="ee" style={{border:'solid'}}  >
                </Dock.Item>

                <Dock.Item className="win10" style={{border:'solid'}} onClick={()=>{
                  window.location = '#/WinResume';
                }}  >
                </Dock.Item>   
            </Dock>
        </div>
      </div>
      
    );
  }
}




export default Resume;
