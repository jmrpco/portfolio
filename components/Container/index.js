import Head from "next/head";
import { useContext } from "react";
import DarkModeContext from "../../contexts/darkMode";
import Navbar from "../Navbar";

export default function Container({ children }) {
  const { dark } = useContext(DarkModeContext);

  return (
    <div className={dark ? "dark" : ""}>
      <Head>
        <title>Mark Anthony Lapada</title>
        <meta name="description" content="Let's build something together!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="transition duration-300 ease-in p-3 flex justify-center dark:text-neutral-200 dark:bg-neutral-800">
        <div className="lg:w-[60%]">{children}</div>
      </main>
    </div>
  );
}
