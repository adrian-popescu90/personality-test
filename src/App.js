import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "components/header";
import Home from "views/home";
import Test from "views/test";
import TestResult from "views/test-result";
import NotFound from "views/not-found";

import "./App.scss";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/home" component={Home} />
				<Route path="/take-the-test/:step" component={Test} />
				<Route path="/test-result" component={TestResult} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
