import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const NotFound = () => (
	<Container className="mt-5">
		<h1>404 - Not Found!</h1>
		<Link to="/">Go Home</Link>
	</Container>
);

export default NotFound;
