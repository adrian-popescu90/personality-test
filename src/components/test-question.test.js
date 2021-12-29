import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import TestQuestion from "./test-question";

test("renders a test question", () => {
	render(<TestQuestion question="You regularly make new friends." />);
	const questionElement = screen.getByText(/You regularly make new friends/i);
	expect(questionElement).toBeInTheDocument();
});
