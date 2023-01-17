import React from "react";

const InputTodo = ({ todo, setTodo }) => {
	const handleTodoList = (ev) => {
		const { value } = ev.target;
		setTodo(value);
	};
	return (
		<input
			type="text"
			className="input-todo"
			onChange={handleTodoList}
			value={todo}
			placeholder="Create a new todo..."
		/>
	);
};

export default InputTodo;
