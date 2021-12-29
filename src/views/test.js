import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

import questions from "mockData/testQuestions.json";
import PageTitle from "components/page-title";
import TestQuestion from "components/test-question";
import TestRating from "components/test-rating";

import "./test.scss";

function Test() {
	const params = useParams();
	const history = useHistory();
	let currentStep = params.step;
	const currentQuestion = questions[currentStep - 1];

	const [score, setScore] = useState([]);
	const [ratingValue, setRatingValue] = useState(0);

	useEffect(() => {
		setRatingValue(score[currentStep - 1] || 0);
	}, [currentStep]);

	const handleRating = (rate) => {
		setRatingValue(rate / 20);
	};

	const handleBack = () => {
		currentStep--;
		history.push(`/test/${currentStep}`);
	};

	const handleNext = () => {
		const scoreClone = score;
		if (scoreClone[currentStep - 1] !== 0) {
			scoreClone[currentStep - 1] = ratingValue;
		} else {
			scoreClone.splice(currentStep - 1, 0, ratingValue);
		}
		setScore(scoreClone);

		if (currentStep < questions.length) {
			currentStep++;
			history.push(`/test/${currentStep}`);
		} else {
			let finalScore = 0;
			for (let i = 0; i < scoreClone.length; i++) {
				finalScore += scoreClone[i] || 0;
			}
			history.push({
				pathname: "/test-result",
				state: { finalScore }
			});
		}
	};

	return (
		<Container>
			<PageTitle title="Personality Test" />

			<div key={currentQuestion.id} className="text-center mb-5">
				<TestQuestion question={currentQuestion.text} />
				<TestRating initialValue={score[currentStep - 1] || 0} onClick={handleRating} />
			</div>

			<div className="text-center">
				{ currentStep > 1 && <Button size="lg" className="m-2" onClick={handleBack}>Back</Button> }
				<Button size="lg" className="m-2" onClick={handleNext} disabled={ratingValue === 0}>Next</Button>
			</div>
		</Container>
	);
}

export default Test;
