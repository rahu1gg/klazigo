import React from "react";
import Card from "./Card";
import "./Popular.css";

function Popular({ data }) {
	return (
		<div className="popular">
			<p className="category">Popular Categories</p>
			<div class="populargrid">
				{data.map((val) => (
					<Card key={val.id} id={val.id} type={val.type} />
				))}
			</div>
			<hr className="gap1" />
		</div>
	);
}
export default Popular;
