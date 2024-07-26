import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "../../static";

const SliderHome: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-3">
      <Slider {...settings}>
        {Array(5)
          .fill(0)
          .map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={Images.background}
                  alt=""
                  className="w-[90%] h-auto object-contain"
                />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default SliderHome;
