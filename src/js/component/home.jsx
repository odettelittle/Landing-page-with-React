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
						text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					/>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card
						title="Second title"
						text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					/>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card
						title="Third title"
						text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					/>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card
						title="Fourth title"
						text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
