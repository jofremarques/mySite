import { Container } from "../Container";
import Link from "next/link";
import { EmailIcon } from "src/assets/icons/Email";
import { LocationIcon } from "src/assets/icons/Location";
import { SocialGroups } from "../SocialGroups";
import { useState } from "react";
import { WhatsAppIcon } from "src/assets/icons/WhatsApp";
import { PhoneIcon } from "src/assets/icons/Phone";

export function Footer() {

  const [emailCopied, setEmailCopied] = useState(false);
  const handleCopy = () => {
    setEmailCopied(true)
    setTimeout(() => {
      setEmailCopied(false)
    }, 2500);
  }

  return (
    <footer className="bg-common-pourple relative py-8">
      <Container className="bg-common-pourple px-5 py-[.75rem]" classContainer={'bg-common-pourple'}>
        <h1 className="text-color-white text-2xl font-semibold mb-2"><span className="font-barlow">Desenvolvedor Front-End</span></h1>
        <div className="row flex items-center flex-wrap justify-center">
          <div className="col contacts-group w-full lg:w-[50%] justify-between md:justify-start">
            <div className="contact-mail">
              <Link
                className="text-[1.2rem] text-color-white flex items-center transition ease-in-out
                delay-150 cursor-pointer shadow-light flex-wrap"
                href={"mailto:jofremartinsmarques@gmail.com"}
                target="_blank">
                <span className="w-full flex">
                  <EmailIcon
                    width={"15px"}
                    height={"15px"}
                    className="fill-white mr-[10px] flex items-center cursor-pointer"
                  />E-mail:</span>
                <span className="text-[1.82rem] font-barlow">
                  jofremartinsmarques@gmail.com
                </span>
              </Link>
              <div className="button mt-3 flex">
                <button className=" bg-common-white text-brand-secondary px-3 py-2 rounded-lg" onClick={handleCopy}>Copiar o email</button>
                <span className={`ml-3 bg-[#2056bb] text-common-white px-2 flex items-center rounded-lg text-[0.7rem] ${emailCopied ? 'block' : 'hidden'}`}>Email copiado</span>
              </div>
            </div>
          </div>
          <div className="col w-full md:w-[20%] lg:w-[40%] mt-3 md:mt-0 flex">
            <div className="w-[50%]">
              <div className="location my-5  ml-5">
                <h1 className="text-common-white font-bold">Endereço</h1>
                <Link
                  className="my-5 text-[1rem] md:text-[1rem] flex items-center text-color-white transition ease-in-out delay-150 cursor-pointer shadow-light"
                  href={
                    "https://goo.gl/maps/a1eRXxuV1DNjK78F9"
                  }
                  target="_blank"
                >
                  <LocationIcon
                    fill="#fff"
                    width={"15px"}
                    height={"15px"}
                    className="mr-[10px] cursor-pointer shadow-light"
                  />
                  São Gonçalo - RJ/Brasil
                </Link>
              </div>
              <div className="location my-5 ml-5">
                <h1 className="text-common-white font-bold">Telefone</h1>
                <Link
                  className="my-5 text-[1rem] md:text-[1rem] flex items-center text-color-white transition ease-in-out delay-150 cursor-pointer shadow-light"
                  href={"tel:+552197529-2132"}
                  target="_blank"
                >
                  <WhatsAppIcon
                    fill="#fff"
                    width={"15px"}
                    height={"15px"}
                    className="mr-[10px] cursor-pointer shadow-light"
                  />
                  (21) 9 7529-2132
                </Link>
                <Link
                  className="my-5 text-[1rem] md:text-[1rem] flex items-center text-color-white transition ease-in-out delay-150 cursor-pointer shadow-light"
                  href={"tel:+552198145-2091"}
                  target="_blank"
                >
                  <PhoneIcon
                    fill="#fff"
                    width={"15px"}
                    height={"15px"}
                    className="mr-[10px] cursor-pointer shadow-light"
                  />
                  (21) 9 8145-2091
                </Link>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="social-group my-5 flex justify-center flex-wrap">
                <h1 className="text-common-white font-bold w-full text-center">Redes Sociais</h1>
                <SocialGroups classUl={'flex'} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer >
  );
}
