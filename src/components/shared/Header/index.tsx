import { Navbar } from "./Navbar";
import { menu } from "src/constants/menu";
import { Container } from "../Container";
import { MenuIcon } from "src/assets/icons/Menu";
import { useEffect, useState } from "react";
import { CloseIcon } from "src/assets/icons/Close";
import Image from "next/image";

export function Header() {
  const [active, setActive] = useState(false);
  const ToogleMode = () => {
    setActive(!active);
  }
  const [show, setShow] = useState(false);
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollHeaderVisibility = () => {
      window.scrollY > 300 ? setShow(true) : setShow(false);
    };

    window.addEventListener("scroll", handleScrollHeaderVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollHeaderVisibility);
    };
  }, []);

  return (
    <header className={`${show ? "sticky bg-brand-primary z-10 top-0 ease-in duration-300 h-[10vh]" : "sticky bg-transparent z-10 top-0 ease-in duration-300 h-[10vh]"}`}>
      <Container className="py-0" classContainer={'hidden lg:block px-[2rem]'} >
        <div className="header-menu flex items-center ">
          <span onClick={handleScrollTop} className="w-[25%] cursor-pointer">
            <div className="logo flex">
              <div className="logo w-[4rem] mr-2">
                <Image
                  className="max-w-full rounded-[30px] object-top object-cover"
                  src="/img/logoIcon2.png"
                  alt="Logo"
                  style={{ width: "100%", height: "100%" }}
                  width={1000}
                  height={1000}
                />
              </div>
              <h1 className="text-color-white text-5xl font-barlow">J<span className="text-lg font-barlow">mmarques</span></h1>
            </div>
          </span>
          <div className="menu w-[20%] md:w-[30%] ml-auto text-end">
            <div className="menu flex justify-end cursor-pointer">
              <Navbar menu={menu} classUl={'flex'} classLi={'text-red py-3  underline-offset-1'} />
            </div>
          </div>
        </div>
      </Container>
      <Container classContainer={'lg:hidden '}>
        <div className="header-menu flex items-center justify-between">
          <div className="logo w-[70%]">
            <h1 className="text-color-white text-2xl font-semibold">DEV <span className="text-sm">Front-End</span></h1>
          </div>
          <div className="menu flex justify-end cursor-pointer">
            {active ? <CloseIcon fill="#fff" width={'2rem'} height={'2rem'} svgClass="cursor-pointer" className="justify-end flex cursor-pointer" onClick={ToogleMode} /> : <MenuIcon fill="#fff" width={'2rem'} height={'2rem'} svgClass="cursor-pointer" className="justify-end flex hover:border-[1px] hover:border-solid rounded-lg p-1 hover:p-1 border-none cursor-pointer" onClick={ToogleMode} />}

          </div>
        </div>
        <div className={`nav bg-white mt-5 ${active ? `menu menuOpen block` : `menu menuClose hidden`}`}>
          <Navbar menu={menu} classLi={'text-brand-primary py-3 hover:text-brand-secondary'} />
        </div>
      </Container>
    </header >
  );
}
