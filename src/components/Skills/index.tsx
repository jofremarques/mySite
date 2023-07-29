import { Container } from "../shared/Container";
import { skills } from "src/constants/skills";
import { SkillItem } from "./skillItem";
import { motion } from 'framer-motion';

export function Skills() {
  return (
    <section id="skills" className="h-full bg-[url('/img/SpaceBanner.jpg')] bg-cover py-[2rem] lg:py-[5rem] relative">
      <div className="film bg-[#11b4b154] opacity-70 w-full h-full absolute top-0"></div>
      <Container>
        <div className="row flex justify-center">
          <div className="col w-full">
            <motion.div className="title my-10"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-brand-primary flex justify-center text-2xl lg:text-4xl ">
                <strong className="font-barlow bg-brand-primary rounded-lg text-color-white tracking-wider
                m-0 px-[2rem] py-[1rem] border border-white">
                  Skills Técnicas
                </strong>
              </h1>
            </motion.div>
          </div>
        </div>
        <div className="row flex justify-center">
          <div className="col w-full lg:w-[75%] xl:w-[63%] 2xl:w-[73%] 3xl:w-[75%] flex justify-center">
            <motion.div
              className="content-skills w-full bg-white/50 p-3 rounded-lg flex flex-wrap justify-around border-transparent border-[2px] hover:border-brand-third cursor-pointer"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {skills.map(({ icon, text }, key) => {
                return (
                  <SkillItem
                    key={key}
                    icon={icon}
                    text={text}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 1, delay: key * 0.2 }}
                  />
                );
              })}

            </motion.div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="row flex justify-center">
          <div className="col w-full">
            <motion.div className="title my-10"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-brand-primary flex justify-center text-2xl lg:text-4xl ">
                <strong className="font-barlow bg-brand-primary rounded-lg text-color-white tracking-wider
                m-0 px-[2rem] py-[1rem] border border-white">
                  Skills Comportamentais
                </strong>
              </h1>
            </motion.div>
          </div>
        </div>
        <div className="row flex justify-center">
          <div className="col w-full lg:w-[75%] xl:w-[63%] 2xl:w-[73%] 3xl:w-[75%] flex justify-center">
            <motion.div
              className="content-skills w-full bg-white/50 p-3 rounded-lg flex flex-wrap justify-around border-transparent border-[2px] hover:border-brand-third cursor-pointer"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {skills.map(({ icon, text }, key) => {
                return (
                  <SkillItem
                    key={key}
                    icon={icon}
                    text={text}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 1, delay: key * 0.2 }}
                  />
                );
              })}

            </motion.div>
          </div>
        </div>
      </Container>
    </section >
  );
}
