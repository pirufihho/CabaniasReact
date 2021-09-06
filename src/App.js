import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Home from './components/Home/Home'
import Cabanias from './components/Cabanias/Cabanias'
import Cabania from './components/Cabania/Cabania'
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
  <Navbar bg="light" expand="lg">
  <Container className="containernew">
    <Navbar.Brand ><Link to="/">Home</Link></Navbar.Brand>
    <Navbar.Brand ><Link to="/cabanias">Cabanias</Link></Navbar.Brand>
    <Navbar.Brand ><Link to="/about">About</Link></Navbar.Brand>
    <Navbar.Text className="containertext">
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>

  </Container>
</Navbar>

  </div>
  <div className='body'>
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/cabanias">
           <Cabanias />
         </Route>
         <Route path="/about">
           <About />
         </Route>
         <Route path="/cabania/:id">
           <Cabania />
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
