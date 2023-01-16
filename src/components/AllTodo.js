import React from "react";
import check from "../Assets/icon-check.svg";
import close from "../Assets/icon-cross.svg";

const AllTodo = ({ allTodos, setAllTodos, handleCompleted }) => {
	return (
		<div className="list-box">
			{allTodos.map((each) => {
				return (
					<div
						key={each.id}
						className={`list-container ${each.completed && "active"}`}
					>
						{" "}
						<div
							className={`check-div`}
							onClick={() => {
								setAllTodos((prev) => {
									const updated = prev.map((item) =>
										item.id === each.id
											? { ...item, completed: !item.completed }
											: item
									);
									console.log(updated);
									return updated;
								});
							}}
						>
							{each.completed && <img src={check} alt="" />}
						</div>
						<p>{each.todo} </p>
						<img src={close} alt="" />
					</div>
				);
			})}
		</div>
	);
};

export default AllTodo;
