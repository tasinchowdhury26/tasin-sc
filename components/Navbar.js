import Link from "next/link";
import { TbMoonStars } from "react-icons/tb";
import { WiDaySunny } from "react-icons/wi";

const Navbar = ({ darkmode, setDarkmode }) => {
  return (
    <div>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl text-gray-800 dark:text-slate-200 font-burtons">
          developedbytasin
        </h1>
        <ul className="flex items-center">
          <li>
            <button onClick={() => setDarkmode(!darkmode)}>
              {darkmode ? (
                <WiDaySunny className="cursor-pointer text-2xl text-yellow-400 hover:text-yellow-200 antialiased" />
              ) : (
                <TbMoonStars className="cursor-pointer text-2xl text-blue-900 hover:text-sky-700 antialiased"/>
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
