import { useContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import {
  BsGithub,
  BsLinkedin,
  BsMoon,
  BsSun,
  BsToggleOff,
  BsToggleOn,
} from "react-icons/bs";
import DarkModeContext from "../../contexts/darkMode";

export default function Navbar() {
  const { dark, setDark } = useContext(DarkModeContext);
  const [nav, setNav] = useState(false);
  const navLinks = [
    { id: 1, title: "About", path: "#about" },
    { id: 2, title: "History", path: "#history" },
    { id: 3, title: "Tools", path: "#tools" },
    { id: 4, title: "Projects", path: "#projects" },
  ];
  const profileLinks = [
    {
      id: 1,
      icon: <BsLinkedin />,
      path: "https://www.linkedin.com/in/mark-lapada-44647a1b1/",
    },
    { id: 2, icon: <BsGithub />, path: "https://github.com/aeschyllus" },
  ];

  return (
    <nav className="transition duration-300 ease-in fixed w-full lg:grid place-items-center dark:text-neutral-200">
      <div className="transition duration-300 ease-in lg:w-[70%] bg-amber-50 dark:bg-neutral-800 border-b border-neutral-500 dark:border-neutral-200 h-14 py-3 px-5">
        <div className="flex items-center justify-between h-full">
          <h1
            className="uppercase tracking-widest font-bold text-xl cursor-pointer"
            onClick={() => {
              window.scrollTo(0, 0);
              setNav(false);
            }}
          >
            _ML
          </h1>

          <button className="md:hidden" onClick={() => setNav(!nav)}>
            <BiMenu className="text-2xl" />
          </button>

          <ul className="hidden md:flex space-x-5">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                setNav(false);
              }}
            >
              Home
            </button>

            {navLinks.map((navLink) => (
              <a key={navLink.id} href={navLink.path} className="block">
                <li onClick={() => setNav(false)}>{navLink.title}</li>
              </a>
            ))}

            <div className="flex items-center space-x-3">
              <BsSun />
              <button className="text-xl" onClick={() => setDark(!dark)}>
                {dark ? <BsToggleOn /> : <BsToggleOff />}
              </button>
              <BsMoon />
            </div>
          </ul>
        </div>
      </div>

      <div
        className={
          nav ? "transition duration-300 bg-black/70 h-screen md:hidden" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed bg-amber-50 dark:bg-neutral-800 dark:text-neutral-200 h-screen w-[65%] left-0 ease-in duration-300"
              : "fixed bg-amber-50 dark:bg-neutral-800 dark:text-neutral-200 h-screen w-[65%] left-[-100%] ease-in duration-300"
          }
        >
          <div className="p-5 flex flex-col justify-between h-full">
            <ul className="space-y-3">
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  setNav(false);
                }}
              >
                Home
              </button>
              {navLinks.map((navLink) => (
                <a key={navLink.id} href={navLink.path} className="block">
                  <li onClick={() => setNav(false)}>{navLink.title}</li>
                </a>
              ))}
              <div className="flex items-center space-x-3">
                <BsSun />
                <button className="text-xl" onClick={() => setDark(!dark)}>
                  {dark ? <BsToggleOn /> : <BsToggleOff />}
                </button>
                <BsMoon />
              </div>
            </ul>

            <section className="space-y-3 pb-28">
              <h2>Connect with me</h2>
              <div className="flex space-x-4">
                {profileLinks.map((profileLink) => (
                  <a
                    key={profileLink.id}
                    href={profileLink.path}
                    className="text-3xl"
                  >
                    {profileLink.icon}
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </nav>
  );
}
