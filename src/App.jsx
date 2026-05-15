import { useState } from "react";
import Section_1 from "./components/section_1";
import Section_2 from "./components/section_2";

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="flex flex-row w-full min-h-screen">
      <Section_1 tasks={tasks} setTasks={setTasks} />
      <Section_2 tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App