import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import personalityTypes from "mockData/personalityTypes.json";
import PageTitle from "components/page-title";
import PersonalityCategory from "../components/personality-category";
import PersonalityType from "../components/personality-type";

import "./test.result.scss";

function TestResult(props) {
	const history = useHistory();

	const [personality, setPersonality] = useState("");
	const [personalityType, setPersonalityType] = useState(0);
	const [type, setType] = useState(0);

	useEffect(() => {
		const finalScore = props?.location?.state?.finalScore;

		if (finalScore === undefined) {
			history.push("/home");
		} else {
			window.history.replaceState(null, "");
			setPersonality(finalScore > 12 ? "extrovert" : "introvert");
			setType(Math.floor(Math.random() * 4));
			switch (true) {
			case (finalScore < 7):
				setPersonalityType(0);
				break;
			case (finalScore < 13):
				setPersonalityType(1);
				break;
			case (finalScore < 19):
				setPersonalityType(2);
				break;
			default:
				setPersonalityType(3);
			}
		}
	}, []);

	return (
		<div className="test-result-page">
			<Container>
				<PageTitle title={`You are an ${personality}`} />
			</Container>

			<div className={personalityTypes[personalityType].category.toLowerCase()}>
				<Container className="pt-3 pb-3">
					<PersonalityCategory title={personalityTypes[personalityType].category} />
					<Row>
						<PersonalityType
							title={personalityTypes[personalityType].types[type].title}
							type={personalityTypes[personalityType].types[type].type}
							description={personalityTypes[personalityType].types[type].description}
						/>
					</Row>
				</Container>
			</div>
		</div>
	);
}

TestResult.defaultProps = {
	location: {}
};

TestResult.propTypes = {
	location: PropTypes.shape({
		state: PropTypes.objectOf(PropTypes.number)
	})
};

export default TestResult;
