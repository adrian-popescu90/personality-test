import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import logo from "assets/logo.png";
import "./header.scss";

const Header = () => (
	<Navbar bg="light" expand="sm">
		<Container>
			<LinkContainer to="/">
				<img className="logo me-2" src={logo} alt="logo" />
			</LinkContainer>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<LinkContainer to="/home">
						<Nav.Link>Personality Types</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/test/1">
						<Nav.Link>Take the Test</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

export default Header;
