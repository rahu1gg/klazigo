import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nmap = () => {
	const { pathname, search } = useLocation();
	const pathNameArray = pathname.replace("/", "").split("/");
	const slashIndex = [];

	for (const s in pathname.replace("/", "")) {
		if (pathname.replace("/", "")[s] === "/") {
			console.log(s);
			slashIndex.push(Number(s));
		}
	}
	slashIndex.push(pathname.length - 1);

	return (
		<>
			<ul className="page__nmap">
				<li className="page__options" la>
					<Link to={`/`} className="page__links">
						Home Page
					</Link>
				</li>

				{slashIndex.map((val, index) => {
					return (
						<li key={val} className="page__options">
							<Link
								to={`/${pathname.replace("/", "").substring(0, val)}${search}`}
								className="page__links"
							>{`${pathNameArray[index].substr(0, 1).toUpperCase()}${pathNameArray[
								index
							]
								.substr(1, pathNameArray[index].length)
								.toLowerCase()}`}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Nmap;
