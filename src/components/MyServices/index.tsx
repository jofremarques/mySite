import Image from "next/image";
import { Container } from "../shared/Container";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import { services } from "src/constants/services";
import { CardService } from "./CardService";
export function MyServices() {

  return (
    <section id="portifolio" className="bg-brand-primaryMatte">
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
                  Projetos em que ja trabalhei
                </strong>
              </h1>
            </div>
          </div>
        </div>
        <div className="row lg:pb-[3rem] flex flex-wrap items-center">
          <div className="col w-full lg:w-[80%] mx-auto p-3">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              loop={true}
              autoplay={{
                delay: 2500,
              }}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper h-[325px]"
            >
              {services.map(({ href, image, title }, key) => {
                return (
                  <SwiperSlide key={key} >
                    <CardService href={href} image={image} title={title} />
                  </SwiperSlide>
                );
              })}

            </Swiper>
          </div>
        </div>
      </Container >
    </section >
  );
}
