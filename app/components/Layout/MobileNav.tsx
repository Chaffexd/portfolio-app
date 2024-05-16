"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "../ThemeSwitch";

const navLinks = [
  {
    id: 1,
    link: "/",
    path: "Home",
  },
  {
    id: 2,
    link: "/about",
    path: "About",
  },
  {
    id: 3,
    link: "/blog",
    path: "Blog",
  },
  {
    id: 4,
    link: "/projects",
    path: "Projects",
  },
];

const MobileNav = () => {
  const path = usePathname();
  console.log("Paht = ", path);
  return (
    <nav
      className={`sm:hidden w-full flex justify-end pr-2 ${
        path === "/" ? "absolute" : ""
      } mt-2`}
    >
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={"/images/hamburger.svg"}
            className="hover:cursor-pointer dark:bg-slate-50 rounded-full p-1"
            alt="hamburger icon"
            height={36}
            width={36}
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none">
          <div className="flex flex-col">
            <ThemeSwitch />
            {navLinks.map((link) => (
              <SheetClose asChild key={link.id}>
                <Link href={link.link} className="mt-2">{link.path}</Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
