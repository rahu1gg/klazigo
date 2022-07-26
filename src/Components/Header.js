/* eslint-disable array-callback-return */
import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import axios from "axios";
import Searchdata from "./Data/Searchdata";
import { Link } from "react-router-dom";
import Navdata from "./Data/NavbarData";
import location from "../Images/location.png";
import locationpoint from "../Images/locationpoint.png";
import search from "../Images/search.png";
import klazigoLogo from "../Images/klazigoBlueLogo.jpg";
import bell from "../Images/bell.png";
import trolly from "../Images/trolly.png";
import LoginStepPage from "./Login/LoginStepPage.js";
import Auth from "./Login/Auth.js";
import closeImg from "./Login/Images/closeImg.png";
import profileImg from "./Images/profileImg.png";

const Navbar = Navdata.map((val) => (
	<li key={val} className="nav__item">
		<Link to={`/${val.toLowerCase()}`}>{val}</Link>
	</li>
));

function Header() {
	const [locationValue, setLocationValue] = useState({ label: "", value: "" });

	const modal = useRef();

	const locationOptions = Searchdata.map((val) => ({
		label: val.location,
		value: val.location.toLowerCase(),
	}));

	const hospitalOptions = Searchdata.filter((val) => {
		if (locationValue.label === "") {
			return val;
		} else if (locationValue.label.toLowerCase() === val.location.toLowerCase()) {
			return val;
		}
	}).map((val) => ({
		label: val.name,
		value: val.name.toLowerCase(),
	}));

	const showModal = () => {
		modal.current.showModal();
		console.log("called showModal function");
	};

	const closeModal = () => {
		modal.current.close();
	};

	const logout = () => {
		localStorage.removeItem("user");
		axios
			.get(`/logout`)
			.then((res) => {
				console.log(res.data);
				window.location.reload();
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	console.log(typeof Auth.isAuthenticated());

	// if (!Auth.isAuthenticated()) {
	// 	return setTimeout(showModal, 2000);
	// }

	useEffect(() => {
		if (!Auth.isAuthenticated()) {
			console.log("modal should show");
			setTimeout(showModal, 2000);
		}
	}, []);

	return (
		<header>
			<dialog ref={modal} className="dialog__container">
				<LoginStepPage closeModal={closeModal} />
				<button className="dialog__crossButton" onClick={closeModal}>
					<img src={closeImg} alt="intro" />
				</button>
			</dialog>
			<nav className="nav">
				<div>
					<Link to="/">
						<img className="nav__logo" src={klazigoLogo} alt="Klazigo Logo" />
					</Link>
				</div>
				<div className="nav__container">
					<ul className="nav__items">
						<li className="nav__item">
							<Link to="/hospitals?sortby=distance">Hospitals</Link>
						</li>
						{Navbar}

						{localStorage.getItem("user") ? (
							<div className="profilePic__container">
								<img src={profileImg} alt="profileImg" />
								<p onClick={logout}>Logout</p>
							</div>
						) : (
							<li className="nav__item">
								<button onClick={showModal}>Login/Signup</button>
							</li>
						)}
					</ul>
				</div>
			</nav>
			<hr className="horizontalLine" />
			<div className="section2">
				<div className="section2__location">
					<img
						className="section2__imgLocation section2__img"
						src={location}
						alt="locationimg"
					/>
					<Select
						placeholder="Location..."
						className="section2__select"
						options={locationOptions}
						onChange={setLocationValue}
					/>
					<img
						className="section2__imgLocationPoint section2__img"
						src={locationpoint}
						alt="locationpointimg"
					/>
				</div>
				<div className="section2__hospital">
					<img
						className="section2__imgSearch section2__img"
						src={search}
						alt="searchimg"
					/>
					<Select
						placeholder="Search hospitals,symptoms,medicine..."
						className="section2__select"
						id="section2__hospitalNameInput"
						options={hospitalOptions}
						onChange={(e) => console.log(e)}
					/>
				</div>
				<div className="section2__needHelp">
					<p>Need Help?</p>
				</div>
				<div className="section2__others">
					<Link to="/">
						<img className="section2__bell" src={bell} alt="bellimg" />
					</Link>
					<Link to="/cart">
						<img className="section2__trolly" src={trolly} alt="trollyimg" />
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Header;
