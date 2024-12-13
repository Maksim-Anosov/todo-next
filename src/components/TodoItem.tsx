import { cn } from "@/lib/utils";

interface Todo {
	id: string;
	text: string;
	done: boolean;
  handleToggle: (id: string) => void
}

export function TodoItem({id, text, done, handleToggle}: Todo) {
  return (
    <li className={cn("flex justify-between items-center gap-2", done && "line-through opacity-25")} key={id}>
      <p>{text}</p>
      <input type="checkbox" checked={done} onChange={() => handleToggle(id)}/>
    </li>
  )
}