"use client";

import { Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTodos } from "./TodosStore";
import { Button, Input } from "../ui";

export function AddTodo() {
	const ref = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState("");
	const addTodo = useTodos((state) => state.addTodo);
	const handleAddTodo = () => {
		const newItem = value.trim();
		if (newItem) {
			addTodo(newItem);
			setValue("");
		}
	};

	useEffect(() => {
		ref.current?.focus();
	}, []);

	return (
		<div className="flex gap-2 mt-4 p-1">
			<Input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
				placeholder="What needs to be isDone?"
				className="grow uppercase"
				ref={ref}
			/>
			<Button variant="outline" onClick={handleAddTodo}>
				<Plus size={25} />
			</Button>
		</div>
	);
}
