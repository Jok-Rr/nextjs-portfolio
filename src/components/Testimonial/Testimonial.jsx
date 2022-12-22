import { Container } from "../atom/Container";
import { Heading2 } from "../atom/Heading2";
import { Heading4 } from "../atom/Heading4";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Pagination } from "swiper";
import me from "/public/testimonials/test.png";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import Image from "next/image";
import { Heading3 } from "../atom/Heading3";

export const Testimonial = () => {
  return (
    <div className="bg-lightdark">
      <Container id="testimonials">
        <Heading2 className={"col-span-4 lg:col-span-12"}>
          Témoignages 🗣
        </Heading2>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay, Pagination]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          className="mySwiper col-span-4 md:col-span-2 md:col-start-2  lg:col-span-6 lg:col-start-4"
        >
          <SwiperSlide className="flex flex-col items-center justify-center rounded-2xl bg-noblack py-12 px-6">
            <Image
              src={me}
              width="144"
              height="144"
              alt=""
              className="mb-5 rounded-full border-8 border-neonblue"
            />
            <Heading3>Thomas Florentin</Heading3>
            <Heading4>Développeur Web</Heading4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nec eros nisl. Curabitur non urna hendrerit, consequat massa non.
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center rounded-2xl bg-noblack py-12 px-6">
            <Image
              src={me}
              width="144"
              height="144"
              alt=""
              className="mb-5 rounded-full border-8 border-neonblue"
            />
            <Heading3>Thomas Florentin</Heading3>
            <Heading4>Développeur Web</Heading4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nec eros nisl. Curabitur non urna hendrerit, consequat massa non.
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center rounded-2xl bg-noblack py-12 px-6">
            <Image
              src={me}
              width="144"
              height="144"
              alt=""
              className="mb-5 rounded-full border-8 border-neonblue"
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
