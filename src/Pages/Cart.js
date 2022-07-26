/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */

import React, { useState, useLayoutEffect, useEffect, useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
import MedicineItemInCart from "./Data/Medicineitemincart";

import { reducer } from "../Components/utils/reducer.js";
import { axiosGet } from "../Components/utils/axios.js";

import trashCanIcon from "../Images/trashCan.png";
import coupon from "../Images/Coupon.png";
import location from "../Images/location.png";

const CartMedicineDetail = (props) => {
	return (
		<>
			<div className="cartMedicine__container">
				<div>
					<p className="cartMedicine__name">{props.name}</p>
					<p className="cartMedicine__priceDetails">
						<span className="cartMedicine__rupeeLogo">₹</span>
						{props.sellingPrice}
						<br />
						<span>₹{props.costPrice}</span>
					</p>
				</div>
				<p>{props.packetInfo}</p>
				<div className="cartMedicine__footer">
					<p onClick={() => props.removeCartItem(props.id)}>
						<img src={trashCanIcon} alt="removeIcon" /> Remove
					</p>
					<p>
						<button onClick={() => props.decrement(props.id)}>-</button>
						<span>{props.count}</span>
						<button onClick={() => props.increment(props.id)}>+</button>
					</p>
				</div>
			</div>
		</>
	);
};

function Cart() {
	const { pathname } = useLocation();

	const [{ loading, error, data }, dispatch] = useReducer(reducer, {
		loading: true,
		data: [],
		error: "",
	});

	useLayoutEffect(() => {
		const user = localStorage.getItem("user");

		axiosGet(`${pathname}?user=${user}`, dispatch);
	}, [pathname]);

	console.log(data);

	const [cartItems, setCartItems] = useState(
		MedicineItemInCart.map((val) => ({
			...val,
			totalCostPrice: val.count * val.costPrice,
			totalSellingPrice: val.count * val.sellingPrice,
		}))
	);
	const [sellingPriceOfAllItems, setSellingPriceOfAllItems] = useState();
	const [costPriceOfAllItems, setCostPriceOfAllItems] = useState();
	const [shippingCharges, setShippingCharges] = useState(99);

	const removeCartItem = (id) => {
		setCartItems(
			cartItems.filter((val) => {
				if (val.id === id) {
					const result = window.confirm(
						"Are You Sure, You Want to Remove the Item from the Cart!!"
					);
					if (result) {
						return;
					}
					// return val;
				}
				return val;
			})
		);
	};

	const increment = (id) => {
		setCartItems(
			cartItems.map((val) => {
				if (val.id === id) {
					return {
						...val,
						count: val.count + 1,
						totalCostPrice: (val.count + 1) * val.costPrice,
						totalSellingPrice: (val.count + 1) * val.sellingPrice,
					};
				}
				return val;
			})
		);
	};

	const decrement = (id) => {
		setCartItems(
			cartItems.map((val) => {
				if (val.id === id) {
					return {
						...val,
						count: val.count > 1 ? val.count - 1 : 1,
						totalCostPrice: (val.count > 1 ? val.count - 1 : 1) * val.costPrice,
						totalSellingPrice: (val.count > 1 ? val.count - 1 : 1) * val.sellingPrice,
					};
				}
				return val;
			})
		);
	};

	useEffect(() => {
		const sellingPriceForAllItems = cartItems.reduce(
			(sum, val) => sum + val.totalSellingPrice,
			0
		);
		setSellingPriceOfAllItems(sellingPriceForAllItems);

		const costPriceForAllItems = cartItems.reduce((sum, val) => sum + val.totalCostPrice, 0);
		setCostPriceOfAllItems(costPriceForAllItems);
	}, [cartItems]);

	const CartMedicineDetailComponent = cartItems.map((val) => (
		<CartMedicineDetail
			key={val.id}
			id={val.id}
			name={val.name}
			sellingPrice={val.sellingPrice}
			costPrice={val.costPrice}
			count={val.count}
			packetInfo={val.packetInfo}
			increment={increment}
			decrement={decrement}
			removeCartItem={removeCartItem}
		/>
	));

	return (
		<>
			{loading ? (
				<div>Loading...</div>
			) : error ? (
				<div>Error...</div>
			) : (
				<section>
					<div className="cartMedicineItems__container">
						<p>Items({cartItems.length})</p>
						<div>{CartMedicineDetailComponent}</div>
						<div className="cartMedicineItems__totalPricing">
							<p>
								<img src={coupon} alt="couponImg" />
								<span>Apply Coupon</span>
							</p>
							<div>
								<div>
									<p>Item Total(MRP)</p>
									<p>
										<span>₹</span>
										{costPriceOfAllItems}
									</p>
								</div>
								<div className="cartMedicineItems__discount">
									<p>Price Discount</p>
									<p>
										<span>₹</span>
										{costPriceOfAllItems - sellingPriceOfAllItems}
									</p>
								</div>
								<hr />
								<div>
									<p>Shipping Fee</p>
									<p>
										<span>₹</span> {shippingCharges}
									</p>
								</div>
								<div>
									<p>Packaging Fee</p>
									<p>
										<span>₹</span> 0
									</p>
								</div>
								<hr />
								<div className="cartMedicineItems__toBePaid">
									<p>To Be Paid</p>
									<p>
										<span>₹</span>
										{sellingPriceOfAllItems + shippingCharges}
									</p>
								</div>
								<div>
									<p>Total Saving</p>
									<p>
										<span>₹</span>
										{costPriceOfAllItems - sellingPriceOfAllItems}
									</p>
								</div>
							</div>
							<div className="cartMedicineItems__address">
								<p>Delivery Address</p>
								<p>
									<img src={location} alt="LocationImg" /> New Delhi
								</p>
							</div>
							<Link className="cartMedicineItems__proceed" to="/">
								Proceed to Check Out
							</Link>
						</div>
					</div>
				</section>
			)}
		</>
	);
}

export default Cart;
