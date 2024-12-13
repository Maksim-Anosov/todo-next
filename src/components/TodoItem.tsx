import { cn } from "@/lib/utils";
import { Check, Trash2 } from "lucide-react";
import { Button } from "./ui";


interface Todo {
	id: string;
	text: string;
	isDone: boolean;
  handleToggle: (id: string) => void
  revomeTodo: (id: string) => void
}

export function TodoItem({id, text, isDone, handleToggle, revomeTodo}: Todo) {
  return (
    <li className={cn("flex justify-between items-center gap-2 transition-opacity duration-300", isDone && "line-through opacity-50")} key={id}>
      <Button className="w-12 h-9" onClick={() => handleToggle(id)}>{isDone ? <Check size={25}/> : ""}</Button>
      <p className="text-3xl text-center uppercase grow">{text}</p>
      <Button onClick={() => revomeTodo(id)}><Trash2 size={25} /></Button>
    </li>
  )
}