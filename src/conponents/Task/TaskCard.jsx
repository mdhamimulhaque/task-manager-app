import {
  FaBookmark,
  FaPenToSquare,
  FaPrescriptionBottleMedical,
} from "react-icons/fa6";

const TaskCard = () => {
  return (
    <section className="py-6 sm:py-12 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
      <article className="flex bg-white rounded-sm">
        <div className="flex flex-col flex-1 p-6">
          <small className="text-blue-600 font-semibold">priority</small>
          <h3 className="flex-1 pb-2 mb-0 text-lg font-semibold">
            Title: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            dolor!{" "}
          </h3>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            perspiciatis?
          </p>
          <div className="flex gap-4 my-2">
            <span className="inline-flex justify-center items-center py-0.5 px-2.5 border-none rounded-full bg-blue-100 text-xs text-gray-800 font-medium">
              Info
            </span>
            <span className="inline-flex justify-center items-center py-0.5 px-2.5 border-none rounded-full bg-blue-100 text-xs text-gray-800 font-medium">
              Info
            </span>
            <span className="inline-flex justify-center items-center py-0.5 px-2.5 border-none rounded-full bg-blue-100 text-xs text-gray-800 font-medium">
              Info
            </span>
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
