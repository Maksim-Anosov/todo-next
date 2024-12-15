import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

export interface Todo {
	id: string;
	text: string;
	isDone: boolean;
}

interface TodosState {
	todos: Todo[];
	addTodo: (text: string) => void;
	handleToggle: (id: string) => void;
	removeTodo: (id: string) => void;
}

export const useTodos = create<TodosState>()(
	devtools(
		persist(
			immer((set) => ({
				todos: [],
				addTodo: (text: string) =>
					set((state) => {
						state.todos.push({ id: uuidv4(), text, isDone: false });
					}),
				handleToggle: (id: string) =>
					set((state) => {
						state.todos.forEach((todo) => {
							if (todo.id === id) {
								todo.isDone = !todo.isDone;
							}
						});
					}),
				removeTodo: (id: string) =>
					set((state) => {
						state.todos = state.todos.filter((todo) => todo.id !== id);
					}),
			})),
			{ name: "todos", version: 1 }
		)
	)
);
