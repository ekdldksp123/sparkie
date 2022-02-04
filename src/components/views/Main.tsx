/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from 'react-router';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../layout/Main.css";


// Import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow, Pagination, Navigation
} from 'swiper';

SwiperCore.use([EffectCoverflow,Pagination, Navigation]);

export default function App() { 
  
  const navigate = useNavigate();  

  useEffect(() => {
    document.styleSheets[0].insertRule('#app { height: 100% }');
    document.styleSheets[0].insertRule('html,body { position: relative; height: 100%; }');

    document.body.style.cssText = `
      background: #fff;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #000;
      margin: 0;
      padding: 0;
    `;
  },[]);

  return (
    <>
      <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} loop={true} loopFillGroupWithBlank={true} coverflowEffect={{
        "rotate": 50,
        "stretch": 0,
        "depth": 100,
        "modifier": 1,
        "slideShadows": true
      }} pagination={{"clickable": true}} navigation={true} className="mySwiper">
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" onClick={() => navigate('/community')}/>커뮤니티</SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" />로그인/회원가입</SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" />전기차 충전소 지도</SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" />Who we are</SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" />Q&A</SwiperSlide>
      </Swiper>
    </>
  )
}

