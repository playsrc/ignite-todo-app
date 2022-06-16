import { useState } from "react";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { TaskSubmitForm, TaskTypes } from "./components/TaskSubmitForm";

import styles from "./App.module.scss";

export function App() {
  const [tasks, setTasks] = useState<TaskTypes[]>([]);

  return (
    <>
      <Header />
      <div className={styles.content}>
        <TaskSubmitForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}
