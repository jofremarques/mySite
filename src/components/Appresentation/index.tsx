import { Container } from "../shared/Container";
import TypeIt from "typeit-react";

export function Appresentation() {

  return (
    <main id="apresentacao">
      <Container>
        <div className="row flex flex-wrap lg:h-[65vh] 2xl:h-[80vh] items-center">
          <div className="col w-full md:w-[50%] ">
            <div className="write bg-[#00000082] rounded-lg">
              <TypeIt
                options={{ speed: 20 }}
              >
                <div className="title">
                  <h1 className="text-2xl lg:text-3xl">
                    <strong className="text-brand-third font-light tracking-wider
                m-0 px-[0.5rem] py-[1rem] drop-shadow-2xl-red">
                      Olá, eu sou o Jofre Marques
                    </strong>
                  </h1>
                </div>
                <div className="describe mt-1 lg:mt-5">
                  <p className="text-common-white text-xl font-barlow px-[0.5rem] py-[1rem]">
                    um profissional com experiência na área de <span className="text-2xl font-bold font-barlow">Front-End</span>.
                    <br className="hidden xl:block" />Sou uma pessoa autodidata e estou em constante evolução e sempre buscando aprender e me
                    aperfeiçoar. Me adapto com facilidade e tenho uma boa relação interpessoal, além de me dedicar a entregar resultados de alta qualidade. Meu objetivo é atuar em projetos que me desafiem e que eu possa adquirir o máximo de experiência.
                  </p>
                </div>
              </TypeIt>
            </div>
          </div>
        </div>
      </Container>
    </main >
  );
}
