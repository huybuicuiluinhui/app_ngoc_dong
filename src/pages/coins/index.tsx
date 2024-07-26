import React from "react";
import Images from "../../static";
import { useNavigate } from "react-router-dom";
import ExchangeVoucher from "./exchangeVoucher";
import ChangedVoucher from "./changedVoucher";

const Coins = () => {
  const navigate = useNavigate();
  const [choose, setChoose] = React.useState(0);
  const refScroll = React.useRef(null);

  const tabs = [
    {
      id: 0,
      title: "Đổi voucher",
    },

    {
      id: 1,
      title: "Voucher đã đổi",
    },
  ];
  const WIDTH_WINDOW = window.innerWidth;
  const handleTabClick = (index) => {
    const tabPosition = WIDTH_WINDOW * index;
    // @ts-ignore
    refScroll.current?.scrollTo({
      left: tabPosition,
      behavior: "smooth",
    });
    setChoose(index);
  };
  return (
    <div className="w-full h-full bg-bg ">
      <div className="bg-main rounded-bl-[20px] rounded-br-[20px] pb-5 pt-12 px-3">
        <div className="flex items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="13"
            viewBox="0 0 29 13"
            fill="none"
          >
            <rect
              width="27.7551"
              height="2.1532"
              rx="1.0766"
              transform="matrix(-1 0 0 1 28.7168 0)"
              fill="white"
            />
            <rect
              width="17.7633"
              height="2.1532"
              rx="1.0766"
              transform="matrix(-1 0 0 1 18.725 5.02417)"
              fill="white"
            />
            <rect
              width="22.2041"
              height="2.1532"
              rx="1.0766"
              transform="matrix(-1 0 0 1 23.1655 10.0483)"
              fill="white"
            />
          </svg>
          <img
            src={Images.iconNoti}
            alt=""
            className="w-6 h-6 object-contain"
          />
        </div>
        <div className=" flex items-center  justify-between mt-4">
          <div className="">
            <p className="text-white text-xs font-medium">Điểm thưởng</p>
            <div className="flex items-center gap-1">
              <img
                src={Images.iconXu}
                alt=""
                className="w-[28px] h-[28px] object-contain"
              />
              <p className="text-[#F9DF44] text-[15px]">
                60 <span className="text-white">điểm</span>
              </p>
            </div>
            <p className="text-white text-xs font-light ">1 điểm = 1000 đ</p>
          </div>
          <div
            className="bg-[#fff] rounded-[10px] flex items-center px-[7px] gap-2 py-1 w-[65%]"
            onClick={() => {
              navigate("/qrCode");
            }}
          >
            <div>
              <p className="text-[#0E92CC] text-xs">
                Mua sắm để tích điểm và đổi quà Tại nhà thuốc Á Châu nhé!
              </p>
              <div className="bg-[#464DBE] rounded-[10px] px-3 py-1 w-fit mx-4 mt-2 pb-[6px]">
                <p className="text-white text-xs font-normal">Mua sắm ngay</p>
              </div>
            </div>
            <img
              src={Images.iconCartAc}
              alt=""
              className="w-[42px] h-[50px] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-around items-center w-[80%] bg-white mx-auto  rounded-[15px]">
        {tabs.map((item, index) => {
          return (
            <div
              key={item.id}
              className="flex items-center justify-center py-2 w-[50%]"
              style={{
                // width: index === 2 ? "31%" : "23%",
                borderTopRightRadius: index === 1 ? "15px" : "0px",
                borderBottomRightRadius: index === 1 ? "15px" : "0px",
                borderTopLeftRadius: index === 0 ? "15px" : "0px",
                borderBottomLeftRadius: index === 0 ? "15px" : "0px",
                backgroundColor: index === choose ? "#191E6F" : "#fff",
              }}
              onClick={() => {
                handleTabClick(index);
              }}
            >
              <p
                className="text-xs text-[#6ecff9] font-bold text-center"
                style={{
                  color: index === choose ? "#fff" : "#191E6F",
                }}
              >
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
      <div
        ref={refScroll}
        className="no-scrollbar h-full w-full "
        style={{
          overflow: "hidden",
          display: "flex",
          scrollBehavior: "smooth",
        }}
      >
        <div
          className=" no-scrollbar h-full "
          style={{
            flex: `0 0 ${WIDTH_WINDOW}px`,
          }}
        >
          <ExchangeVoucher />
        </div>
        <div
          className=" no-scrollbar h-full "
          style={{
            flex: `0 0 ${WIDTH_WINDOW}px`,
          }}
        >
          <ChangedVoucher />
        </div>
      </div>
    </div>
  );
};

export default Coins;
