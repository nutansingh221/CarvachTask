import { FaSearch } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import "../App.css";
import { useEffect, useState } from "react";

function Sidebar({ children }) {
  //to save the state of the side bar if it is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //if window size is greater then 640px the side bar will be opened else it will be closed
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //to toggle the state of the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="extended-sidebar">
      <div className="container p-0 flex">
        <div
          className={`absolute sm:relative ${
            isSidebarOpen ? "left-0" : "-left-56"
          }`}
        >
          <div
            className={`bg-slate-500 h-screen w-64 py-10 sticky top-0 inline-block `}
          >
            <div className="sidebar grid justify-center gap-5">
              <IoReorderThree
                className="place-self-end cursor-pointer"
                color="white"
                fontSize="2rem"
                onClick={toggleSidebar}
              />
              <div className={`flex flex-col gap-5 ${
                    isSidebarOpen ? "visible" : "invisible"
                  }`}>
                <div
                  className={`search-bar flex justify-between items-center gap-2 rounded-3xl px-3 py-2 bg-slate-200 `}
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="outline-none bg-transparent"
                  />
                  <FaSearch />
                </div>
                <ul className="links flex flex-col gap-5 items-center text-white font-medium text-xl">
                  <li>
                    <a href="/Home">Home</a>
                  </li>
                  <li>
                    <a href="/About">About</a>
                  </li>
                  <li>
                    <a href="/Contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <main className="flex-1 pl-8 sm:pl-0">{children}</main>
      </div>
    </div>
  );
}

export default Sidebar;
