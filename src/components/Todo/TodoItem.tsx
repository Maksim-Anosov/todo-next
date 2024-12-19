"use client";

import { cn } from "@/lib/utils";
import { Check, Trash2 } from "lucide-react";
import { Button } from "../ui";
import { Todo } from "./TodosStore";

export function TodoItem({ id, text, isDone }: Todo) {
	// const handleToggle = useTodos((state) => state.handleToggle);
	// const removeTodo = useTodos((state) => state.removeTodo);
	return (
		<li
			className={cn(
				"flex justify-between items-center gap-2 transition-opacity duration-300 p-1",
				isDone && "line-through opacity-25"
			)}
			key={id}
			id={id}
		>
			<Button
				variant="outline"
				className={cn("w-12 h-9", "isDone")}
				// onClick={() => handleToggle(id)}
			>
				{isDone ? <Check /> : ""}
			</Button>
			<p className="text-3xl text-center uppercase grow">{text}</p>
			<Button
				variant="outline"
				className="remove"
				// onClick={() => removeTodo(id)}
			>
				<Trash2 size={25} />
			</Button>
		</li>
	);
}
