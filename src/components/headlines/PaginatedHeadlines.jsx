import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PaginationCard from "../headlines/PaginationCard";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function PaginatedHeadlines({ paginationData }) {
  console.log(paginationData);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-screen sm:h-80 md:h-96 lg:h-96 xl:h-112 2xl:h-128"
      >
        {paginationData.map((data, index) => (
          <SwiperSlide key={index}>
            <PaginationCard data={data} height={96} adjust={false} />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 0 0" ref={progressCircle}>
            <circle cx="0" cy="0" r="0"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default PaginatedHeadlines;
