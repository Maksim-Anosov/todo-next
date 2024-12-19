"use client";

import React, { SyntheticEvent } from "react";
import { TodoItem } from "./TodoItem";
import { Todo, useTodos } from "./TodosStore";

export function TodoList({ todos }: { todos: Todo[] }) {
	const handleToggle = useTodos((state) => state.handleToggle);
	const removeTodo = useTodos((state) => state.removeTodo);

	function handleIsDone(event: SyntheticEvent<HTMLElement>) {
		if ((event.target as HTMLElement).matches(".isDone")) {
			handleToggle((event.target as HTMLElement).closest("li")?.id as string);
		}
	}

	function handleRemove(event: SyntheticEvent<HTMLElement>) {
		if ((event.target as HTMLElement).matches(".remove")) {
			removeTodo((event.target as HTMLElement).closest("li")?.id as string);
		}
	}

	function handleClick(event: SyntheticEvent<HTMLElement>) {
		handleIsDone(event);
		handleRemove(event);
	}

	return (
		<ul
			onClick={handleClick}
			className="mt-4 overflow-y-auto flex flex-col gap-4"
		>
			{todos?.map((todo) => (
				<TodoItem
					key={todo.id}
					id={todo.id}
					text={todo.text}
					isDone={todo.isDone}
				/>
			))}
		</ul>
	);
}