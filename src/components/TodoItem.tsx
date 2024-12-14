"use client";

import { cn } from "@/lib/utils";
import { Check, Trash2 } from "lucide-react";
import { Button } from "./ui";
import { Todo, useTodos } from "@/store/TodosStore";

export function TodoItem({ id, text, isDone }: Todo) {
	const handleToggle = useTodos((state) => state.handleToggle);
	const removeTodo = useTodos((state) => state.removeTodo);
	return (
		<li
			className={cn(
				"flex justify-between items-center gap-2 transition-opacity duration-300 p-1",
				isDone && "line-through opacity-50"
			)}
			key={id}
		>
			<Button variant="outline" className="w-12 h-9" onClick={() => handleToggle(id)}>
				{isDone ? <Check /> : ""}
			</Button>
			<p className="text-3xl text-center uppercase grow">{text}</p>
			<Button variant="outline" onClick={() => removeTodo(id)}>
				<Trash2 size={25} />
			</Button>
		</li>
	);
}