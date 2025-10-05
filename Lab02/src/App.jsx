// import './App.css'; removed this at some point, not needed
import { Nav, Navbar, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';
import NavigationBar from './components/NavigationBar.jsx';



function App() {
  return (
    <>   {/* fragment: used for multi element */}
     <Router>
        <NavigationBar bg="primary" data-bs-theme="dark"> {/* Dont know if navigation works */}
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </NavigationBar>
        <Footer></Footer>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/read" element={<Header />} />
          <Route path="/create" element={<Content />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
