import React from "react";
import Product from "./Product";
import "./slideproduct.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
function SlideProduct({ data, title }) {
  return (
    <div className="slide_products slide">
      <div className="container">
        <div className="top_slide">
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quia.
          </p>
        </div>

        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1400: { slidesPerView: 5 },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Product item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideProduct;
