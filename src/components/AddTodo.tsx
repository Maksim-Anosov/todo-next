"use client";

import { Plus } from "lucide-react";
import { Button, Input } from "./ui";
import { useState } from "react";
import { useTodos } from "@/store/TodosStore";

export function AddTodo() {
	const [value, setValue] = useState("");
	const addTodo = useTodos((state) => state.addTodo);
	const handleAddTodo = () => {
		const newItem = value.trim();
		if (newItem) {
			addTodo(newItem);
			setValue("");
		}
	};

	return (
		<div className="flex gap-2 mt-4">
			<Input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
				placeholder="What needs to be isDone?"
				className="grow"
			/>
			<Button onClick={handleAddTodo}>
				<Plus size={25} />
			</Button>
		</div>
	);
}
