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

const Team = () => {
  const a = useContext(noteContext);
  return (
    <Container style={{"backgroundColor":"#a0c9dd","height":"650px","paddingTop":"20px","paddingLeft":"120px"}}>
      <h2 className="text-center mb-4">TEAM</h2>
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
        itemClass="carousel-item-padding-20-px"
      >
        <Card className="text-justify" style={{"width": "300px","backgroundColor" : "#85aabc", "marginLeft": "5px", "height": "520px", "borderColor": "#ffffff", "borderWidth": "3px", "borderRadius": "20px"}}>
          <Card.Body style={{"fontStyle": "oblique", "fontFamily": "Arial, Helvetica, sans-serif", "fontWeight": "500" }}>
            <Card.Title style={{"font-weight": "bold","textAlign":"center"}}><h1>{a.t1.tname}</h1></Card.Title>
            <Card.Img
                variant="top"
                src={a.t1.image}
                className="mx-auto mb-1"
            ></Card.Img>
            <Card.Text><h3>Team Members are : </h3><br/><h5>{a.t1.name1}<br/>{a.t1.name2}<br/>{a.t1.name3}<br/>{a.t1.name4}<br/>{a.t1.name5}</h5></Card.Text><br/>
             
            <Card.Text><h4>Team position is {a.t1.position}</h4></Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-justify" style={{"width": "300px","backgroundColor" : "#85aabc", "marginLeft": "5px", "height": "520px", "borderColor": "#ffffff", "borderWidth": "3px", "borderRadius": "20px"}}>
          <Card.Body style={{"fontStyle": "oblique", "fontFamily": "Arial, Helvetica, sans-serif", "fontWeight": "500" }}>
            <Card.Title style={{"font-weight": "bold","textAlign":"center"}}><h1>{a.t2.tname}</h1></Card.Title>
            <Card.Img
                variant="top"
                src={a.t2.image}
                className="mx-auto mb-1"
            ></Card.Img>
            <Card.Text><h3>Team Members are : </h3><br/><h5>{a.t2.name1}<br/>{a.t2.name2}<br/>{a.t2.name3}<br/>{a.t2.name4}<br/>{a.t2.name5}</h5></Card.Text><br/>
             
            <Card.Text><h4>Team position is {a.t2.position}</h4></Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-justify" style={{"width": "300px","backgroundColor" : "#85aabc", "marginLeft": "5px", "height": "520px", "borderColor": "#ffffff", "borderWidth": "3px", "borderRadius": "20px"}}>
          <Card.Body style={{"fontStyle": "oblique", "fontFamily": "Arial, Helvetica, sans-serif", "fontWeight": "500" }}>
            <Card.Title style={{"font-weight": "bold","textAlign":"center"}}><h1>{a.t3.tname}</h1></Card.Title>
            <Card.Img
                variant="top"
                src={a.t3.image}
                className="mx-auto mb-1"
            ></Card.Img>
            <Card.Text><h3>Team Members are : </h3><br/><h5>{a.t3.name1}<br/>{a.t3.name2}<br/>{a.t3.name3}<br/>{a.t3.name4}<br/>{a.t3.name5}</h5></Card.Text><br/>
             
            <Card.Text><h4>Team position is {a.t3.position}</h4></Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-justify" style={{"width": "300px","backgroundColor" : "#85aabc", "marginLeft": "5px", "height": "520px", "borderColor": "#ffffff", "borderWidth": "3px", "borderRadius": "20px"}}>
          <Card.Body style={{"fontStyle": "oblique", "fontFamily": "Arial, Helvetica, sans-serif", "fontWeight": "500" }}>
            <Card.Title style={{"font-weight": "bold","textAlign":"center"}}><h1>{a.t4.tname}</h1></Card.Title>
            <Card.Img
                variant="top"
                src={a.t4.image}
                className="mx-auto mb-1"
            ></Card.Img>
            <Card.Text><h3>Team Members are : </h3><br/><h5>{a.t4.name1}<br/>{a.t4.name2}<br/>{a.t4.name3}<br/>{a.t4.name4}<br/>{a.t4.name5}</h5></Card.Text><br/>
             
            <Card.Text><h4>Team position is {a.t4.position}</h4></Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-justify" style={{"width": "300px","backgroundColor" : "#85aabc", "marginLeft": "5px", "height": "520px", "borderColor": "#ffffff", "borderWidth": "3px", "borderRadius": "20px"}}>
          <Card.Body style={{"fontStyle": "oblique", "fontFamily": "Arial, Helvetica, sans-serif", "fontWeight": "500" }}>
            <Card.Title style={{"font-weight": "bold","textAlign":"center"}}><h1>{a.t5.tname}</h1></Card.Title>
            <Card.Img
                variant="top"
                src={a.t5.image}
                className="mx-auto mb-1"
            ></Card.Img>
            <Card.Text><h3>Team Members are : </h3><br/><h5>{a.t5.name1}<br/>{a.t5.name2}<br/>{a.t5.name3}<br/>{a.t5.name4}<br/>{a.t5.name5}</h5></Card.Text><br/>
             
            <Card.Text><h4>Team position is {a.t5.position}</h4></Card.Text>
          </Card.Body>
        </Card>
      </Carousel>
    </Container>
  );
};

export default Team;
