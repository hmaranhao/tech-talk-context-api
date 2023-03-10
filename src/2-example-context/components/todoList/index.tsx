import { Grid } from "@mui/material";
import { useContext } from "react";
import { TodoContext } from "../../context/todoContext";
import { TodoCard } from "./components/todoCard";

export const TodoList = () => {
  const { todoList } = useContext(TodoContext);
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
