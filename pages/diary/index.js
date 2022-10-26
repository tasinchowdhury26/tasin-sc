import Head from "next/head";
import Link from "next/link";

const diary = () => {
  return (
    <div>
      <Head>
        <title>Diary</title>
      </Head>
      <section className="w-full h-screen flex">
        <div className="m-auto">
          <h1 >Diary is coming soon. I mean, real soon!</h1>
          <Link href={`http://localhost:3000/`} passHref>
            <span>Let me take you to the Home page</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default diary;
