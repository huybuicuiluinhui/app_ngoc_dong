import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Images from "../../static";
import bannerApis from "../../apis/banner.apis";
import { useQuery } from "@tanstack/react-query";
import { API_URL_IMAGE } from "../../utils/contanst";

const BannerHome = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const { data: dataBanner } = useQuery({
    queryKey: ["dataBanner"],
    queryFn: () => bannerApis.getListBanner(),
  });
  const listBanner = dataBanner?.data.data;

  return (
    <div className="w-full flex mt-4 ">
      <div className="w-full ">
        <Slider {...settings}>
          {!!listBanner &&
            !!listBanner.length &&
            listBanner.map((item, index) => {
              return (
                <div
                  className="flex flex-col w-full items-center justify-center outline-none "
                  key={index}
                >
                  <img
                    src={API_URL_IMAGE + item.imgage}
                    className="w-[90%]  object-cover mx-auto rounded-[20px]"
                  />
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};
export default BannerHome;
