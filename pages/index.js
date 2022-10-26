import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { SiFacebook } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { SiHackerrank } from "react-icons/si";
import { SiDiscord } from 'react-icons/si';
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import tasin from "../public/tasin.jpg";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [darkmode, setDarkmode] = useState(false);

  const titles = ["developer", "designer", "thinker","learner"];

  const [myTitles, setMyTitles] = useState("");
  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * titles.length);
    setMyTitles(titles[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1300);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <div className={darkmode ? "dark" : ""}>
      <Head>
        <title>Tasin Chowdhury</title>
      </Head>

      <main className="bg-gray-50 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar darkmode={darkmode} setDarkmode={setDarkmode}></Navbar>

          <div className="text-center p-10">
            <h3 className="text-4xl text-teal-600 font-medium py-2 md:text-6xl">
              Tasin Chowdhury
            </h3>
            <h3 className="text-xl py-2 md:text-2xl text-slate-500 dark:text-slate-400">
              {myTitles}
            </h3>
            <p className="text-md py-5 text-gray-600 leading-8 md:text-xl max-w-lg mx-auto">
              Enthusiast with a flair of creating elegant solutions
            </p>
          </div>
          <div className="text-4xl flex justify-center gap-6 py-3 text-gray-800">
            <Link href={`https://www.facebook.com/tasin.s.chowdhury`} passHref>
              <a target={`_blank`}>
                <SiFacebook className="cursor-pointer text-3xl dark:text-gray-300 dark:hover:text-slate-200" />
              </a>
            </Link>
            <Link
              href={`https://www.linkedin.com/in/tasin-shahriar-chowdhury-b6101a146/`}
              target="_black"
              passHref
            >
              <a target={`_blank`}>
                <SiLinkedin className="cursor-pointer text-3xl dark:text-gray-300 dark:hover:text-slate-200" />
              </a>
            </Link>
            <Link
              href={`https://discord.com/users/Tasin%20Chowdhury#2398`}
              target="_black"
              passHref
            >
              <a target={`_blank`}>
                <SiDiscord className="cursor-pointer text-3xl dark:text-gray-300 dark:hover:text-slate-200" />
              </a>
            </Link>
            <Link href={`https://github.com/tasinchowdhury26`} passHref>
              <a target={`_blank`}>
                <BsGithub className="cursor-pointer text-3xl dark:text-gray-300 dark:hover:text-slate-200" />
              </a>
            </Link>
            <Link href={`https://www.hackerrank.com/tasinchowdhury26`} passHref>
              <a target={`_blank`}>
                <SiHackerrank className="cursor-pointer text-3xl dark:text-gray-300 dark:hover:text-slate-200" />
              </a>
            </Link>
          </div>
          <div className="flex justify-center py-3">
            <Image
              src={tasin}
              alt={`tasinPhoto`}
              className="rounded-full"
              height={250}
              width={250}
              objectFit="cover"
            ></Image>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-600">
              During my undergrad journey, I have done a couple of projects,
              which <span className="text-teal-500">encourages</span> me to dive
              into real-life solutions.
            </p>
            <p className="text-md py-2 leading-8 text-gray-600">
              I offer fullstack Web Applications for your group or organization.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="shadow-lg text-center p-10 rounded-xl my-10">
              <Image src={design} alt="design" width={100} height={100}></Image>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beatiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs according to your UX requirement
              </p>
              <h3 className="text-teal-600 py-4">Design tools I use</h3>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="shadow-lg text-center p-10 rounded-xl my-10">
              <Image src={code} alt="code" width={100} height={100}></Image>
              <h3 className="text-lg font-medium pt-8 pb-2">Development</h3>
              <p className="py-2">
                Implementing the frontend and the backend with all the required
                functionalities
              </p>
              <h3 className="text-teal-600 py-4">Stack I use</h3>
              <p className="text-gray-800 py-1">Nextjs</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">Expressjs</p>
              <p className="text-gray-800 py-1">MongoDB</p>
            </div>
            <div className="shadow-lg text-center p-10 rounded-xl my-10">
              <Image
                src={consulting}
                alt="consulting"
                width={100}
                height={100}
              ></Image>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Brainstorm Ideas
              </h3>
              <p className="py-2">
                Listening to clients for making services scalable for the future
              </p>
              <h3 className="text-teal-600 py-4">Get in touch</h3>
              <p className="text-gray-800 py-1">Gmail</p>
              <p className="text-gray-800 py-1">Messenger</p>
              <p className="text-gray-800 py-1">WhatsApp</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              asperiores atque laudantium, officia maiores iste deserunt odit
              fugiat commodi necessitatibus velit nulla ex assumenda, numquam
              molestiae ipsum harum modi est?{" "}
              <span className="text-teal-500">encourages</span> me to dive into
              the real-life solutions.
            </p>
            <p className="text-md py-2 leading-8 text-gray-600">
              I Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur error reiciendis eos accusantium delectus. Ipsum vel
              fugit aspernatur pariatur consequatur veritatis cumque deleniti
              saepe temporibus blanditiis nobis accusamus, nisi natus.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              ></Image>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
