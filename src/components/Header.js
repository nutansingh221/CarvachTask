import logo from "../logo.svg";
import "../App.css";
import { IoReorderThree } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

function Header({ children }) {
  let [options, setOptions] = useState(false);
  const optionsRef = useRef(null);

  const handleClickOutside = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      setOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [options]);

  return (
    <div>
      <div className="bg-slate-700">
        <nav className="nav-bar flex justify-between items-center px-5 py-3 container relative">
          <img src={logo} className="w-16" alt="" />
          <ul className="justify-between gap-5 text-white font-medium text-xl hidden sm:flex">
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
          <div ref={optionsRef}>
            <div className="cursor-pointer sm:hidden">
              <IoReorderThree
                color="white"
                fontSize="2rem"
                onClick={() => {
                  setOptions(!options);
                }}
              />
              {options ? (
                <ul className="text-white font-medium text-xl absolute right-0 top-full bg-slate-700 z-10">
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
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </nav>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Header;
