import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { Container, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Testimonials = () => {
  const a = useContext(noteContext);
  return (
    <Container>
      <h2 className="text-center mb-4">Testimonials</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Card className="text-center">
          <Card.Body>
            <Card.Title>{a.s1.name}</Card.Title>
            <Card.Img
              variant="top"
              src={a.s1.image}
              className="mx-auto mb-1 rounded-circle"
            />
            <Card.Text>{a.s1.content}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>{a.s2.name}</Card.Title>
            <Card.Img
              variant="top"
              src={a.s2.image}
              className="mx-auto mb-1 rounded-circle"
            />
            <Card.Text>{a.s2.content}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>{a.s3.name}</Card.Title>
            <Card.Img
              variant="top"
              src={a.s3.image}
              className="mx-auto mb-1 rounded-circle"
            />
            <Card.Text>{a.s3.content}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>{a.s4.name}</Card.Title>
            <Card.Img
              variant="top"
              src={a.s4.image}
              className="mx-auto mb-1 rounded-circle"
            />
            <Card.Text>{a.s4.content}</Card.Text>
          </Card.Body>
        </Card>
      </Carousel>
    </Container>
  );
};

export default Testimonials;
