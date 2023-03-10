import { createContext, useContext } from "react";
import { useTodo } from "../hooks/useTodo";

interface ITodoContext {
  loadTodoList: () => void;
  addTodo: (newTodo: any) => void;
  updateTodo: (todoUpdated: any) => void;
  setTodoFilters: (todoFilters?: any) => void;
  setTodoCreateOrEdit: any;
  todoList: any[];
  todoFilters: any;
  todoCreateOrEdit: {
    open: boolean;
    todo: any;
  };
}

const TodoContext = createContext<ITodoContext | undefined>(undefined);

interface ITodoProvider {
  children: React.ReactNode;
}
export const TodoProvider = ({ children }: ITodoProvider) => {
  const {
    loadTodoList,
    setTodoFilters,
    setTodoCreateOrEdit,
    addTodo,
    updateTodo,
    todoCreateOrEdit,
    todoFilters,
    todoList,
  } = useTodo();

  return (
    <TodoContext.Provider
      value={{
        loadTodoList,
        setTodoFilters,
        setTodoCreateOrEdit,
        addTodo,
        updateTodo,
        todoCreateOrEdit,
        todoFilters,
        todoList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext) as ITodoContext;
