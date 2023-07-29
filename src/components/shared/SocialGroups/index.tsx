import Link from "next/link";
import { FacebookIcon } from "src/assets/icons/Facebook";
import { GitHubIcon } from "src/assets/icons/GitHub";
import { InstagramIcon } from "src/assets/icons/Instagram";
import { LinkedinIcon } from "src/assets/icons/Linkedin";
import { WhatsAppIcon } from "src/assets/icons/WhatsApp";

type SocialGroupsProps = {
  classUl?: String;
  classLi?: String;
}
export function SocialGroups({ classUl = '', classLi = '' }: SocialGroupsProps) {
  const className = "w-[30px] h-[30px] fill-color-white border border-transparent p-1 rounded-md hover:border-white transition ease-in-out shadow-light delay-150 hover:-translate-y-1 hover:scale-[1.2]";

  return (
    <ul className={`${classUl}`}>
      <li className="mt-3">
        <Link target="_blank" href={"https://www.facebook.com/jofre.marques"}>
          <FacebookIcon fill="#fff" className={`${className} ${classLi}`} />
        </Link>
      </li>
      <li className="mt-3">
        <Link target="_blank" href={"https://wa.me/5521975292132?text=Ol%C3%A1%2C+tudo+bem+Jofre%3F+Vi+o+seu+portf%C3%B3lio+e+estou+interessado+em+seu+contato%2C+assim+que+ver+essa+mensagem+me+responda+por+favor%21"}>
          <WhatsAppIcon fill="#fff" className={`${className} ${classLi}`} />
        </Link>
      </li>
      <li className="mt-3">
        <Link target="_blank" href={"https://www.linkedin.com/in/jofre-martins-marques/"}>
          <LinkedinIcon fill="#fff" className={`${className} ${classLi}`} />
        </Link>
      </li>
      <li className="mt-3">
        <Link target="_blank" href={"https://github.com/jofremarques"}>
          <GitHubIcon fill="#fff" className={`${className} ${classLi}`} />
        </Link>
      </li>
      <li className="mt-3">
        <Link target="_blank" href={"https://www.instagram.com/jofre_marques/"}>
          <InstagramIcon fill="#fff" className={`${className} ${classLi}`} />
        </Link>
      </li>
    </ul>
  );
}
