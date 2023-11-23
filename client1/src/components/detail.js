import { Container, Image, Col, Row } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';




const Detail = () => {

    const location = useLocation();
    const serviceIndex = new URLSearchParams(location.search).get("serviceIndex");


        const [name, setName ]=useState('');
        const [image, setImage]=useState('');
        const [description, setDescription]=useState('');
        const [description1, setDescription1]=useState('');
      
        useEffect(() => {
            fetch('servicesList.json')
              .then(response => response.json())
              .then(data => {
                const service = data[serviceIndex];
                setName(service.name);
                setImage(service.image);
                setDescription(service.description);
                setDescription1(service.description1);
              })
              .catch(error => console.log(error));
          }, [serviceIndex]);

  return (
    <>
      <Container fluid>
        <Image
          className="d-block w-100"
          src="https://i.pinimg.com/564x/c6/81/5e/c6815e80e696e44985cdbabbff9b1e22.jpg"
          style={{"height":"230px","width":"1380px"}}
          alt=""
        />
      </Container><br/><br/><br/>
      <Container>
        <Row>
            <Col>
              <Image
                className="d-block "
                src={image}
                style={{"height":"230px","width":"450px"}}
                alt=""
              />
            </Col>
            <Col>
              <h3>{name}</h3>
              <p>{description}</p>
              <p>{description1}</p>
            </Col> 
        </Row>
      </Container>

      <br/><br/>
    </>
  );
};

export default Detail
