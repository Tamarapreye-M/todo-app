import React from "react";
import checkIcon from "../Assets/icon-check.svg";
import deleteIcon from "../Assets/icon-cross.svg";

const DisplayTodos = ({ displayTodos, handleCompleted, handleDelete }) => {
	// this component deals with the part that shows the user his todo list items
	return (
		<div className="list-box">
			{displayTodos.map((each) => {
				return (
					<div
						key={each.id}
						// adds a class of completed when marked complete to style the checkbox
						className={`list-container ${each.completed && "completed"}`}
					>
						<div
							className={`check-div`}
							onClick={() => handleCompleted(each.id)}
							title={each.completed ? "unmark" : "mark complete"}
						>
							{/* conditional rendering for the ckeck in the box */}
							{each.completed && (
								<img src={checkIcon} alt="check icon" aria-label="check" />
							)}
						</div>
						<p className="list">{each.title} </p>
						<img
							src={deleteIcon}
							alt="remove list icon"
							aria-label="remove list"
							title="remove list"
							className={`close-icon`}
							style={{ cursor: "pointer" }}
							// to call a function in an event, it must be wrapped in a function

							onClick={() => handleDelete(each.id)}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default DisplayTodos;
