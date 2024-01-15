import { FaCirclePlus, FaPrescriptionBottleMedical } from "react-icons/fa6";

const TaskActions = ({ onModalActionClick, onDeleteAllTask }) => {
  return (
    <section className="flex gap-4 justify-end mt-2">
      <button
        type="button"
        className="relative inline-flex items-center gap-1 px-3.5 py-2 rounded border border-transparent bg-blue-600 hover:bg-blue-500 duration-300 text-sm text-white font-medium"
        onClick={onModalActionClick}
      >
        <FaCirclePlus />
        <span>Add Task</span>
      </button>
      <button
        type="button"
        className="relative inline-flex items-center gap-1 px-3.5 py-2 rounded border border-transparent bg-red-600 hover:bg-red-500 duration-300 text-sm text-white font-medium"
        onClick={onDeleteAllTask}
      >
        <FaPrescriptionBottleMedical />
        <span>Delete All</span>
      </button>
    </section>
  );
};

export default TaskActions;
