import React from "react";
import Select from "react-select";
import Searchdata from "./Data/Searchdata";

const options = Searchdata.map((val) => ({
	label: val.location,
	value: val.location.toLowerCase(),
}));

const Searchcomponent = ({ onChange }) => {
	return (
		<>
			<Select
				placeholder="Location..."
				className="section2__select"
				options={options}
				onChange={onChange}
			/>
		</>
	);
};

export default Searchcomponent;
