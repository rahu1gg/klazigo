/* eslint-disable array-callback-return */
import React, { useState, useEffect, useReducer, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { axiosGet } from "../../Components/utils/axios.js";
import { reducer } from "../../Components/utils/reducer.js";

import discountImage from "../../Images/discountImg.png";
import Footer from "../../Components/Footer";
import favorite from "../../Images/favorite.png";
import notFavorite from "../../Images/notFavorite.png";

const Medicineproduct = (props) => {
	const { pathname, search } = useLocation();

	return (
		<>
			<Link to={`${pathname}/${props.id}${search}&medicineId=${props.id}`}>
				<div className="medicineCard">
					<img
						src={props.isFavorite}
						alt="favoriteImg"
						className="medicineCard__isFavoriteImg"
						onClick={() => props.togglefavorite(props.id)}
					/>
					<div className="medicineCard__imgContainer">
						<img src={props.image} alt={props.company} className="medicineCard__img" />
					</div>

					<div className="medicineCard__info">
						<p className="medicineCard__productName">{props.productName}</p>
						<p className="medicineCard__costPrice">{props.costPrice}</p>
						<table className="medicineCard__pricingTable">
							<tbody>
								<tr>
									<td>
										<p className="medicineCard__sellingPrice">
											₹{props.sellingPrice}.00
										</p>
									</td>
									<td>
										<span className="medicineCard__discount">
											{props.discount}
										</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</Link>
		</>
	);
};

const MedicineCategory = () => {
	const [{ loading, error, data }, dispatch] = useReducer(reducer, {
		loading: true,
		data: [],
		error: "",
	});
	const [cards, setCards] = useState([]);

	const companyContainsDuplicates = data.map((val) => val.company);
	const company = [...new Set(companyContainsDuplicates)];
	company.push("default");

	const { pathname, search } = useLocation();

	useLayoutEffect(() => {
		axiosGet(`${pathname}${search}`, dispatch);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	useEffect(() => {
		console.log("🚀 ~ file: MedicineCategory.js ~ line 72 ~ useEffect ~ data", data);
		setCards(data);
	}, [data]);

	const [sortBy, setSortBy] = useState("");
	const [filter, setFilter] = useState("");

	const [nmap, setNmap] = useState([{ path: "" }]);

	useEffect(() => {
		setNmap((nmap) =>
			nmap.map((val) => {
				return { ...val, path: pathname };
			})
		);
	}, [pathname]);

	const Nmapcomponent = nmap.map((val, index) => (
		<Link key={index} className="nmap__links" to={val.path}>
			{val.path.replace("/", "")}
		</Link>
	));

	const changeSort = (val) => {
		if (val.toLowerCase().replace(" ", "") === "priceasending") {
			const sortCards = cards.sort((a, b) => {
				if (a.sellingPrice - b.sellingPrice === 0) {
					return a.productName < b.productName ? -1 : 1;
				}
				return a.sellingPrice - b.sellingPrice;
			});
			setCards(sortCards);
			return setSortBy(val);
		} else if (val.toLowerCase().replace(" ", "") === "pricedescending") {
			const sortCards = cards.sort((a, b) => {
				if (b.sellingPrice - a.sellingPrice === 0) {
					return b.productName > a.productName ? -1 : 1;
				}
				return b.sellingPrice - a.sellingPrice;
			});
			setCards(sortCards);
			return setSortBy(val);
		} else {
			const sortCards = cards.sort((a, b) => a.id - b.id);
			setCards(sortCards);
			return setSortBy("");
		}
	};

	const changeFilter = (val) => {
		if (val === "default") {
			setFilter("");
			setCards(data);
			return;
		}
		setFilter(val);
		const filteredData = data.filter((value) => {
			if (value.company === val) {
				return value;
			}
		});
		setCards(filteredData);
	};

	const toggleFavorite = (id) => {
		const changedCards = cards.map((val) => {
			if (val.id === id) {
				return { ...val, isFavorite: !val.isFavorite };
			}
			return val;
		});
		setCards(changedCards);
	};

	const Filtercomponent = company.map((val, index) => {
		return (
			<label
				key={val}
				id={index}
				htmlFor={val}
				onClick={(e) => changeFilter(e.target.textContent)}
			>
				{val}
				<br />
			</label>
		);
	});

	const Medicinecomponent = cards.map((val) => (
		<Medicineproduct
			key={val.id}
			id={val.id}
			image={val.image}
			company={val.company}
			productName={val.productName}
			costPrice={val.costPrice}
			sellingPrice={val.sellingPrice}
			discount={val.discount}
			isFavorite={val.isFavorite ? favorite : notFavorite}
			togglefavorite={toggleFavorite}
		/>
	));

	return (
		<>
			{loading ? (
				<div>Loading...</div>
			) : error ? (
				<div>Error...</div>
			) : (
				<>
					<section>
						<div className="nmap">
							<Link className="nmap__links" to="/">
								Homepage
							</Link>
							<Link className="nmap__links" to="/medicine">
								Medicine
							</Link>
							{Nmapcomponent}
						</div>
						<p className="medicine__type">Winter Care</p>
						<div className="medicine__filtersAndSortContainer">
							<div className="medicine__sortContainer">
								<button className="medicine__sortByBtn">Sort By:{sortBy}</button>
								<div className="medicine__sortOptions">
									<label
										htmlFor="asending"
										onClick={(e) => changeSort(e.target.textContent)}
									>
										Price Asending
									</label>
									<br />
									<label
										htmlFor="descending"
										onClick={(e) => changeSort(e.target.textContent)}
									>
										Price Descending
									</label>
									<br />
									<label
										htmlFor="default"
										onClick={(e) => changeSort(e.target.textContent)}
									>
										default
									</label>
								</div>
							</div>
							<span className="medicine__sortFilterDivider"></span>
							<div className="medicine__filterContainer">
								<button className="medicine__filterByBtn">
									Filter By:{filter}
								</button>
								<div className="medicine__filterOptions">{Filtercomponent}</div>
							</div>
						</div>
						<div className="medicine__adsContainer">
							<img className="medicine__ads" src={discountImage} alt="discountimg" />
						</div>
						<div className="medicine__boxex">{Medicinecomponent}</div>
					</section>
					<Footer />
				</>
			)}
		</>
	);
};

export default MedicineCategory;
