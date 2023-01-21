const FilteredList = ({ showTodos, className }) => {
	return (
		<div className={className}>
			<span onClick={() => showTodos("ALL")}>all</span>
			<span onClick={() => showTodos("ACTIVE")}>active</span>
			<span onClick={() => showTodos("COMPLETED")}>completed</span>
		</div>
	);
};

export default FilteredList;
