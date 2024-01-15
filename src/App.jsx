import { useState } from "react";
import SearchBox from "./components/SearchBox";
import TaskActions from "./components/Task/TaskActions";
import TaskCard from "./components/Task/TaskCard";
import TaskModal from "./components/Task/TaskModal";
import { defaultTaskData } from "./data/defaultTaskData";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([defaultTaskData]);

  function handleAddTask() {
    console.log("clicked");
  }

  return (
    <main className="p-4 bg-gray-700 h-full  ">
      <section className="bg-gray-700 fixed z-20 top-0 left-0 w-full h-full">
        <TaskModal />
      </section>
      <div className="container mx-auto border-2 border-gray-400 h-screen px-4 pb-4">
        <h2 className="text-4xl py-3 px-2 text-center text-white my-4 text-semibold">
          Task manager app
        </h2>

        <SearchBox />
        <TaskActions onAddTask={handleAddTask} />
        {tasks?.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </main>
  );
};

export default TaskBoard;
