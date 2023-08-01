import Image from "next/image";

export const menu = [
  {
    label: "Sobre",
    link: "#sobre",
    planet: <Image
      className="w-[25px] h-[25px] max-w-[25px]"
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
    className="w-[25px] h-[25px] max-w-[25px]"
    src="/img/marte.gif"
    alt="logo"

    width={1000}
    height={1000}
  />
  },
  {
    label: "Portifolio",
    link: "#portifolio",
    planet: <Image
    className="w-[25px] h-[25px] max-w-[25px]"
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
    className="w-[25px] h-[25px] max-w-[25px]"
    src="/img/saturno.gif"
    alt="logo"

    width={1000}
    height={1000}
  />
  },
];
