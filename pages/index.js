import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { SiFacebook } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { AiOutlineProfile } from "react-icons/ai";
import { GrSkype } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiJava } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import tasin from "../public/tasin.jpg";
import { useCallback, useContext, useEffect, useState } from "react";
import Link from "next/link";
import AppContext from "../components/contexts/AppContext";
import Footer from "../components/Footer";

export default function Home() {
  const appContext = useContext(AppContext);
  const [darkmode, setDarkmode] = [appContext.darkmode, appContext.setDarkmode];

  return (
    <div className={darkmode ? "dark" : ""}>
      <Head>
        <title>Tasin Chowdhury</title>
      </Head>
      {/* favorite colors: #1B1A17, #2D2424, #8E806A, #A2B38B */}

      <main className="bg-[#fcfaf4] px-6 md:px-20 lg:px-56 dark:bg-[#1B1A17] text-gray-800 dark:text-gray-50">
        <section className="min-h-screen">
          <Navbar darkmode={darkmode} setDarkmode={setDarkmode}></Navbar>

          <div className="block md:flex gap-5">
            <div className="w-full md:w-1/2">
              <Link href={`/diary`} passHref>
                <div className="w-full p-10 my-4 bg-white dark:bg-[#A2B38B] rounded-3xl cursor-pointer shadow-2xl shadow-gray-200/60 dark:shadow-none hover:drop-shadow-[0_10px_20px_rgba(250,229,109,0.26)]">
                  <div className="flex justify-start mb-10">
                    <Image
                      src={tasin}
                      alt={`tasinPhoto`}
                      className="rounded-full"
                      height={100}
                      width={100}
                      objectFit="cover"
                    ></Image>
                  </div>
                  <h1 className="text-4xl font-medium">about me</h1>
                  <h3 className="text-xl text-gray-500">
                    programmer, student and hustle
                  </h3>
                </div>
              </Link>
              <div className="sm:flex sm:h-80 gap-5">
                <Link href={`/resume`} passHref>
                  <div className="sm:w-1/2 p-10  my-4 bg-white dark:bg-[#8E806A] rounded-3xl flex justify-center items-center shadow-2xl shadow-gray-200/60 dark:shadow-none hover:drop-shadow-[0_10px_20px_rgba(250,229,109,0.26)] cursor-pointer">
                    <div className="grid gap-7 grid-cols-2 text-6xl font-medium">
                      <Link
                        href={`https://www.linkedin.com/in/tasin-shahriar-chowdhury-b6101a146/`}
                        target="_black"
                        passHref
                      >
                        <a target={`_blank`}>
                          <SiMongodb className="cursor-pointer hover:text-sky-700 dark:hover:text-sky-600" />
                        </a>
                      </Link>
                      <Link
                        href={`https://discord.com/users/Tasin%20Chowdhury#2398`}
                        target="_black"
                        passHref
                      >
                        <a target={`_blank`}>
                          <SiExpress className="cursor-pointer hover:text-indigo-500" />
                        </a>
                      </Link>
                      <Link
                        href={`https://github.com/tasinchowdhury26`}
                        passHref
                      >
                        <a target={`_blank`}>
                          <SiReact className="cursor-pointer hover:text-gray-800 dark:hover:text-gray-300" />
                        </a>
                      </Link>
                      <Link
                        href={`https://www.hackerrank.com/tasinchowdhury26`}
                        passHref
                      >
                        <a target={`_blank`}>
                          <SiNodedotjs className="cursor-pointer hover:text-green-600 dark:hover:text-green-500" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </Link>
                <Link href={`https://github.com/tasinchowdhury26`} passHref>
                  <a
                    target={`_blank`}
                    className="sm:w-1/2 p-10 md:min-w-1/2 md:min-w-1/2  my-4 text-5xl text-gray-600 dark:text-gray-700 flex justify-center items-center bg-white shadow-2xl shadow-gray-200/60 dark:shadow-none dark:bg-[#A19882] rounded-3xl hover:drop-shadow-[0_10px_20px_rgba(250,229,109,0.26)]"
                  >
                    <BsGithub className="cursor-pointer text-8xl hover:text-gray-800 dark:hover:text-gray-300" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 sm:flex sm:flex-col md:flex-col-reverse">
              <Link href={`/diary`} passHref>
                <div className="w-full p-10 my-4 bg-white dark:bg-[#76a3b8] rounded-3xl cursor-pointer shadow-2xl shadow-gray-200/60 dark:shadow-none hover:drop-shadow-[0_10px_20px_rgba(250,229,109,0.26)]">
                  <h1 className="text-3xl font-medium">area of expertise</h1>
                  <h3 className="text-xl text-gray-500">
                    specialized in front-end development
                  </h3>
                  <div className="flex justify-start mt-10 py-5 gap-5">
                    <SiMongodb className="text-6xl text-green-600" />
                    <SiExpress className="text-6xl text-gray-300" />
                    <SiReact className="text-6xl text-green-600" />
                    <SiNodedotjs className="text-6xl text-green-600" />
                  </div>
                </div>
              </Link>
              <div className="sm:flex sm:h-80 gap-5">
                <Link href={`/resume`} passHref>
                  <div className="sm:w-1/2 p-10 my-4 bg-white dark:bg-[#8E806A] rounded-3xl flex justify-start items-end shadow-2xl shadow-gray-200/60 dark:shadow-none hover:drop-shadow-[0_10px_20px_rgba(250,229,109,0.26)] cursor-pointer">
                    <div className="font-medium flex items-center gap-3 sm:block">
                      <AiOutlineProfile className="text-6xl text-yellow-500" />
                      <h2 className="text-2xl sm:text-xl">See My Resume</h2>
                    </div>
                  </div>
                </Link>
                <div className="sm:w-1/2 p-10 my-4 text-5xl text-gray-600 dark:text-gray-700 flex justify-center items-center bg-white shadow-2xl shadow-gray-200/60 dark:shadow-none dark:bg-[#A19882] rounded-3xl hover:drop-shadow-[0_10px_20px_rgba(250,229,109,0.26)]">
                  <div className="grid gap-7 grid-cols-2">
                    <Link
                      href={`https://www.linkedin.com/in/tasin-shahriar-chowdhury-b6101a146/`}
                      target="_black"
                      passHref
                    >
                      <a target={`_blank`}>
                        <SiLinkedin className="cursor-pointer hover:text-sky-700 dark:hover:text-sky-600" />
                      </a>
                    </Link>
                    <Link
                      href={`https://discord.com/users/Tasin%20Chowdhury#2398`}
                      target="_black"
                      passHref
                    >
                      <a target={`_blank`}>
                        <SiDiscord className="cursor-pointer hover:text-indigo-500" />
                      </a>
                    </Link>
                    <Link href={`https://github.com/tasinchowdhury26`} passHref>
                      <a target={`_blank`}>
                        <BsGithub className="cursor-pointer hover:text-gray-800 dark:hover:text-gray-300" />
                      </a>
                    </Link>
                    <Link
                      href={`https://www.hackerrank.com/tasinchowdhury26`}
                      passHref
                    >
                      <a target={`_blank`}>
                        <FaHackerrank className="cursor-pointer hover:text-green-600 dark:hover:text-green-500" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block sm:flex gap-5">
            <Link href={`/projects`} passHref>
              <div className="w-full sm:w-1/2 p-10 my-4 bg-white dark:bg-[#A2B38B] rounded-3xl cursor-pointer shadow-2xl shadow-gray-200/60 dark:shadow-none hover:drop-shadow-[0_10px_20px_rgba(250,229,109,0.26)]">
                <div className="flex justify-start mb-10">
                  <h2 className="text-4xl">Works</h2>
                </div>
                <h1 className="text-4xl font-medium">Have a quick look</h1>
                <h3 className="text-xl text-gray-500">at my projects</h3>
              </div>
            </Link>
            <div className="w-full sm:w-1/2 p-10 my-4 bg-white dark:bg-[#A2B38B] rounded-3xl cursor-pointer shadow-2xl shadow-gray-200/60 dark:shadow-none hover:drop-shadow-[0_10px_20px_rgba(250,229,109,0.26)]">
              <div className="flex justify-start mb-10">
                <h2 className="text-6xl">Projects</h2>
              </div>
              <h1 className="text-4xl font-medium">Hi, I&apos;m Tasin</h1>
              <h3 className="text-xl text-gray-500">
                A full-stack Web Developer
              </h3>
            </div>
          </div>
        </section>

        <div className="text-4xl flex justify-center gap-6 py-3 text-gray-500">
          <Link href={`https://www.facebook.com/tasin.s.chowdhury`} passHref>
            <a target={`_blank`}>
              <SiFacebook className="cursor-pointer text-3xl hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500" />
            </a>
          </Link>
          <Link
            href={`https://www.linkedin.com/in/tasin-shahriar-chowdhury-b6101a146/`}
            target="_black"
            passHref
          >
            <a target={`_blank`}>
              <SiLinkedin className="cursor-pointer text-3xl hover:text-sky-700 dark:text-gray-400 dark:hover:text-sky-600" />
            </a>
          </Link>
          <Link
            href={`https://discord.com/users/Tasin%20Chowdhury#2398`}
            target="_black"
            passHref
          >
            <a target={`_blank`}>
              <SiDiscord className="cursor-pointer text-3xl hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400" />
            </a>
          </Link>
          <Link href={`https://github.com/tasinchowdhury26`} passHref>
            <a target={`_blank`}>
              <BsGithub className="cursor-pointer text-3xl hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300" />
            </a>
          </Link>
          <Link href={`https://www.hackerrank.com/tasinchowdhury26`} passHref>
            <a target={`_blank`}>
              <FaHackerrank className="cursor-pointer text-3xl hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500" />
            </a>
          </Link>
          <Link href={`https://join.skype.com/invite/v6iRGTohZgId`} passHref>
            <a target={`_blank`}>
              <GrSkype className="cursor-pointer text-3xl hover:text-blue-500 dark:text-gray-400 dark:hover:text-sky-400" />
            </a>
          </Link>
        </div>
        <Footer></Footer>
      </main>
    </div>
  );
}
