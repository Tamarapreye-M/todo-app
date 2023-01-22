import React from "react";
import check from "../Assets/icon-check.svg";
import close from "../Assets/icon-cross.svg";

const DisplayTodos = ({ displayTodos, handleCompleted, handleDelete }) => {
	return (
		<div className="list-box">
			{displayTodos.map((each) => {
				return (
					<div
						key={each.id}
						className={`list-container ${each.completed && "active"}`}
					>
						<div
							className={`check-div`}
							onClick={() => handleCompleted(each.id)}
						>
							{each.completed && (
								<img src={check} alt="check icon" aria-label="check" />
							)}
						</div>
						<p className="list">{each.title} </p>
						<img
							src={close}
							alt="remove list icon"
							aria-label="remove list"
							title="remove list"
							className={`close-icon`}
							style={{ cursor: "pointer" }}
							onClick={() => handleDelete(each.id)}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default DisplayTodos;
