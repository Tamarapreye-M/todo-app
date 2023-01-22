const FilteredList = ({
	handleShowTodos,
	className,
	isActive,
	setIsActive,
}) => {
	return (
		<div className={className}>
			<span
				onClick={() => handleShowTodos("ALL")}
				className={isActive.all ? "active" : "inactive"}
			>
				all
			</span>
			<span
				onClick={() => handleShowTodos("ACTIVE")}
				className={isActive.active ? "active" : "inactive"}
			>
				active
			</span>
			<span
				onClick={() => handleShowTodos("COMPLETED")}
				className={isActive.completed ? "active" : "inactive"}
			>
				completed
			</span>
		</div>
	);
};

export default FilteredList;
