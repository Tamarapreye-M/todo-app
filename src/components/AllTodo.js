import React from "react";
import check from "../Assets/icon-check.svg";
import close from "../Assets/icon-cross.svg";

const AllTodo = ({ allTodos, setAllTodos }) => {
	return (
		<div className="list-box">
			{allTodos.map((each) => {
				const handleCompleted = () => {
					setAllTodos((prev) => {
						const updated = prev.map((item) =>
							item.id === each.id
								? { ...item, completed: !item.completed }
								: item
						);
						// console.log(updated);
						return updated;
					});
				};
				const handleClose = () => {
					setAllTodos((prev) => {
						const filtered = prev.filter((item) => item.id !== each.id);
						return filtered;
					});
				};

				return (
					each.todo.trim() && (
						<div
							key={each.id}
							className={`list-container ${each.completed && "active"}`}
						>
							{" "}
							<div className={`check-div`} onClick={handleCompleted}>
								{each.completed && (
									<img src={check} alt="check icon" aria-label="check" />
								)}
							</div>
							<p className="list">{each.todo} </p>
							<img
								src={close}
								alt="remove list icon"
								aria-label="remove list"
								title="remove list"
								className={`close-icon`}
								style={{ cursor: "pointer" }}
								onClick={handleClose}
							/>
						</div>
					)
				);
			})}
		</div>
	);
};

export default AllTodo;
