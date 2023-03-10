import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import { TodoContext } from "../../context/todoContext";

export const TodoFilters = () => {
  const { todoFilters, setTodoFilters, setTodoCreateOrEdit } =
    useContext(TodoContext);
  const [form, setForm] = useState({ title: "", ...todoFilters });
  return (
    <div>
      <TextField
        label="Título da Tarefa"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        value={form.title}
        variant="filled"
        size="small"
      />
      <button
        onClick={() => setTodoFilters && setTodoFilters(form)}
        style={{ marginLeft: 10 }}
      >
        buscar
      </button>
      <button
        onClick={() => setTodoCreateOrEdit({ open: true, todo: null })}
        style={{ marginLeft: 10 }}
      >
        Criar Novo
      </button>
    </div>
  );
};
