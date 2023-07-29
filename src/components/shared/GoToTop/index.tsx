import Image from "next/image";

const ButtonTop = (props: any) => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <button
      onClick={handleScrollTop}
      className={`w-[5vw] go-top fixed top-[85%] cursor-pointer z-20 ease-in duration-300 text-common-white ${props.showButton ? "show right-[3%]" : "-right-[10%]"}`
      }
    >
      {props.children}
      <Image
        id="rocket"
        className="max-w-full rounded-[30px] transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.2] duration-300 object-top object-cover"
        src="/img/rocket2.png"
        alt="a robot and a person holding hands"
        style={{ width: "100%", height: "100%" }}
        width={1000}
        height={1000}
      />
    </button >
  );
};

export default ButtonTop;