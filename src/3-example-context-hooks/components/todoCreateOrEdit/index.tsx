import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useTodoContext } from "../../context/todoContext";

export const TodoCreateOrEdit = () => {
  const {
    todoCreateOrEdit,
    updateTodo,
    addTodo,
    setTodoCreateOrEdit,
    loadTodoList,
  } = useTodoContext();
  const [form, setForm] = useState({
    title: "",
    status: "pending",
    ...todoCreateOrEdit?.todo,
  });

  const onHide = (refresh?: boolean) => {
    setTodoCreateOrEdit({ open: false, todo: null });
    if (refresh === true && loadTodoList) {
      loadTodoList();
    }
  };

  const save = () => {
    if (!todoCreateOrEdit?.todo) {
      if (addTodo) {
        addTodo(form);
      }
    } else {
      if (updateTodo) {
        updateTodo(form);
      }
    }
    onHide(true);
  };

  return (
    <Dialog open maxWidth="sm" fullWidth>
      <DialogTitle>
        {todoCreateOrEdit?.todo ? "Editar" : "Criar"} Tarefa
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Título da Tarefa"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          value={form.title}
          variant="filled"
          fullWidth
        />
        {todoCreateOrEdit?.todo && (
          <TextField
            select
            label="Status"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            fullWidth
            variant="filled"
          >
            {["pending", "inProgress", "done"].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        )}
      </DialogContent>
      <DialogActions>
        <button onClick={() => onHide()}>cancelar</button>
        <button onClick={save}>Salvar</button>
      </DialogActions>
    </Dialog>
  );
};
