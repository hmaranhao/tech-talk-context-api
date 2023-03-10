import { Grid } from "@mui/material";
import { TodoCard } from "./components/todoCard";

export const TodoList = ({ todoList, openModal }: any) => {
  return (
    <Grid container style={{ marginTop: 50 }}>
      {todoList?.map((todo: any, idx: number) => (
        <Grid item key={todo.title + idx}>
          <TodoCard todo={todo} openModal={openModal} />
        </Grid>
      ))}
    </Grid>
  );
};
