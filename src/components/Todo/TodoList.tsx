"use client";

import React from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "./TodosStore";

export function TodoList({ todos }: { todos: Todo[] }) {
	return (
		<ul className="mt-4 overflow-y-auto flex flex-col gap-4">
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