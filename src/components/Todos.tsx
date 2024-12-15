"use client";

import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
	TodoCounter,
	TodoList,
} from "@/components";
import { useFilteredTodos } from "../hooks/useFiltredTodos";

export function Todo() {
	const { activeTodos, completedTodos, allTodos } = useFilteredTodos();
	return (
		<Tabs
			defaultValue="all"
			className="overflow-hidden grow flex flex-col justify-between"
		>
			<TabsContent className="overflow-y-auto" value="all">
				<TodoList todos={allTodos} />
			</TabsContent>
			<TabsContent className="overflow-y-auto" value="active">
				<TodoList todos={activeTodos} />
			</TabsContent>
			<TabsContent className="overflow-y-auto" value="completed">
				<TodoList todos={completedTodos} />
			</TabsContent>
			<div className="p-1 flex justify-between">
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
			</div>
		</Tabs>
	);
}
