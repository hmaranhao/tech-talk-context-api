import { Grid } from "@mui/material";
import { useTodoContext } from "../../context/todoContext";
import { TodoCard } from "./components/todoCard";

export const TodoList = () => {
  const { todoList } = useTodoContext();
  return (
    <Grid container style={{ marginTop: 50 }}>
      {todoList?.map((todo: any, idx: number) => (
        <Grid item key={todo.title + idx}>
          <TodoCard todo={todo} />
        </Grid>
      ))}
    </Grid>
  );
};
