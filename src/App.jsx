import { useState } from "react";
import SearchBox from "./components/SearchBox";
import TaskActions from "./components/Task/TaskActions";
import TaskCard from "./components/Task/TaskCard";
import TaskModal from "./components/Task/TaskModal";
import { defaultTaskData } from "./data/defaultTaskData";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([defaultTaskData]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  // ---> handle  & edit task
  function handleTaskEditSave(newTaskValue, isAddTask) {
    if (isAddTask) {
      setTasks([...tasks, newTaskValue]);
    } else {
      const updateTask = tasks.map((task) => {
        if (task.id === newTaskValue.id) {
          return newTaskValue;
        }
        return task;
      });
      setTasks(updateTask);
    }

    setIsModelOpen(false);
  }

  // ---> handle close task
  function handleModalClose() {
    setIsModelOpen(false);
  }

  // ---> handle edit task
  function handleEditTask(editTask) {
    setTaskToUpdate(editTask);
    setIsModelOpen(true);
  }
  return (
    <main className="p-4 bg-gray-700 h-full  ">
      {isModelOpen && (
        <section className="bg-gray-700 fixed z-20 top-0 left-0 w-full h-full">
          <TaskModal
            onTaskSave={handleTaskEditSave}
            onModalClose={handleModalClose}
            onTaskToUpdate={taskToUpdate}
          />
        </section>
      )}

      <div className="container mx-auto border-2 border-gray-400 h-screen px-4 pb-4">
        <h2 className="text-4xl py-3 px-2 text-center text-white my-4 text-semibold">
          Task manager app
        </h2>

        <SearchBox />
        <TaskActions onModalActionClick={() => setIsModelOpen(true)} />
        <section className="py-4 sm:py-6 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {tasks?.map((task) => (
            <TaskCard key={task.id} task={task} onTaskEdit={handleEditTask} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default TaskBoard;
