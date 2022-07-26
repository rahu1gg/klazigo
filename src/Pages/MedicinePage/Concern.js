import React from "react";
import Card from "./Card";
import "./Concern.css";

function Concern({ data }) {
	return (
		<div className="concern">
			<p className="cat">Concern Based categories</p>
			<div class="concerngrids">
				{data.map((val) => (
					<Card key={val.id} id={val.id} type={val.type} />
				))}
			</div>
			<hr className="gap3" />
		</div>
	);
}
export default Concern;
