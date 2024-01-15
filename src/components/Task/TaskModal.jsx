import { useState } from "react";

const TaskModal = ({ onTaskSave, onModalClose }) => {
  const [task, setTask] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavorite: false,
  });

  function handleAddTaskValue(e) {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "tags") {
      value = value.split(",");
    }

    setTask({
      ...task,
      [name]: value,
    });
  }

  return (
    <form className="mx-auto w-full max-w-[740px] rounded-xl border border-gray-400 bg-[#191D26] p-9 max-md:px-4 lg:my-10 lg:p-12">
      <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
        Add New Task
      </h2>

      <div className="space-y-5 text-white">
        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="title">Title</label>
          <input
            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
            type="text"
            name="title"
            id="title"
            value={task.title}
            onChange={handleAddTaskValue}
            required
          />
        </div>

        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
            type="text"
            name="description"
            id="description"
            value={task.description}
            onChange={handleAddTaskValue}
            required
          ></textarea>
        </div>

        <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="tags">Tags</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="tags"
              id="tags"
              value={task.tags}
              onChange={handleAddTaskValue}
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="priority">Priority</label>
            <select
              className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
              name="priority"
              id="priority"
              value={task.priority}
              onChange={handleAddTaskValue}
              required
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          type="button"
          className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:bg-red-500"
          onClick={onModalClose}
        >
          Close
        </button>
        <button
          type="button"
          className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:bg-blue-500"
          onClick={() => onTaskSave(task)}
        >
          Create new Task
        </button>
      </div>
    </form>
  );
};

export default TaskModal;
