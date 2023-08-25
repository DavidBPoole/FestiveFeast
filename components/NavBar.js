/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
// import { useRouter } from 'next/router';
import { signOut } from '../utils/auth';
import SearchBar from './SearchBar';

export default function NavBar() {
  // const router = useRouter();
  return (
    <Navbar id="feetfirst-nav-outer" collapseOnSelect expand="lg" variant="light">
      <Container id="feetfirst-nav">
        <Container id="nav-left" className="nav-spacing nav-outer">
          <Link passHref href="/">
            <Navbar.Brand>
              {/* <h2>Festive Feast</h2> */}
              <img src="/FestiveFeastLogo.png" width="70%" height="90%" alt="icon" className="nav-logo" />
            </Navbar.Brand>
          </Link>
        </Container>
        <Container id="nav-middle" className="nav-spacing">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav id="feetfirst-nav-inner">
              <Link passHref href="/">
                <Nav.Link style={{ fontFamily: 'Crimson Text', fontSize: 20 }}>Home</Nav.Link>
              </Link>
              <Link passHref href="/events">
                <Nav.Link style={{ fontFamily: 'Crimson Text', fontSize: 20 }}>Events</Nav.Link>
              </Link>
              {/* <Link passHref href="/supplies">
                <Nav.Link style={{ fontFamily: 'Crimson Text', fontSize: 20 }}>Supplies</Nav.Link>
              </Link> */}
              {/* <Link passHref href="/favorites">
                <Nav.Link style={{ fontFamily: 'Crimson Text', fontSize: 20 }}>Community</Nav.Link>
              </Link> */}
              <Link passHref href="/myEvents">
                <Nav.Link style={{ fontFamily: 'Crimson Text', fontSize: 20 }}>My Events</Nav.Link>
              </Link>
              <Link passHref href="/profile">
                <Nav.Link style={{ fontFamily: 'Crimson Text', fontSize: 20 }}>Profile</Nav.Link>
              </Link>
              {/* <Link passHref href="/profile">
                <Nav.Link style={{ fontFamily: 'Crimson Text', fontSize: 20 }}>Messages</Nav.Link>
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container id="nav-right" className="nav-outer nav-spacing">
          <SearchBar />
          <Button variant="outline-dark" onClick={signOut} style={{ fontFamily: 'Crimson Text', fontSize: 18 }}>
            Sign Out
          </Button>
        </Container>
      </Container>
    </Navbar>
  );
}
