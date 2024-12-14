"use client";

import { useTodos } from "@/store/TodosStore";
import { TodoItem } from "./TodoItem";

export function TodoList() {
	const todos = useTodos((state) => state.todos);
	return (
		<ul className="mt-4 overflow-y-auto flex flex-col gap-4">
			{todos.map((todo) => (
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
