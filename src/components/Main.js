import React, { useState } from "react";
import check from "../Assets/icon-check.svg";

import InputTodo from "./InputTodo";
import DisplayTodos from "./DisplayTodos";
import FilteredList from "./FilteredList";

const Main = () => {
	// states

	// state for the individual todo list items the user would create in the input field
	const [todo, setTodo] = useState("");

	// state for storing all the todos the user would create
	const [todos, setTodos] = useState([]);

	// state for displaying the todo list items on the page
	const [displayTodos, setDisplayTodos] = useState([]);

	const [isActive, setIsActive] = useState({
		all: true,
		active: false,
		completed: false,
	});

	// evvent handler functions

	// handler for the settting the todo to the value from the input field, when it is changed
	const handleTodoInput = (ev) => {
		const { value } = ev.target;
		setTodo(value);
	};
	// handle for adding a todo item to the todo data state, when user clicks on the check in the input
	const handleAddTodo = () => {
		// spreads the todos state and adds an object with a unique id, a title with the value of the todo item user
		// inputs and a property for taking note of whether it is completed or not
		// the object represents each todo item on the list
		const newTodos = [
			...todos,
			{
				id: Math.floor(Math.random() * 1000),
				title: todo,
				completed: false,
			},
		];
		// sets the data state
		setTodos(newTodos);
		// also sets the display state
		setDisplayTodos(newTodos);
		// reset the todo state of the input field
		setTodo("");
	};

	// handler for updating the completed property when user clicks on the check on each todo list item
	const handleCompleted = (id) => {
		const updated = todos.map((item) =>
			item.id === id ? { ...item, completed: !item.completed } : item
		);
		setTodos(updated);
		setDisplayTodos(updated);
	};

	// handler for deleting when user clicks on the delete icon on each todo item
	const handleDelete = (id) => {
		const filtered = todos.filter((item) => item.id !== id);
		console.log(filtered);

		setTodos(filtered);
		setDisplayTodos(filtered);
	};

	// handler for filtering and displaying todo lists
	const showTodos = (action) => {
		if (action === "ALL") {
			setDisplayTodos(todos);
			setIsActive({ ...isActive, all: true, active: false, completed: false });
		} else if (action === "ACTIVE") {
			setDisplayTodos(todos.filter((todos) => !todos.completed));
			setIsActive({ ...isActive, all: false, active: true, completed: false });
		} else if (action === "COMPLETED") {
			setDisplayTodos(todos.filter((todos) => todos.completed));
			setIsActive({ ...isActive, all: false, active: false, completed: true });
		}
	};
	// handler for removing all completed list items
	const clearCompleted = () => {
		let cleared = todos.filter((each) => each.completed === false);
		setTodos(cleared);
		setDisplayTodos(cleared);
	};

	return (
		<main>
			<div className="display-container">
				<div className="check-div" onClick={handleAddTodo}>
					<img src={check} alt="" />
				</div>

				<InputTodo
					todo={todo}
					setTodo={setTodo}
					handleTodoInput={handleTodoInput}
				/>
			</div>
			<div className="list-controls">
				<DisplayTodos
					displayTodos={displayTodos}
					handleDelete={handleDelete}
					handleCompleted={handleCompleted}
				/>
				<div className="working">
					<p>
						{todos.filter((each) => each.completed === false).length} items left
					</p>
					<FilteredList
						className="desktop filter"
						showTodos={showTodos}
						isActive={isActive}
						setIsActive={setIsActive}
					/>
					<p className="clear" onClick={clearCompleted}>
						Clear Completed
					</p>
				</div>
			</div>
			<FilteredList
				className="mobile filter"
				showTodos={showTodos}
				isActive={isActive}
				setIsActive={setIsActive}
			/>
		</main>
	);
};

export default Main;
