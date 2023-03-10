import { TodoCreateOrEdit } from "./components/todoCreateOrEdit";
import { TodoFilters } from "./components/todoFilters";
import { TodoList } from "./components/todoList";
import { TodoProvider, useTodoContext } from "./context/todoContext";

const _TodoContainer = () => {
  const { todoCreateOrEdit } = useTodoContext();
  return (
    <div style={{ marginTop: 50 }}>
      <TodoFilters />
      <TodoList />
      {todoCreateOrEdit.open && <TodoCreateOrEdit />}
    </div>
  );
};

export const TodoContainer = () => {
  return (
    <TodoProvider>
      <_TodoContainer />
    </TodoProvider>
  );
};
