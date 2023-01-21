import React, { useState, useRef, useEffect } from "react";
import check from "../Assets/icon-check.svg";

import InputTodo from "./InputTodo";
import DisplayTodos from "./DisplayTodos";
import FilteredList from "./FilteredList";

const Main = () => {
	const [todo, setTodo] = useState("");
	let initial = {
		id: ~~(Math.random() * 1000),
		completed: false,
		todo: todo,
	};

	const [todos, setTodos] = useState([]);
	const [displayTodos, setDisplayTodos] = useState([]);

	const handleAddTodo = () => {
		const newTodos = [
			...todos,
			{
				id: Math.floor(Math.random() * 1000),
				title: todo,
				completed: false,
			},
		];
		setTodos(newTodos);
		setDisplayTodos(newTodos);
		setTodo("");
	};

	const handleCompleted = (id) => {
		console.log(todos);
		const updated = todos.map((item) =>
			item.id === id ? { ...item, completed: !item.completed } : item
		);
		setTodos(updated);
		setDisplayTodos(updated);
	};

	const handleClose = (id) => {
		const filtered = todos.filter((item) => item.id !== id);
		console.log(filtered);

		setTodos(filtered);
		setDisplayTodos(filtered);
	};
	const showTodos = (action) => {
		if (action == "ALL") {
			setDisplayTodos(todos);
		} else if (action == "ACTIVE") {
			setDisplayTodos(todos.filter((todos) => !todos.completed));
		} else if (action == "COMPLETED") {
			setDisplayTodos(todos.filter((todos) => todos.completed));
		}
	};

	return (
		<main>
			<div className="display-container">
				<div className="check-div" onClick={handleAddTodo}>
					<img src={check} alt="" />
				</div>

				<InputTodo todo={todo} setTodo={setTodo} />
			</div>
			<div className="list-controls">
				<DisplayTodos
					displayTodos={displayTodos}
					handleClose={handleClose}
					handleCompleted={handleCompleted}
				/>
				<div className="working">
					<p>
						{todos.filter((each) => each.completed === false).length} items left
					</p>
					<FilteredList className="desktop" showTodos={showTodos} />
					<p className="clear">Clear Completed</p>
				</div>
			</div>
			<FilteredList className="mobile" showTodos={showTodos} />
		</main>
	);
};

export default Main;
