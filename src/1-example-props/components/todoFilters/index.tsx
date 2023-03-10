import { TextField } from "@mui/material";
import { useState } from "react";

export const TodoFilters = ({
  todoFilters,
  setTodoFilters,
  openModal,
}: any) => {
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
      <button onClick={() => setTodoFilters(form)} style={{ marginLeft: 10 }}>
        buscar
      </button>
      <button onClick={openModal} style={{ marginLeft: 10 }}>
        Criar Novo
      </button>
    </div>
  );
};
