import React from "react";
import MobileNavigationData from "./Data/MobileNavigationData";

const MobileNavigationelement = (props) => {
	return (
		<>
			<div>
				<div className="background">
					<img src={props.image} alt="img" />
				</div>
				<p>{props.info}</p>
			</div>
		</>
	);
};

const MobileNavigationComponent = MobileNavigationData.map((val) => (
	<MobileNavigationelement key={val.id} image={val.image} info={val.info} />
));

function MobileNavigation() {
	return <>{MobileNavigationComponent}</>;
}

export default MobileNavigation;
