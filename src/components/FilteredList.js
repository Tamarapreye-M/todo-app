import React from "react";

const FilteredList = ({ handleDisplays, className }) => {
	return (
		<div className={className}>
			<span onClick={handleDisplays}>all</span>
			<span onClick={handleDisplays}>active</span>
			<span onClick={handleDisplays}>completed</span>
		</div>
	);
};

export default FilteredList;
