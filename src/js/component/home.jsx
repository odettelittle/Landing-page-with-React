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
					<Card
						title="First title"
						text="Few places in the world are as married to the water as Venice. 
						Not only has the Floating City replaced streets with canals and land with islands."
					/>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card
						title="Second title"
						text="Like much of the sea-hugging world, the city is also facing an existential threat as the waters rise and its ground sinks."
					/>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card
						title="Third title"
						text="“Having a floating home used to be something only for vacationers or the uber-wealthy,” Mr. Funk said. “Now more people are realizing they can do it.“"
					/>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card
						title="Fourth title"
						text="“It really is the perfect studio space,” he said. “It has all the inspiration and little of the distraction.”"
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
