import React from "react";
import { Container, Image, Col, Row } from 'react-bootstrap';
import '../App.css';
import Map from "./map";


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form has been submitted!');
  };

  
  return(
  <>
    <Container>
      <Image
        className="d-block w-100"
        src="https://i.pinimg.com/564x/c6/81/5e/c6815e80e696e44985cdbabbff9b1e22.jpg"
        style={{"height":"230px","width":"1380px"}}
        alt=""
      />
    </Container><br/><br/><br/>
    <Container>
      <Row>
          <Col style={{"margin-top":"120px","marginLeft":"100px"}}>
            <div>
              <h2 style={{"font-family": "serif", "color":"#5d8b8fdc", "font-weight": "bold"}}>ADDRESS DETAILS</h2>
              <br/>
              <a style={{"font-weight":"bold","fontSize":"larger"}}>Address: <a style={{"color":"GrayText"}}> Fast Food,
                      1704 WEEKSVILLE ROAD,<br/>
                      ELIZABETH CITY, CALICUT,
                      KERALA, INDIA
                  </a></a>
                  
                <br/><br/>
                
              <a style={{"font-weight":"bold","fontSize":"larger"}}>Email: <a style={{"color":"GrayText"}}>fastfood@gmail.com</a></a>
              <br/><br/> 
              <a style={{"font-weight":"bold","fontSize":"larger"}}>Phone: <a style={{"color":"GrayText"}}>+91 98475 67342</a></a>
                
              
            </div>
          </Col>
          <Col>
            <form onSubmit={handleSubmit} className="form1">
              <p2>CONTACT FORM</p2><br/><br/>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required/><br/>
              <br/>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required/><br/>
              <br/>
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" required/><br/>
              <br/>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea><br/>
              <br/>
              <input className="btn3" type="submit" value="Submit"/>
            </form>
          </Col> 
      </Row>
    </Container>
    <br/><br/>
    <Container>
      <Map/>

    </Container>

      <br/><br/>
  </>
  )
};
  


export default Contact;