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
	done: boolean;
}

export default function App() {
	const [value, setValue] = useState("");
	const [items, setItems] = useState<Todo[]>([]);

	const addTodo = () => {
		const newItem = value.trim();
		if (newItem) {
			setItems((prevItems) => [{ id: uuidv4(), text: newItem, done: false }, ...prevItems]);
			setValue("");
		}
	};

	const handleToggle = (id: string) => {
		setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
	};

	return (
		<section className="w-[75%] h-full mx-auto py-10">
			<h2 className="text-center text-5xl">TODOS</h2>
			<div className="flex gap-2 mt-4">
				<Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="What needs to be done?" className="grow" />
				<Button onClick={addTodo}>
					<Plus size={25} />
				</Button>
			</div>
			<ul className="mt-4">
				{items.map((item) => (
					<TodoItem handleToggle={handleToggle} key={item.id} {...item} />
				))}
			</ul>
		</section>
	);
}
