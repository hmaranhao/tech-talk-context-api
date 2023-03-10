import { createContext } from "react";

interface ITodoContext {
  loadTodoList?: () => void;
  addTodo?: (newTodo: any) => void;
  updateTodo?: (todoUpdated: any) => void;
  setTodoFilters?: (todoFilters?: any) => void;
  setTodoCreateOrEdit?: any;
  todoList?: any[];
  todoFilters?: any;
  todoCreateOrEdit?: {
    open: boolean;
    todo: any;
  };
}

const initialState: ITodoContext = {};

export const TodoContext = createContext(initialState);
