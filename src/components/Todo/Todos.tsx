"use client";

import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "../ui";
import { AddTodo } from "./AddTodo";
import { useFilteredTodos } from "./hooks/useFiltredTodos";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { useTodos } from "./TodosStore";

export function Todos() {
	const { activeTodos, completedTodos, allTodos } = useFilteredTodos();
	const clearCompleted = useTodos((state) => state.clearCompleted);
	return (
		<>
			<AddTodo />
			<Tabs
				defaultValue="all"
				className="overflow-hidden grow flex flex-col justify-between"
			>
				<TabsContent className="overflow-y-auto" value="all">
					<TodoList todos={allTodos} value="all" />
				</TabsContent>
				<TabsContent className="overflow-y-auto" value="active">
					<TodoList todos={activeTodos} />
				</TabsContent>
				<TabsContent className="overflow-y-auto" value="completed">
					<TodoList todos={completedTodos} />
				</TabsContent>
				<div className="p-1 flex flex-col gap-1 justify-between md:flex-row">
					<TodoCounter />
					<TabsList>
						<TabsTrigger className="uppercase" value="all">
							All
						</TabsTrigger>
						<TabsTrigger className="uppercase" value="active">
							Active
						</TabsTrigger>
						<TabsTrigger className="uppercase" value="completed">
							Completed
						</TabsTrigger>
					</TabsList>
					<Button onClick={clearCompleted} className="uppercase" variant="outline">Clear completed</Button>
				</div>
			</Tabs>
		</>
	);
}
