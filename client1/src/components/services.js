import { Container, Image, Col, Row, Button } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const Services = () => {
  const [servicesList, setServicesList] = useState([]);
  

  useEffect(() => {
    fetch('servicesList.json')
      .then(response => response.json())
      .then(data => setServicesList(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Container fluid>
        <Image
          className="d-block w-100"
          src="https://i.pinimg.com/564x/c6/81/5e/c6815e80e696e44985cdbabbff9b1e22.jpg"
          style={{"height":"230px","width":"1380px"}}
          alt=""
        />
      </Container>
      <br/><br/>
      <Container fluid>
        <Row>
          {servicesList.map(service => (
            <Col xs={12} md={4} key={service.name}>
              <Image
                className="d-block w-100"
                src={service.image}
                style={{"height":"230px","width":"100%"}}
                alt=""
              />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              {/* <Link to={'/detail?id=${servicesList.indexOf(service)}'
                //{ pathname: "/detail",
                // state:{ serviceIndex: servicesList.indexOf(service)}}
            }>
                <Button className="btn1"  variant="#85aabc">Read more </Button>
              </Link> */}
              <Link to={{
                pathname: "/detail",
                search: `?serviceIndex=${servicesList.indexOf(service)}`,
              }}>
                <Button className="btn1" variant="#85aabc">Read more </Button>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Services;


