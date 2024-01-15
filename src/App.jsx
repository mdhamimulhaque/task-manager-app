import SearchBox from "./conponents/SearchBox";
import TaskActions from "./conponents/Task/TaskActions";
import TaskCard from "./conponents/Task/TaskCard";

const App = () => {
  return (
    <main className="p-4 bg-gray-700 h-full ">
      <div className="container mx-auto border-2 border-gray-400 h-screen px-4 pb-4">
        <h2 className="text-4xl py-3 px-2 text-center text-white my-4 text-semibold">
          Task manager app
        </h2>
        <SearchBox />
        <TaskActions />
        <TaskCard />
      </div>
    </main>
  );
};

export default App;
