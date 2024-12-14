'use client'

import { useTodos } from "@/store/TodosStore";

export function TodoCounter() {
  const leftToDos = useTodos((state) => state.todos.filter((todo) => !todo.isDone).length);
  
  return (
    <div className="outline outline-1 outline-zinc-200 p-1 max-w-max rounded-md">
      <p className="text-lg uppercase">Left to do: {leftToDos}</p>
    </div>
  )
}