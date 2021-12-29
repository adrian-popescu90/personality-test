import React from "react";
import PropTypes from "prop-types";

import "./personality-category.scss";

function PersonalityCategory({ title }) {
	return (
		<h2 className="p-category mb-3 m-md-5">{title}</h2>
	);
}

PersonalityCategory.propTypes = {
	title: PropTypes.string.isRequired
};

export default PersonalityCategory;
