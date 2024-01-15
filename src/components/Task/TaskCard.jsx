/* eslint-disable react/prop-types */
import {
  FaBookmark,
  FaPenToSquare,
  FaPrescriptionBottleMedical,
} from "react-icons/fa6";

const TaskCard = ({ task }) => {
  const { title, description, tags, priority, isFavorite } = task;
  return (
    <section className="py-4 sm:py-6 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
      <article className="flex bg-white rounded-sm">
        <div className="flex flex-col flex-1 p-6">
          <small className="text-blue-600 font-semibold">{priority}</small>
          <h3 className="flex-1 pb-2 mb-0 text-lg font-semibold">{title}</h3>

          <p>{description}</p>
          <div className="flex gap-4 mb-2 mt-3">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="inline-flex justify-center items-center py-0.5 px-2.5 border-none rounded-full bg-blue-100 text-xs text-gray-800 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 cursor-pointer text-lg">
            <FaBookmark className="text-yellow-400" />
            <div className="flex gap-2 ">
              <FaPenToSquare className="text-blue-600 hover:text-blue-500" />
              <FaPrescriptionBottleMedical className="text-red-600 hover:text-red-500" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default TaskCard;
