import React from "react";
import PropTypes from "prop-types";

import "./personality-type.scss";

function PersonalityType({ title, type, description }) {
	return (
		<>
			<h2 className="p-title">{title}</h2>
			<h3 className="p-type mb-2 mb-lg-3">{type}</h3>
			<div className="p-description mb-3">{description}</div>
		</>
	);
}

PersonalityType.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default PersonalityType;
