"use client";

import { TodoItem } from "./TodoItem";
import { Todo, useTodos } from "./TodosStore";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

interface TodoListProps {
	todos: Todo[];
	value?: string;
}

export function TodoList({ todos, value }: TodoListProps) {
	const changeTodos = useTodos((state) => state.changeTodo);

	const handleDragEnd = (e: DragEndEvent) => {
		const { active, over } = e;

		if (over && active.id !== over.id) {
			const oldIndex = todos.findIndex((todo) => todo.id === active.id);
			const newIndex = todos.findIndex((todo) => todo.id === over.id);
			changeTodos(arrayMove(todos, oldIndex, newIndex));
		}
	};

	return (
		<ul className="mt-4 overflow-y-auto flex flex-col gap-4">
			<DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd}>
				<SortableContext items={todos}>
					{todos.map((todo) => (
						<TodoItem
							key={todo.id}
							id={todo.id}
							text={todo.text}
							isDone={todo.isDone}
							value={value}
						/>
					))}
				</SortableContext>
			</DndContext>
		</ul>
	);
}
