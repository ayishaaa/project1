import React from "react";
import { Container, Image, Col, Row } from 'react-bootstrap';
import Testimonials from "./testi";
import Team from "./team";

const About = () => {
  return (
    <>

      <Container fluid>
        <Image
          className="d-block w-100"
          src="https://i.pinimg.com/564x/cb/69/5a/cb695a8c28cda5c25e08b0a5d2fdd99a.jpg"
          style={{ "height": "230px", "width": "1380px" }}
          alt=""

        />
      </Container>
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
              About Food
            </h4>
            <br />
            <h2
              style={{
                fontFamily: "serif",
                color: "#346c88",
                fontWeight: "bold",
              }}
            >
              INNOVATIONS IN FOOD
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
              src="https://i.pinimg.com/236x/d9/d1/1c/d9d11ca4593aade9ae4c0818cfeb11a1.jpg"
              class="d-block w-100"
              alt="..."
              style={{ "height": "330px" }} />
          </Col>

        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col
            className="col-3"
            style={{
              marginLeft: "135px",
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
              MISSION
            </h4><br />
            <Image
              className="d-block w-100"
              src="https://i.pinimg.com/564x/72/28/2b/72282b4735b0fbb5dd5deea80a367d73.jpg"
              style={{ "height": "150px" }}
              alt=""

            />
            <br />
            <h3
              style={{
                fontFamily: "serif",
                color: "#346c88",
                fontWeight: "bold",
              }}
            >
              MAKE CUSTOMERS HAPPY
            </h3>
            <br />

            <p>
              Our mission is to be the most sustainable restaurant by sourcing our ingredients locally, supplementing produce with herbs grown on our rooftop garden, and giving back to the community through urban farming education.
            </p>
            <p>
              We operate as One brand with uncompromising Standards of Excellence around our Credo, our guiding principles, and our Culture of Fun.
            </p>
          </Col>
          <Col
            className="col-3"
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
              VISION
            </h4><br />
            <Image
              className="d-block w-100"
              src="https://i.pinimg.com/564x/1f/69/79/1f6979a261f2eb7c3f693700d282f33d.jpg"
              style={{ "height": "150px" }}
              alt=""

            />
            <br />
            <h3
              style={{
                fontFamily: "serif",
                color: "#346c88",
                fontWeight: "bold",
              }}
            >
              TO BE THE WORLD'S BEST
            </h3>
            <br />
            <p>
              Our restaurant strives to become our customers' favorite place to eat and drink.
              We always source ingredients from sustainable, local suppliers.

            </p>
            <p>
              Through a shared commitment to excellence, we are dedicated to the uncompromising quality of our food, service, people and profit, while taking exceptional care of our guests and staff.
            </p>
          </Col>
          <Col
            className="col-3"
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
              VALUES
            </h4><br />
            <Image
              className="d-block w-100"
              src="https://i.pinimg.com/564x/fb/2a/ad/fb2aadc8b6b023d6880c4674b79aacfd.jpg"
              style={{ "height": "150px" }}
              alt=""

            />
            <br />
            <h3
              style={{
                fontFamily: "serif",
                color: "#346c88",
                fontWeight: "bold",
              }}
            >
              TO LIFE. FAMILY. FOOD
            </h3>
            <br />
            <p>
              <ul>
                <li>
                  <a1>Creating a culture of warmth and belonging, where everyone is welcome.</a1>
                </li>
                <li>
                  <a1>Acting with courage, challenging the status quo and finding new ways to grow our company and each other.</a1>
                </li>
                <li>
                  <a1>Being present, connecting with transparency, dignity and respect.</a1>
                </li>
                <li>
                  <a1>Delivering our very best in all we do, holding ourselves accountable for results.</a1>
                </li>

              </ul>

            </p>

          </Col>



        </Row>
      </Container><br />
      <br /><br /><br />
      <Team /><br /><br /><br />
      <Testimonials /><br /><br />

    </>

  )
};

export default About;