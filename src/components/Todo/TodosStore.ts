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
	clearCompleted: () => void;
	changeTodo: (newTodos: Todo[]) => void;
}

export const useTodos = create<TodosState>()(
	devtools(
		persist(
			immer((set) => ({
				todos: [],
				addTodo: (text) =>
					set((state) => {
						state.todos.push({ id: uuidv4(), text, isDone: false }); 
					}),
				handleToggle: (id) =>
					set((state) => {
						state.todos.forEach((todo) => {
							if (todo.id === id) {
								todo.isDone = !todo.isDone;
							}
						});
					}),
				removeTodo: (id) =>
					set((state) => {
						state.todos = state.todos.filter((todo) => todo.id !== id);
					}),
				clearCompleted: () =>
					set((state) => {
						state.todos = state.todos.filter((todo) => !todo.isDone);
					}),
				changeTodo: (newTodos) => set({ todos: newTodos }),
			})),
			{ name: "todos", version: 1 }
		)
	)
);
