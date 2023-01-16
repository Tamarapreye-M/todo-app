import React, { useState, useRef, useEffect } from "react";
import check from "../Assets/icon-check.svg";

import InputTodo from "./InputTodo";
import AllTodo from "./AllTodo";

const Main = () => {
	const [todo, setTodo] = useState("");
	let initial = {
		id: ~~(Math.random() * 1000),
		completed: false,
		todo: todo,
	};
	const [allTodos, setAllTodos] = useState([]);

	const handleAddTodo = (ev) => {
		ev.preventDefault();
		allTodos.push(initial);
		// setAllTodos((prev) => [...prev, initial]);
		setTodo("");
	};
	// const navAll = useRef();
	// const navActive = useRef();
	// const navCompleted = useRef();
	let allPrev = useRef(allTodos);
	useEffect(() => {
		setAllTodos(allPrev.current);
	}, [allTodos.completed]);

	const handleDisplays = (e) => {
		console.log(e.target.innerHTML);
		let content = e.target.innerHTML;
		content === "all" && setAllTodos((prev) => prev);
		content === "active" &&
			setAllTodos((prev) => {
				let displaying = prev.filter((el) => el.completed === false);
				return displaying;
			});
		content === "completed" &&
			setAllTodos((prev) => {
				let displaying = prev.filter((el) => el.completed);
				return displaying;
			});
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
				<AllTodo allTodos={allTodos} setAllTodos={setAllTodos} />
				<div className="working">
					<p>5 items left</p>
					<div>
						<span onClick={handleDisplays}>all</span>
						<span onClick={handleDisplays}>active</span>
						<span onClick={handleDisplays}>completed</span>
					</div>
					<p>clear completed</p>
				</div>
			</div>
		</main>
	);
};

export default Main;
