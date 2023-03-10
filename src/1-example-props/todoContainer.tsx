import { useEffect, useState } from "react";
import { TODOS } from "../constants";
import { TodoCreateOrEdit } from "./components/todoCreateOrEdit";
import { TodoFilters } from "./components/todoFilters";
import { TodoList } from "./components/todoList";

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

  useEffect(() => {
    loadTodoList();
  }, [todoFilters]);

  return (
    <div style={{ marginTop: 50 }}>
      <TodoFilters
        todoFilters={todoFilters}
        setTodoFilters={setTodoFilters}
        openModal={() => setTodoCreateOrEdit({ open: true, todo: null })}
      />
      <TodoList
        todoList={todoList}
        openModal={(todo: any) => setTodoCreateOrEdit({ open: true, todo })}
      />
      {todoCreateOrEdit.open && (
        <TodoCreateOrEdit
          todo={todoCreateOrEdit.todo}
          onHide={(refresh: boolean) => {
            setTodoCreateOrEdit({ open: false, todo: null });
            if (refresh === true) {
              loadTodoList();
            }
          }}
        />
      )}
    </div>
  );
};
