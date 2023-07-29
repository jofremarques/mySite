import Image from "next/image";
import { Container } from "../shared/Container";
import { aboutUs1, aboutUs2 } from "src/constants/aboutUs";

export function AboutUs() {
  return (
    <section id="sobre" className="bg-brand-primary">
      <Container>
        <div className="row lg:py-[3rem] flex flex-wrap items-center">
          <div className="col w-full lg:w-[50%] mx-auto p-3">
            <div className="title mx-auto ">
              <h1 className="text-[2rem] lg:text-[3rem] font-barlow text-color-white flex text-center justify-center">
                <div className="logo w-[5rem] h-[5rem] mr-5">
                  <Image
                    className="max-w-full rounded-[30px] transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.2] duration-300 object-top object-cover"
                    src="/img/logoIcon2.png"
                    alt="logo"
                    style={{ width: "100%", height: "100%" }}
                    width={1000}
                    height={1000}
                  />
                </div>
                <strong className="font-barlow">
                  Sobre mim
                </strong>
              </h1>
            </div>
          </div>
        </div>
        <div className="row lg:pt-[3rem] flex flex-wrap items-center">
          <div className="col w-full lg:w-[30vw] h-[75vh] rounded-[30px] mx-auto overflow-hidden">
            <Image
              className="max-w-full rounded-[30px] transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.2] duration-300 object-top object-cover"
              src="/img/jofre.jpeg"
              alt="Esse sou eu"
              style={{ width: "100%", height: "90%" }}
              width={1000}
              height={1000}
            />
          </div>
          <div className="col w-full lg:w-[50%] mx-auto p-3">
            <div className="title">
              <h1 className="font-barlow text-5xl text-color-white">Quem é o Jofre? </h1>
            </div>
            <div className="text mx-auto ">
              {aboutUs1.map(({ text }, key) => {
                return (
                  <p key={key} className="my-2 text-[1rem] lg:text-[1.2rem] xl:text-[1.3rem] font-barlow text-color-white">
                    {text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row lg:pt-[3rem] flex flex-wrap items-center">
          <div className="col w-full lg:w-[50%] mx-auto p-3">
            <div className="text mx-auto ">
              <div className="title">
                <h1 className="font-barlow text-5xl text-color-white">Inicio da Carreira.</h1>
              </div>
              {aboutUs2.map(({ text }, key) => {
                return (
                  <p key={key} className="my-2 text-[1rem] lg:text-[1.2rem] xl:text-[1.3rem] font-barlow text-color-white">
                    {text}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="col w-full lg:w-[30vw] h-[75vh] rounded-[30px] mx-auto overflow-hidden">
            <Image
              className="max-w-full rounded-[30px] transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.2] duration-300 object-top object-cover"
              src="/img/JoFreMarques.jpg"
              alt="a robot and a person holding hands"
              style={{ width: "100%", height: "90%" }}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </Container >
    </section >
  );
}
