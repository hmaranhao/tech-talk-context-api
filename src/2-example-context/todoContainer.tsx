import { useEffect, useState } from "react";
import { TODOS } from "../constants";
import { TodoCreateOrEdit } from "./components/todoCreateOrEdit";
import { TodoFilters } from "./components/todoFilters";
import { TodoList } from "./components/todoList";
import { TodoContext } from "./context/todoContext";

export const TodoContainer = () => {
  const [todoList, setTodoList] = useState<any>([]);
  const [todoFilters, setTodoFilters] = useState({
    title: "",
  });
  const [todoCreateOrEdit, setTodoCreateOrEdit] = useState({
    open: false,
    todo: null,
  });

  const loadTodoList = () => {
    const newTodos = TODOS.filter((todo) =>
      todo.title.toUpperCase().includes(todoFilters.title.toUpperCase())
    );

    setTodoList(newTodos);
  };

  const addTodo = (newTodo: any) => {
    TODOS.push({ ...newTodo, id: crypto.randomUUID() });
  };

  const updateTodo = (todoUpdated: any) => {
    TODOS.reduce(
      (acc, t) =>
        acc.concat(
          t.id === todoUpdated.id ? Object.assign(t, { ...todoUpdated }) : t
        ),
      []
    );
  };

  useEffect(() => {
    loadTodoList();
  }, [todoFilters]);

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
      <div style={{ marginTop: 50 }}>
        <TodoFilters />
        <TodoList />
        {todoCreateOrEdit.open && <TodoCreateOrEdit />}
      </div>
    </TodoContext.Provider>
  );
};
