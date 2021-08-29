import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About';
import Footer from './components/Footer/Footer'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    

<Router>

<section className='myGrid'>
  <div className='header'>
  <Navbar>
  <Container>
    <Navbar.Brand ><Link to="/home">Home</Link></Navbar.Brand>
    <Navbar.Brand ><Link to="/about">About</Link></Navbar.Brand>
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>

  </Container>
</Navbar>

  </div>
  <div className='body'>
       <Switch>
         <Route path="/home">
           <Home />
         </Route>
         <Route path="/about">
           <About />
         </Route>
       </Switch>
  </div>
  <div className='footer'>
    <Footer />
  </div>
</section>
</Router>
  );
}

export default App;
