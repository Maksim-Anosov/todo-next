import { AddTodo, TodoList } from "@/components";
import { TodoCounter } from "@/components/TodoCounter";

export default function App() {
	return (
		<section className="w-[75%] h-full mx-auto">
			<h2 className="text-center text-5xl">TODOS</h2>
			<AddTodo />
			<TodoList />
			<footer>
				<TodoCounter />
			</footer>
		</section>
	);
}
