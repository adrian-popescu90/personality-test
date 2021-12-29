import React from "react";
import PropTypes from "prop-types";

const TestQuestion = ({ question }) => (
	<h3 className="p-4">{question}</h3>
);

TestQuestion.propTypes = {
	question: PropTypes.string.isRequired
};

export default TestQuestion;
