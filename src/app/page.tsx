'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TodoItem } from "@/components/TodoItem";

interface Todo {
	id: string;
	text: string;
	isDone: boolean;
}

export default function App() {
	const [value, setValue] = useState("");
	const [items, setItems] = useState<Todo[]>([]);

	const addTodo = () => {
		const newItem = value.trim();
		if (newItem) {
			setItems((prevItems) => [{ id: uuidv4(), text: newItem, isDone: false }, ...prevItems]);
			setValue("");
		}
	};

	const handleToggle = (id: string) => {
		// setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item)));
		const newItems = [...items];
		const item = newItems.find((item) => item.id === id);
		if (item) {
			item.isDone = !item.isDone;
			setItems(newItems);
		}
	};

	const removeTodo = (id: string) => {
		setItems((prevItems) => prevItems.filter((item) => item.id !== id));
	}

	return (
		<section className="w-[75%] h-full mx-auto">
			<h2 className="text-center text-5xl">TODOS</h2>
			<div className="flex gap-2 mt-4">
				<Input value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addTodo()} placeholder="What needs to be isDone?" className="grow" />
				<Button onClick={addTodo}>
					<Plus size={25} />
				</Button>
			</div>
			<ul className="mt-4 overflow-y-auto flex flex-col gap-4 h-[50vh]">
				{items.map((item) => (
					<TodoItem revomeTodo={removeTodo} handleToggle={handleToggle} key={item.id} {...item} />
				))}
			</ul>
		</section>
	);
}
