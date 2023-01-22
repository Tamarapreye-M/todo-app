import React from "react";

const InputTodo = ({ todo, handleTodoInput }) => {
	return (
		<input
			type="text"
			className="input-todo"
			onChange={handleTodoInput}
			value={todo}
			placeholder="Create a new todo..."
		/>
	);
};

export default InputTodo;
