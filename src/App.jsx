import { useState } from "react";
import SearchBox from "./components/SearchBox";
import TaskActions from "./components/Task/TaskActions";
import TaskCard from "./components/Task/TaskCard";
import { defaultTaskData } from "./data/defaultTaskData";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([defaultTaskData]);

  return (
    <main className="p-4 bg-gray-700 h-full ">
      <div className="container mx-auto border-2 border-gray-400 h-screen px-4 pb-4">
        <h2 className="text-4xl py-3 px-2 text-center text-white my-4 text-semibold">
          Task manager app
        </h2>
        <SearchBox />
        <TaskActions />
        {tasks?.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </main>
  );
};

export default TaskBoard;
