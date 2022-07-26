import React from "react";
import "./Card1.css";

function Card1(props) {
	return (
		<div className="card1">
			<img className="fav" src="/images/fav.png" alt="favicon" />
			<img className="card-img-top" src={props.img} alt="Cardimagecap" />
			<div className="card-body">
				<p className="card-title">{props.Card1_title}</p>
				<p className="card-text">
					<s>{props.Card1_text}</s>
				</p>
				<table>
					<tr>
						<td>
							<p className="price">{props.price}</p>
						</td>
						<td>
							<p className="off">{props.off}</p>
						</td>
					</tr>
				</table>

				<button className="btns">View Similar</button>
			</div>
		</div>
	);
}
export default Card1;
