import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Grid, Row, Col, Image} from 'react-bootstrap';
import { Window, TitleBar, Text} from 'react-desktop/macOs';
import Dock from "react-osx-dock";
import '../css/Resume.css'
import apple  from'../images/apple.png';
import trash from "../images/trash.png";
import code from "../images/512.png";


class Resume extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {name:null,age:null},
      data_edu: [],
      data_lauguage:[],
      data_skill:[],


      Profile : 'none',
      summary:'none',
      edu:'none',
      skill:'none',
      tooles:'none'
    };
    this.summary = this.summary.bind(this);
  }

  componentDidMount() {
    this.get_data();
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
    if (this.state.summary == 'block') {
      this.setState({ summary: 'none' });
    } else {
      this.setState({ summary: 'block' });
    }
  }


  render() {
    var h =window.innerHeight;
    var w =window.innerWidth;

    // var qq = [{"school":"國立台南二中","start":"40725"},{"school":"中原大學","start":"41821"}]
    var qq = this.state.data_edu

    return (
      <div>
        <div style={{width:'100%', height:'28px', backgroundColor:'#1A2940', alignSelf:'left' }}>
        <img src={apple} width="1%" />
        </div>
        
        <div  className="index" style={{ height: h-28, paddingLeft:'10%' ,paddingRight:'10%'}} >

          

          <Row>
            <Col xs={12} md={3}>
              
            </Col>

            <Col xs={6} md={3} >
              <Window chrome height="100%" width='100%' padding="10px" verticalAlignment='center' style={{display:this.state.Profile}}>
                <TitleBar controls inset>
                </TitleBar>
                <Text style={{ padding:'35px'}}>
                  <Image style={{width:'100px' , 'border-radius': '100px' , 'paddingTop':'5%'}} src="https://scontent.ftpe4-2.fna.fbcdn.net/v/t1.0-9/29261971_1957986304230142_8155743055123578880_n.jpg?_nc_cat=110&_nc_ht=scontent.ftpe4-2.fna&oh=2fa660e8a91439b143f307614d5436cb&oe=5CB9FEC9" circle />
                  <h4>{(this.state.data["name"])}</h4>
                  <p>Age: {(this.state.data["age"])}</p>
                  <p>Address: {(this.state.data["address"])}</p>
                  <p>E-Mail: {(this.state.data["mail"])}</p>
                </Text>
              </Window>
              
            </Col>

            <Col xs={12} md={4}>
              <Window chrome='true' height="100%" width='100%' padding="10px" style={{display:this.state.summary}}>
                <TitleBar title="Summary" controls/>
                <div style={{size:'100px' , padding:'25px'}}>{(this.state.data["summary"])}</div>
              </Window>
            </Col>

            <Col xs={6} md={4} style={{paddingTop:'20px'}}>
                <TitleBar title="Familiar with Tools " controls/>
                <div className='win'>
                {this.state.data_skill.map(function (object, i) {
                     return (
                      <li>{object.Tools}</li>
                     )
                })}
                
                </div>
            </Col>

            <Col xs={6} md={4} style={{paddingTop:'20px'}}>
                <TitleBar title="Database & Program Skills " controls/>
                <div  className='win'>
                <ul class="list-group">
                {this.state.data_lauguage.map(function (object, i) {
                     return (
                      <li class="list-group-item">{object.Skill}</li>
                     )
                })}
                </ul>
                </div>
              
            </Col>

            <Col xs={6} md={4} style={{paddingTop:'20px'}}>
                <TitleBar title="Education" controls/>
                <div className='win'>
                {this.state.data_edu.map(function (object, i) {
                     return (
                      <li>{object.school}</li>
                     )
                })}


                
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
        <div style={{ bottom: '0px',position: 'fixed', 'z-index':'2', paddingLeft:'25%'  }}>
            <Dock width={600} magnification={1} magnifyDirection="up" backgroundClassName='ww' >

                <Dock.Item className="aa" style={{border:'solid'}} onClick={() => {
              if (this.state.Profile == 'block') {
                this.setState({ Profile: 'none' });
              } else {
                this.setState({ Profile: 'block' });
              }
            }} >
                  {/* <img style={{ width:'50px', marginRight:'1px'}}  src={trash} />  */}
                </Dock.Item>

                <Dock.Item className="bb" style={{border:'solid'}} onClick={this.summary} >
                </Dock.Item>

                <Dock.Item className="cc" style={{border:'solid'}}  >
                </Dock.Item>

                <Dock.Item className="dd" style={{border:'solid'}}  >
                </Dock.Item>

                <Dock.Item className="ee" style={{border:'solid'}}  >
                </Dock.Item>

                <Dock.Item className="ee" style={{border:'solid'}}  >
                </Dock.Item>

                <Dock.Item className="ee" style={{border:'solid'}}  >
                </Dock.Item>

                <Dock.Item className="ee" style={{border:'solid'}}  >
                </Dock.Item>
            </Dock>
        </div>
      </div>
      
    );
  }
}




export default Resume;
