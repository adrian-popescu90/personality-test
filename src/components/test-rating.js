import React from "react";
import { Rating } from "react-simple-star-rating";
import { Circle, CircleFill } from "react-bootstrap-icons";
import PropTypes from "prop-types";

const TestRating = ({ initialValue, onClick }) => (
	<Rating
		emptyIcon={<Circle className="m-1" size={30} />}
		fullIcon={<CircleFill className="m-1" size={30} />}
		fillColor="#00FF7F"
		initialValue={initialValue}
		onClick={onClick}
	/>
);

TestRating.propTypes = {
	initialValue: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
};

export default TestRating;
