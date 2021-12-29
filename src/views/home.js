import React from "react";
import {
	Button, Container, Row, Col
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import personalityTypes from "mockData/personalityTypes.json";
import PageTitle from "components/page-title";
import PersonalityCategory from "components/personality-category";
import PersonalityType from "components/personality-type";

import "./home.scss";

function Home() {
	return (
		<div className="home-page">
			<Container>
				<PageTitle title="Personality Types" />
			</Container>

			{personalityTypes.map((personalityType) => (
				<div
					key={personalityType.category.toLowerCase()}
					className={personalityType.category.toLowerCase()}
				>
					<Container className="pt-3 pb-4 pb-md-5">
						<PersonalityCategory title={personalityType.category} />
						<Row>
							{personalityType.types.map((type) => (
								<Col key={type.title} xs={12} md={6} lg={3}>
									<PersonalityType
										title={type.title}
										type={type.type}
										description={type.description}
									/>
								</Col>
							))}
						</Row>
					</Container>
				</div>
			))}

			<Container className="text-center mt-4 mb-4">
				<LinkContainer to="/take-the-test/1">
					<Button size="lg">Find your type</Button>
				</LinkContainer>
			</Container>
		</div>
	);
}

export default Home;
