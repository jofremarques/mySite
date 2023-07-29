import Link from "next/link";
import { NavbarProps } from "./type";

export function Navbar({ menu, classLi, classUl }: NavbarProps) {
  return (
    <nav>
      <ul className={`text-color-white ${classUl}`}>
        {menu.map((li, key) => {
          return (
            <li key={key} className={`mx-5 my-3 flex ${classLi} hover:text-brand-third items-center hover:-translate-y-1 hover:scale-[1.2] duration-300`}>
              <span className="mr-2">{li.planet}</span>
              <Link href={!!li.link ? li.link : `#${li.label.toLowerCase()}`}>
                {li.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
