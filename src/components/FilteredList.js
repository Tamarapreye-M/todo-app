const FilteredList = ({ showTodos, className, isActive, setIsActive }) => {
	return (
		<div className={className}>
			<span
				onClick={() => showTodos("ALL")}
				className={isActive.all ? "active" : "inactive"}
			>
				all
			</span>
			<span
				onClick={() => showTodos("ACTIVE")}
				className={isActive.active ? "active" : "inactive"}
			>
				active
			</span>
			<span
				onClick={() => showTodos("COMPLETED")}
				className={isActive.completed ? "active" : "inactive"}
			>
				completed
			</span>
		</div>
	);
};

export default FilteredList;
