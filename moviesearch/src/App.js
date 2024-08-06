import "./App.css";
import CategorieLoader from "./components/CategorieLoader";
import { useState } from "react";
import Discover from "./components/Pages/Discover";
import Watched from "./components/Pages/Watched";
import WatchLater from "./components/Pages/WatchLater";

function App() {
  const pages = ["Discover", "Watched", "Watch later"];
  const [selected, setSelected] = useState(pages[0]);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <>
      <CategorieLoader />
      <div className="bg-slate-900 container mx-auto p-4 ">
        <div className="flex justify-center mb-6 text-white">
          <div className="grid grid-cols-3 divide-x w-full p-2 border bg-slate-800 border-gray-800 rounded-lg  text-white">
            {pages.map((item) => (
              <div
                key={item}
                className={`cursor-pointer p-2 rounded-sm  ${
                  selected === item ? "bg-cyan-600" : "bg-slate-800"
                }`}
                onClick={() => handleSelect(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {selected === pages[0] && <Discover />}
        {selected === pages[1] && <Watched />}
        {selected === pages[2] && <WatchLater />}
      </div>
    </>
  );
}

export default App;
