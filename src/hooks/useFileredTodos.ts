import { useTodos } from "@/store/TodosStore";

export function useFilteredTodos() {
	const { todos } = useTodos();
	const activeTodos = todos.filter((todo) => !todo.isDone);
	const completedTodos = todos.filter((todo) => todo.isDone);
	const allTodos = todos;

	return { activeTodos, completedTodos, allTodos };
}
