import { act } from 'react';
import { useTodos } from './TodosStore';
import { renderHook } from '@testing-library/react';


describe('useTodos', () => {
  it('should initialize with an empty todos array', () => {
    const { result } = renderHook(() => useTodos());
    expect(result.current.todos).toEqual([]);
  });

  it('should add a new todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('New Todo');
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0]).toEqual(expect.objectContaining({
      text: 'New Todo',
      isDone: false,
    }));
  });

  it('should toggle todo state', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Todo to toggle');
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.handleToggle(todoId);
    });

    expect(result.current.todos[0].isDone).toBe(true);

    act(() => {
      result.current.handleToggle(todoId);
    });

    expect(result.current.todos[0].isDone).toBe(false);
  });

  it('should remove a todo', () => {
    const { result } = renderHook(() => useTodos());

    result.current.todos = [];

    act(() => {
      result.current.addTodo('Todo to remove');
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.removeTodo(todoId);
    });

    expect(result.current.todos).toHaveLength(0);
  });

  it('should clear completed todos', () => {
    const { result } = renderHook(() => useTodos());
  
    act(() => {
      result.current.addTodo('Completed Todo 1');
    });
  
    act(() => {
      result.current.addTodo('Completed Todo 2');
    });
  
    act(() => {
      result.current.handleToggle(result.current.todos[0].id);
    });
  
    act(() => {
      result.current.clearCompleted();
    });
  
    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe('Completed Todo 2');
  });

  it('should change todos list', () => {
    const { result } = renderHook(() => useTodos());

    const newTodos = [
      { id: '1', text: 'New Todo 1', isDone: false },
      { id: '2', text: 'New Todo 2', isDone: true },
    ];

    act(() => {
      result.current.changeTodo(newTodos);
    });

    expect(result.current.todos).toEqual(newTodos);
  });
})