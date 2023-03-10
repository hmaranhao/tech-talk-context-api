import { Card, CardActionArea, CardContent, CardHeader } from "@mui/material";
import { useTodoContext } from "../../../context/todoContext";

export const TodoCard = ({ todo }: any) => {
  const { setTodoCreateOrEdit } = useTodoContext();
  return (
    <CardActionArea onClick={() => setTodoCreateOrEdit({ open: true, todo })}>
      <Card
        style={{
          width: 300,
          height: 200,
          backgroundColor: "#2bff00c8",
          margin: 5,
        }}
      >
        <CardHeader title={todo.title} style={{ height: 100 }} />
        <CardContent>
          <p>
            <b>Status: </b>
            {todo.status}
          </p>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};
