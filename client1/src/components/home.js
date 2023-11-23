import React from "react";
import Greet from './greet';
// import { Outlet } from "react-router-dom";
import Testimonials from "./testi";


const Home = () => {
  return (
    <>

      <Greet />

      <br /><br />
      <Testimonials /><br></br>

    </>
  );
};

export default Home;