import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Jumbotron } from "./Jumbotron";

//create your first component
const Home = () => {
	return (
		<div>
			<Jumbotron />
		</div>
	);
};

export default Home;
