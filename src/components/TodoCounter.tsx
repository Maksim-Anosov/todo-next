'use client'

import { useTodos } from "@/store/TodosStore";

export function TodoCounter() {
  const leftToDos = useTodos((state) => state.todos.filter((todo) => !todo.isDone).length);
  
  return (
    <div className="outline outline-1 outline-zinc-200 rounded-md p-1 flex justify-center items-center">
      <p className="uppercase">Left to do: {leftToDos}</p>
    </div>
  )
}