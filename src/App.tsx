import { useState } from "react";
import { TodoContainer as Example1 } from "./1-example-props/todoContainer";
import { TodoContainer as Example2 } from "./2-example-context/todoContainer";
import { TodoContainer as Example3 } from "./3-example-context-hooks/todoContainer";
import "./App.css";

function App() {
  const [tab, setTab] = useState(0);
  return (
    <div className="App">
      <h1>Tech Talk Context API</h1>
      <center>
        <button
          onClick={() => setTab(0)}
          style={{ background: tab === 0 ? "#002fff" : "" }}
        >
          Exemplo com Props
        </button>
        <button
          onClick={() => setTab(1)}
          style={{ background: tab === 1 ? "#002fff" : "" }}
        >
          Exemplo com Context API
        </button>
        <button
          onClick={() => setTab(2)}
          style={{ background: tab === 2 ? "#002fff" : "" }}
        >
          Exemplo com Context API e Hooks
        </button>
      </center>
      {tab === 0 && <Example1 />}
      {tab === 1 && <Example2 />}
      {tab === 2 && <Example3 />}
    </div>
  );
}

export default App;
