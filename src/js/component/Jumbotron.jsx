import React from "react";

export const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</p>
			<hr className="my-4" />
			<p>
				Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type
				and scrambled it to make a type specimen book.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					{" "}
					Call to action
				</a>
			</p>
		</div>
	);
};
