import React from 'react';
import { Container, Row, Col } from 'reactstrap';
//import image from '../image/1.jpg'

export default class About extends React.Component {
  render() {
    return (
      <Container className="container-fluid py-2 bg-light">         
        <Row>
          <Col>
            <h2 className="section-heading text-center pb-2 display-4" >Our Purpose</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg={{size: "10", offset: "1"}} className="text-center">
            <center><i>
              "Charlotte Mecklenburg school (CMS) system has 19 marching bands. The district offers no financialsupport to them because marching band is considered an extracurricular activity. This means studentsare on their own when it comes to financially supporting the program."- Derrick Russell, Reporter, WBTV Article
            </i></center>
              <br/>
            <p>
              Helping to fill the musical needs of students in Charlotte Mecklenburg school system byproviding access to unused musical instruments. Using our web app public schools will be ableto loan or trade instruments with other schools in the area. Schools interested in takingadvantage will sign up to list instruments they are willing to loan or trade, or search forinstruments their students need.
            </p>
          </Col>
          <Col xs="12" lg="12" align="center" className="">
            <img src={require('../../image/schools.png')} className="img-fluid" alt="schools trading" /> 
          </Col>
        </Row>
        <Row>
          <Col>
            <br/>
          </Col>
        </Row>
      </Container>
    )
  }
}