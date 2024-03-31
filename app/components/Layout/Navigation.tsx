import Link from "next/link";

const Navigation = () => {
  return (
    <header className="max-sm:mx-0 flex justify-center md:mx-48">
      <nav className="flex mt-6 items-center justify-between min-w-full dark:text-white">
        <div>
          <Link href={"/"} className="hover:text-teal-500">
            Home
          </Link>
        </div>
        <div>
          <div className="w-60 flex justify-between border border-slate-200 rounded-3xl px-6 py-1">
            <Link
              href={"/about"}
              className="hover:text-teal-500"
              aria-label="About"
            >
              About
            </Link>
            <Link
              href={"/articles"}
              className="hover:text-teal-500"
              aria-label="Articles"
            >
              Articles
            </Link>
            <Link
              href={"/projects"}
              className="hover:text-teal-500"
              aria-label="Projects"
            >
              Projects
            </Link>
          </div>
        </div>
        <div>
          <p>Switcher</p>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
