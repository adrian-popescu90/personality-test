import React from "react";
import PropTypes from "prop-types";

import "./page-title.scss";

function PageTitle({ title }) {
	return (
		<h1 className="page-title pt-3 pb-3 m-0">{title}</h1>
	);
}

PageTitle.propTypes = {
	title: PropTypes.string.isRequired
};

export default PageTitle;
