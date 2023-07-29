'use client'

import { ComponentProps } from "react";
import { SkillItemProps } from "./type";
import { motion } from "framer-motion";

type TechBadgeProps = ComponentProps<typeof motion.div> & SkillItemProps;

export function SkillItem({ icon, text,...props }: TechBadgeProps) {
  return (
    <motion.div className="skill-item bg-brand-primary p-5 flex items-center rounded-lg my-2 min-w-[135px] w-[10vw] justify-center border-transparent border-[2px] hover:border-brand-third cursor-pointer hover:border-[2px] hover:text-brand-third" {...props}>
      <div className="content-img">
        {icon}
      </div>
      <p className="text-white ml-2">{text}</p>
    </motion.div>
  );
}


