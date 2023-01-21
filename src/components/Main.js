import React, { useState, useRef, useEffect } from "react";
import check from "../Assets/icon-check.svg";

import InputTodo from "./InputTodo";
import AllTodo from "./AllTodo";
import FilteredList from "./FilteredList";

const Main = () => {
	const [todo, setTodo] = useState("");
	let initial = {
		id: ~~(Math.random() * 1000),
		completed: false,
		todo: todo,
	};
	const [allTodos, setAllTodos] = useState([]);
	const [diffTodos, setDiffTodos] = useState([]);

	// const handleAddTodo = (ev) => {
	// 	ev.preventDefault();
	// 	allTodos.push(initial);
	// 	setTodo("");
	// };

	let allPrev = useRef(allTodos);
	let completePrev = allTodos.filter((each) => each.completed);

	const handleDisplays = (e) => {
		console.log(e.target.innerHTML);
		let content = e.target.innerHTML;
		content === "all" && setAllTodos((prev) => allPrev.current);
		content === "active" &&
			setAllTodos((prev) => {
				let displaying = prev.filter((el) => el.completed === false);
				return displaying;
			});

		content === "completed" && setAllTodos(completePrev);

		content === "all" &&
			setAllTodos(diffTodos.find((each) => each.name === "completeArr"));
		// setAllTodos(allPrev.current);
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
		const updated = todos.map((item) => {
			console.log(item, id);
			if (item.id === id) {
				// console.log(item);
				// console.log({ ...item, completed: !item.completed });
				return { ...item, completed: !item.completed };
			} else {
				return item;
			}
		});
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
				<AllTodo
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
