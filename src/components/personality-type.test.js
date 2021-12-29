import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import PersonalityType from "./personality-type";

test("renders a personality type", () => {
	render(<PersonalityType title="Architect" type="INTJ-A / INTJ-T" description="Imaginative and strategic thinkers, with a plan for everything." />);
	const titleElement = screen.getByText(/Architect/i);
	const typeElement = screen.getByText(/INTJ-A \/ INTJ-T/i);
	const descriptionElement = screen.getByText(/Imaginative and strategic thinkers, with a plan for everything./i);
	expect(titleElement).toBeInTheDocument();
	expect(typeElement).toBeInTheDocument();
	expect(descriptionElement).toBeInTheDocument();
});