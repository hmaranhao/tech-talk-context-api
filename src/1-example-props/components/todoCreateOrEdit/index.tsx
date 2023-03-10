import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { TODOS } from "../../../constants";

export const TodoCreateOrEdit = ({ todo, onHide }: any) => {
  const [form, setForm] = useState({
    title: "",
    status: "pending",
    ...todo,
  });

  const save = () => {
    if (!todo) {
      TODOS.push({ ...form, id: crypto.randomUUID() });
    } else {
      TODOS.reduce(
        (acc, t) =>
          acc.concat(t.id === todo.id ? Object.assign(t, { ...form }) : t),
        []
      );
    }
    onHide(true);
  };

  return (
    <Dialog open maxWidth="sm" fullWidth>
      <DialogTitle>{todo ? "Editar" : "Criar"} Tarefa</DialogTitle>
      <DialogContent>
        <TextField
          label="Título da Tarefa"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          value={form.title}
          variant="filled"
          fullWidth
        />
        {todo && (
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
        <button onClick={onHide}>cancelar</button>
        <button onClick={save}>Salvar</button>
      </DialogActions>
    </Dialog>
  );
};
