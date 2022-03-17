import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Jumbotron } from "./Jumbotron";
import { Navbar } from "./Navbar";
import { Card } from "./Card";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="row">
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card title="First title" text="Some text" />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card title="First title" text="Some text" />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card title="First title" text="Some text" />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card title="First title" text="Some text" />
				</div>
			</div>
		</>
	);
};

export default Home;
