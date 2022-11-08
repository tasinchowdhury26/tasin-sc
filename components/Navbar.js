import Link from "next/link";
import { useCallback, useContext, useEffect, useState } from "react";
import { TbMoonStars } from "react-icons/tb";
import { WiDaySunny } from "react-icons/wi";
import AppContext from "./contexts/AppContext";

const Navbar = () => {
  const appContext = useContext(AppContext);
  const [darkmode, setDarkmode] = [appContext.darkmode, appContext.setDarkmode];

  const titles = ["Hi", "I", "am", "Tasin"];
  const [myTitles, setMyTitles] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      titles.forEach(title => {
        setMyTitles(title)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <nav className="py-5 flex justify-between">
        <Link href={`http://localhost:3000/`} passHref>
          <h1 className="text-xl text-gray-800 dark:text-slate-200 font-prestige cursor-pointer">
            {
              myTitles
            }
          </h1>
        </Link>

        <ul className="flex items-center">
          <li>
            <button onClick={() => setDarkmode(!darkmode)}>
              {darkmode ? (
                <WiDaySunny className="cursor-pointer text-3xl text-yellow-400 dark:hover:text-yellow-200 antialiased" />
              ) : (
                <TbMoonStars className="cursor-pointer text-3xl text-blue-900 hover:text-sky-700 antialiased" />
              )}
            </button>
          </li>
          <li>
            <Link href={`/diary`} passHref>
              <span className="bg-gradient-to-r from-cyan-400 to-teal-500 text-white px-4 py-2 ml-3 rounded-md cursor-pointer">
                Diary
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
