import { create } from "zustand";
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

export const useTodos = create<TodosState>((set) => ({
	todos: [],
	addTodo: (text: string) =>
		set((state) => ({
			todos: [{ id: uuidv4(), text, isDone: false }, ...state.todos],
		})),
	handleToggle: (id: string) =>
		set((state) => ({
			todos: state.todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, isDone: !todo.isDone };
				}
				return todo;
			}),
		})),
	removeTodo: (id: string) =>
		set((state) => ({
			todos: state.todos.filter((todo) => todo.id !== id),
		})),
}));
