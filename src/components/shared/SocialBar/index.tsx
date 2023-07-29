import { SocialGroups } from "../SocialGroups";

type SocialGroupsProps = {
  classUl?: String;
  classLi?: String;
  className?: String;
  showSocial?: boolean;
}

export function SocialBar({ classLi = '', classUl = '', className = '', showSocial }: SocialGroupsProps) {

  return (
    <div className={`${className} bottom-[5rem] ease-in duration-300 fixed z-10 ${showSocial ? '-left-[3rem] ' : 'left-[3rem] '}`}>
      <SocialGroups classLi={`${classLi}`} classUl={`${classUl}`} />
    </div >
  );
}
