"use client";

import { cn } from "@/shared/lib/utils";
import { Check, Grip, Trash2 } from "lucide-react";
import { Button } from "@/shared/ui";
import { Todo, useTodos } from "../model/TodosStore";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

interface TodoListProps extends Todo {
  value?: string;
}

export function TodoItem({ id, text, isDone, value }: TodoListProps) {
  const handleToggle = useTodos((state) => state.handleToggle);
  const removeTodo = useTodos((state) => state.removeTodo);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const [isDragging, setIsDragging] = useState(false);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: isDragging ? "grabbing" : "default",
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <li
      key={id}
      ref={setNodeRef}
      id={id}
      style={style}
      className={cn(
        "flex justify-between items-center gap-2 transition-opacity duration-300 p-1",
        isDone && "line-through opacity-25"
      )}
    >
      <Button
        variant="outline"
        className="w-12 h-9"
        onClick={() => handleToggle(id)}
      >
        {isDone ? <Check /> : ""}
      </Button>
      <p
        className={cn("text-3xl text-center uppercase grow", value && "pl-14")}
      >
        {text}
      </p>
      <Button variant="outline" onClick={() => removeTodo(id)}>
        <Trash2 size={25} />
      </Button>
      {value && (
        <Button
          {...attributes}
          {...listeners}
          onPointerDown={handleMouseDown}
          onPointerUp={handleMouseUp}
          variant="outline"
          className={isDragging ? "cursor-grabbing" : "cursor-grab"}
        >
          <Grip size={25} />
        </Button>
      )}
    </li>
  );
}
