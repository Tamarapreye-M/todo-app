const FilteredList = (props) => {
	const { handleShowTodos, className, isActive } = props;
	// the class of each span is set to is-active when the user has clicked on that span

	return (
		<div className={className}>
			<span
				onClick={() => handleShowTodos("ALL")}
				className={isActive.all && "is-active"}
			>
				all
			</span>
			<span
				onClick={() => handleShowTodos("ACTIVE")}
				className={isActive.active && "is-active"}
			>
				active
			</span>
			<span
				onClick={() => handleShowTodos("COMPLETED")}
				className={isActive.completed && "is-active"}
			>
				completed
			</span>
		</div>
	);
};

export default FilteredList;
