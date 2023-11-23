 import './App.css';
import logo from './assets/logo1.jpg';
import { Outlet, Link } from "react-router-dom";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import NoPage from './components/nopage';
import About from './components/about';
import Services from './components/services';
import NoteState from './context/notes/NoteState';
import Detail from './components/detail';
import Map from './components/map';
import Add from './components/addpr';
import Sign from './components/sign';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';


function App() {
  return (
    <BrowserRouter>
      <NoteState>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p1>Product Store</p1>
            <nav className='linkstyle'>
              <ul >
                <Link style={{ marginLeft: "850px",paddingTop: "500px" }} to="/">Home</Link>
                <Link style={{ marginLeft: "25px"}} to="/about">About us</Link>
                <Link style={{ marginLeft: "25px"}} to="/services">Services</Link>
                <Link style={{ marginLeft: "25px"}} to="/contact">Contact us</Link>
              </ul>
            </nav>
          </header>
          <Routes>=
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="detail" element={<Detail/>}/>
            <Route path="map" element={<Map/>}/>
            <Route path="*" element={<NoPage />} />
            <Route path="addpr" element={<Add />} />
            <Route path="sign" element={<Sign />} />
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path='page3' element={< Page3 />} />
          </Routes>
          
          <Outlet/>

          <footer className='App-footer'>
        
            <div class="row row-cols-4">
              <div class="col-4" style={{"margin-top": "20px", "text-align": "justify", "color": "#acc4d0","margin-left": "50px"}}>
              <img src={logo} className="App-logo" alt="logo" />
                <p1 style={{"":""}}>Product Store</p1>
                <p style={{"color":"rgb(237, 204, 237)"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, natus. Unde neque accusamus fuga, consectetur ad veniam mollitia asperiores voluptates dolore quo corporis molestiae modi sint obcaecati aliquid repellat illo.</p>
              </div>
              <div class="col-2" style={{"padding-top": "30px", "text-align": "justify","margin-left": "70px"}}>
                <h6 style={{"font-family": "serif", "":"", "font-weight": "bold"}}>QUICK MENU</h6>
                <ul style={{"": "", "line-height": "35px"}}>
                  <li>
                    <a href='/'>Home</a>
                  </li>
                  <li>
                    <a href='sevices'>Services</a>
                  </li>
                  <li>
                    <a href='about'>About us</a>
                  </li>
                  <li>
                    <a href='contact'> Contact us</a>
                  </li>
                </ul>
              </div>
              <div class="col-2" style={{"padding-top": "30px", "text-align": "justify"}}>
                <h6 style={{"font-family": "serif", "color":"rgb(178, 241, 255)", "font-weight": "bold"}}>QUICK MENU</h6>
                <ul style={{"color": "rgb(178, 241, 255)", "line-height": "35px"}}>
                <li>
                    <a href='/'>Home</a>
                  </li>
                  <li>
                    <a href='sevices'>Services</a>
                  </li>
                  <li>
                    <a href='about'>About us</a>
                  </li>
                  <li>
                    <a href='contact'> Contact us</a>
                  </li>
                </ul>
              </div>
              <div class="col-2" style={{"padding-top": "30px", "text-align": "justify","margin-left": "70px"}}>
                <h6 style={{"font-family": "serif", "color":"rgb(178, 241, 255)", "font-weight": "bold"}}>QUICK MENU</h6>
                <ul style={{"color": "rgb(178, 241, 255)", "line-height": "35px"}}>
                <li>
                    <a href='/'>Home</a>
                  </li>
                  <li>
                    <a href='sevices'>Services</a>
                  </li>
                  <li>
                    <a href='about'>About us</a>
                  </li>
                  <li>
                    <a href='contact'> Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            


          </footer>
          
        </div>
      </NoteState>
    </BrowserRouter>
  );
}

export default App;
