import Image from "next/image";

export const menu = [
  {
    label: "Sobre",
    link: "#sobre",
    planet: <Image
      className="w-[2vw] h-[2.5vh] max-w-[2vw]"
      src="/img/terra.gif"
      alt="logo"

      width={1000}
      height={1000}
    />
  },
  {
    label: "Skills",
    link: "#skills",
    planet: <Image
    className="w-[2vw] h-[2.5vh] max-w-[2vw]"
    src="/img/marte.gif"
    alt="logo"

    width={1000}
    height={1000}
  />
  },
  {
    label: "Portifólio",
    link: "#portifólio",
    planet: <Image
    className="w-[2vw] h-[2.5vh] max-w-[2vw]"
    src="/img/jupiter.gif"
    alt="logo"

    width={1000}
    height={1000}
  />
  },
  {
    label: "Contato",
    link: "#contato",
    planet: <Image
    className="w-[2vw] h-[2.5vh] max-w-[2vw]"
    src="/img/saturno.gif"
    alt="logo"

    width={1000}
    height={1000}
  />
  },
];
