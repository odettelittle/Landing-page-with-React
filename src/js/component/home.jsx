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
				<div className="col-3">
					<Card title="first title" text="some text" />
				</div>
				<div className="col-3">
					<Card />
				</div>
				<div className="col-3">
					<Card />
				</div>
				<div className="col-3">
					<Card />
				</div>
			</div>
		</>
	);
};

export default Home;
