import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-32 flex-none border-t border-zinc-100 dark:bg-zinc-800">
      <div className="max-md:flex justify-center mx-48 pb-16 pt-10 dark:text-white">
        <Link
          href={"/about"}
          className="mr-8 hover:text-teal-500"
          aria-label="About"
        >
          About
        </Link>
        <Link
          href={"/blog"}
          className="mr-8 hover:text-teal-500"
          aria-label="Articles"
        >
          Blog
        </Link>
        <Link
          href={"/projects"}
          className="mr-8 hover:text-teal-500"
          aria-label="Projects"
        >
          Projects
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
