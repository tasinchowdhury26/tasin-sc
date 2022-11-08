import Head from "next/head";
import { useContext } from "react";
import Link from "next/link";
import AppContext from "../../components/contexts/AppContext";
import Navbar from "../../components/Navbar";

const Diary = () => {
  const appContext = useContext(AppContext);
  const [darkmode, setDarkmode] = [appContext.darkmode, appContext.setDarkmode];

  return (
    <div className={darkmode ? `dark` : ``}>
      <Head>
        <title>Diary</title>
      </Head>
      <main className="bg-gray-50 px-10 md:px-20 lg:px-40 dark:bg-gray-900 h-screen">
        <Navbar></Navbar>
        <div className="flex text-2xl text-gray-600 dark:text-gray-300">
          <div className="m-auto">
            <h1>Diary is coming soon. I mean, real soon!</h1>
            <Link href={`http://localhost:3000/`} passHref>
              <span>
                Let me take you to the{" "}
                <span className="font-bold cursor-pointer">Home page</span>
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Diary;
