import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Card.css";
import concernBaseImg from "../Images/concernBaseImg.png";

const regSpace = new RegExp(" ", "g");

function Card(props) {
	const { pathname } = useLocation();

	return (
		<Link to={`${pathname}/${props.type.toLowerCase().replace(regSpace, "_")}?mid=${props.id}`}>
			<div className="medicard">
				<img className="imgs" src={props.img || concernBaseImg} alt="medicalTypeImg" />
				<p className="texts">{props.type}</p>
			</div>
		</Link>
	);
}
export default Card;
