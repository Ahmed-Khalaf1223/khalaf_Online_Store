import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import image1 from "../../img/banner_Hero1.jpg";
import image2 from "../../img/banner_Hero2.jpg";
import image3 from "../../img/banner_Hero3.jpg";

import { Autoplay, Pagination } from "swiper/modules";
function HeroSlider() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the New</h4>
                <h3>
                  Microsoft Xbox <br /> 360 controller
                </h3>
                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to="/" className="btn">
                  Show Now
                </Link>
              </div>
              <img src={image1} alt="slider hero 1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the New</h4>
                <h3>
                  Microsoft Xbox <br /> 360 controller
                </h3>
                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to="/" className="btn">
                  Show Now
                </Link>
              </div>
              <img src={image2} alt="slider hero 2" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the New</h4>
                <h3>
                  Microsoft Xbox <br /> 360 controller
                </h3>
                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to="/" className="btn">
                  Show Now
                </Link>
              </div>
              <img src={image3} alt="slider hero 3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
