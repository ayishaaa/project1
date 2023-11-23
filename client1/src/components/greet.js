import React from "react";
import img1 from "../assets/img2.jpeg"
import { Container, Row, Col, Carousel} from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "./login";

const Greet = () => {
  return (
    <>
    
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/564x/73/3c/68/733c688bf6f725345c18190da00e159b.jpg"
            alt="First slide"
            style={{ height: "700px" }}
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>This is your first slide content.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/564x/ce/a2/d4/cea2d4993e8cb414b8235972fd4b0115.jpg"
            alt="Second slide"
            style={{ height: "700px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/564x/c7/b2/e2/c7b2e2bab82184744a57e20db06510ea.jpg"
            alt="Third slide"
            style={{ height: "700px" }}
          />
        </Carousel.Item>
        
          
      </Carousel>
      <Login />
      <Container fluid>
        <Row>
          <Col
            className="col-6"
            style={{
              marginLeft: "50px",
              marginTop: "100px",
              textAlign: "justify",
            }}
          >
            <h4
              style={{
                fontStyle: "oblique",
                fontFamily: "sans-serif",
                color: "#346c88",
                fontWeight: "500",
              }}
            >
              About Products
            </h4>
            <br />
            <h2
              style={{
                fontFamily: "serif",
                color: "#346c88",
                fontWeight: "bold",
              }}
            >
              INNOVATIONS IN PRODUCTS
            </h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Numquam, natus. Unde neque accusamus fuga, consectetur ad veniam
              mollitia asperiores voluptates dolore quo corporis molestiae modi
              sint obcaecati aliquid repellat illo. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda esse dolores accusantium modi, fuga quod aut, explicabo
              sunt illum sed officiis necessitatibus ipsum perferendis deserunt
              officia delectus velit harum incidunt
            </p>
            <Row className="row">
            <Col className="col-1" style={{fontWeight: "bold" ,marginLeft: "0px",width: "175px", textAlign: "center",color: "#346c88", paddingRight: "50px"}}>
              <img src="https://i.pinimg.com/564x/95/cb/92/95cb9297d66c8781c4b583f094664680.jpg" class="d-block w-100" alt="..." style={{"height": "130px"}}/>
              <Link style={{ marginLeft: "25px"}} to="/addpr">ADD PRODUCT</Link>
            </Col>
            <Col className="col-1" style={{"font-weight": "bold" ,"margin-left": "0px","width": "175px", "text-align": "center","color": "#346c88", "padding-right": "50px"}}>
              <img src="https://i.pinimg.com/564x/fa/92/92/fa9292759d215ad46e5b795210f6ff30.jpg" class="d-block w-100" alt="..." style={{"height": "130px"}}/>RELIABILITY
            </Col>
            <Col className="col-1" style={{"font-weight": "bold" ,"margin-left": "0px","width": "175px", "text-align": "center","color": "#346c88", "padding-right": "50px"}}>
              <img src="https://i.pinimg.com/236x/3e/fa/12/3efa1268fc8376e41b8ce63580fb47c3.jpg" class="d-block w-100" alt="..." style={{"height": "130px"}}/>EXPERTISE
            </Col>
            <Col className="col-1" style={{"font-weight": "bold" ,"margin-left": "0px","width": "175px", "text-align": "center","color": "#346c88", "padding-right": "50px"}}>
              <img src="https://i.pinimg.com/236x/84/75/bc/8475bc8eaf00457971da004b77470e5e.jpg" class="d-block w-100" alt="..." style={{"height": "130px"}}/>SUSTAINABILITY
            </Col>
            </Row>
          </Col>

          <Col
            className="col-4" 
                style={{
                    marginTop: "100px", 
                    width: "600px",
                    marginLeft: "50px"
                }}>
                <img 
                    className="d-block w-100"
                    src={img1}
                    class="d-block w-100" 
                    alt="..." 
                    style={{"height": "500px"}}/>
            </Col>
            
            </Row>
        </Container>
      </>
    )
}

export default Greet;