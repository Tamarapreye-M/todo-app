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

	const handleAddTodo = (ev) => {
		ev.preventDefault();
		allTodos.push(initial);
		setTodo("");
	};

	let allPrev = useRef(allTodos);
	let completePrev = allTodos.filter((each) => each.completed);
	useEffect(() => {
		setDiffTodos((prev) => {
			function addName(arr) {
				return arr.map((each) => ({ ...each, name: arr }));
			}
			let completeArr = allTodos
				.filter((each) => each.completed)
				.map((each) => ({ ...each, name: "completeArr" }));
			let activeArr = allTodos
				.filter((each) => each.completed === false)
				.map((each) => ({ ...each, name: "activeArr" }));
			let allArr = allTodos.map((each) => ({ ...each, name: "allArr" }));

			return [...prev, completeArr, activeArr, allArr];
		});

		console.log(diffTodos);
	}, [allTodos.completed]);
	console.log(diffTodos);
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
					<p>
						{allTodos.filter((each) => each.completed === false).length} items
						left
					</p>
					<FilteredList className="desktop" handleDisplays={handleDisplays} />
					<p className="clear">Clear Completed</p>
				</div>
			</div>
			<FilteredList className="mobile" handleDisplays={handleDisplays} />
		</main>
	);
};

export default Main;
