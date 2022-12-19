import { Container } from "../atom/Container";
import { Heading2 } from "../atom/Heading2";
import { Heading4 } from "../atom/Heading4";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import me from "/public/testimonials/test.png";

import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
import { Heading3 } from "../atom/Heading3";

export const Testimonial = () => {
  return (
    <div className="bg-lightdark">
      <Container id="testimonials">
        <Heading2>Témoignages 🗣</Heading2>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper col-span-4 "
        >
          <SwiperSlide className="bg-noblack flex-col flex items-center justify-center rounded-2xl py-12 px-6">
            <Image
              src={me}
              width="144"
              height="144"
              alt=""
              className="border-8 rounded-full border-neonblue mb-5"
            />
            <Heading3>Thomas Florentin</Heading3>
            <Heading4>Développeur Web</Heading4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nec eros nisl. Curabitur non urna hendrerit, consequat massa non.
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-noblack flex-col flex items-center justify-center rounded-2xl py-12 px-6">
            <Image
              src={me}
              width="144"
              height="144"
              alt=""
              className="border-8 rounded-full border-neonblue mb-5"
            />
            <Heading3>Thomas Florentin</Heading3>
            <Heading4>Développeur Web</Heading4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nec eros nisl. Curabitur non urna hendrerit, consequat massa non.
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-noblack flex-col flex items-center justify-center rounded-2xl py-12 px-6">
            <Image
              src={me}
              width="144"
              height="144"
              alt=""
              className="border-8 rounded-full border-neonblue mb-5"
            />
            <Heading3>Thomas Florentin</Heading3>
            <Heading4>Développeur Web</Heading4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nec eros nisl. Curabitur non urna hendrerit, consequat massa non.
            </p>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};
