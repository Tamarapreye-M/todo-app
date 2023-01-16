import React, { useState } from "react";
import check from "../Assets/icon-check.svg";

import InputTodo from "./InputTodo";
import AllTodo from "./AllTodo";

const Main = () => {
	const [todo, setTodo] = useState("");
	let initial = {
		id: ~~(Math.random() * 1000),
		completed: false,
		todo: todo,
		showClose: false,
	};
	const [allTodos, setAllTodos] = useState([]);

	const handleAddTodo = (ev) => {
		ev.preventDefault();
		allTodos.push(initial);
		// setAllTodos((prev) => [...prev, initial]);
		setTodo("");
	};

	function handleCompleted(id) {
		setAllTodos((prev) => {
			const updated = prev.map((each) =>
				each.id === id ? { ...each, completed: !each.completed } : each
			);
			return updated;
		});
		console.log(allTodos);
	}
	return (
		<main>
			<div className="display-container">
				<div className="check-div" onClick={handleAddTodo}>
					<img src={check} alt="" />
				</div>

				<InputTodo todo={todo} setTodo={setTodo} />
			</div>
			<div className="list-controls">
				<AllTodo
					allTodos={allTodos}
					setAllTodos={setAllTodos}
					handleCompleted={handleCompleted}
				/>
				<div className="working">
					<p>5 items left</p>
					<div>
						<span>All</span>
						<span>Active</span>
						<span>Completed</span>
					</div>
					<p>clear completed</p>
				</div>
			</div>
		</main>
	);
};

export default Main;
