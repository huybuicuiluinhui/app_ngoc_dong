import React from "react";
import Images from "../../static";
import SliderHome from "../../components/sliderHome";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import ModalLogin from "../../components/modalLogin";
import { useQuery } from "@tanstack/react-query";
import BannerHome from "../../components/sliderHome/banner";
import postApis from "../../apis/post.apis";
import { API_URL_IMAGE } from "../../utils/contanst";
interface IRefModalMarket {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const Home = () => {
  const { isLoggedIn, user } = useAuth();
  const refModalLogin = React.useRef<IRefModalMarket>(null);
  const navigate = useNavigate();
  const itemTabs = [
    {
      id: 1,
      icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<g clip-path="url(#clip0_471_600)">
<path d="M24.0234 17.1875C24.5628 17.1875 25 16.7503 25 16.2109V5.85938C25 3.70547 23.2477 1.95312 21.0938 1.95312H19.8242V0.976562C19.8242 0.437207 19.387 0 18.8477 0C18.3083 0 17.8711 0.437207 17.8711 0.976562V1.95312H13.4277V0.976562C13.4277 0.437207 12.9905 0 12.4512 0C11.9118 0 11.4746 0.437207 11.4746 0.976562V1.95312H7.08008V0.976562C7.08008 0.437207 6.64287 0 6.10352 0C5.56416 0 5.12695 0.437207 5.12695 0.976562V1.95312H3.90625C1.75234 1.95312 0 3.70547 0 5.85938V21.0938C0 23.2477 1.75234 25 3.90625 25H21.0938C23.2477 25 25 23.2477 25 21.0938C25 20.5544 24.5628 20.1172 24.0234 20.1172C23.4841 20.1172 23.0469 20.5544 23.0469 21.0938C23.0469 22.1707 22.1707 23.0469 21.0938 23.0469H3.90625C2.8293 23.0469 1.95312 22.1707 1.95312 21.0938V5.85938C1.95312 4.78242 2.8293 3.90625 3.90625 3.90625H5.12695V4.88281C5.12695 5.42217 5.56416 5.85938 6.10352 5.85938C6.64287 5.85938 7.08008 5.42217 7.08008 4.88281V3.90625H11.4746V4.88281C11.4746 5.42217 11.9118 5.85938 12.4512 5.85938C12.9905 5.85938 13.4277 5.42217 13.4277 4.88281V3.90625H17.8711V4.88281C17.8711 5.42217 18.3083 5.85938 18.8477 5.85938C19.387 5.85938 19.8242 5.42217 19.8242 4.88281V3.90625H21.0938C22.1707 3.90625 23.0469 4.78242 23.0469 5.85938V16.2109C23.0469 16.7503 23.4841 17.1875 24.0234 17.1875Z" fill="#191E6F"/>
<path d="M6.10352 11.2305C6.64286 11.2305 7.08008 10.7932 7.08008 10.2539C7.08008 9.71457 6.64286 9.27734 6.10352 9.27734C5.56418 9.27734 5.12695 9.71457 5.12695 10.2539C5.12695 10.7932 5.56418 11.2305 6.10352 11.2305Z" fill="#191E6F"/>
<path d="M14.5996 11.2305C15.1389 11.2305 15.5762 10.7932 15.5762 10.2539C15.5762 9.71457 15.1389 9.27734 14.5996 9.27734C14.0603 9.27734 13.623 9.71457 13.623 10.2539C13.623 10.7932 14.0603 11.2305 14.5996 11.2305Z" fill="#191E6F"/>
<path d="M18.8477 11.2305C19.387 11.2305 19.8242 10.7932 19.8242 10.2539C19.8242 9.71457 19.387 9.27734 18.8477 9.27734C18.3083 9.27734 17.8711 9.71457 17.8711 10.2539C17.8711 10.7932 18.3083 11.2305 18.8477 11.2305Z" fill="#191E6F"/>
<path d="M6.10352 15.4785C6.64286 15.4785 7.08008 15.0413 7.08008 14.502C7.08008 13.9626 6.64286 13.5254 6.10352 13.5254C5.56418 13.5254 5.12695 13.9626 5.12695 14.502C5.12695 15.0413 5.56418 15.4785 6.10352 15.4785Z" fill="#191E6F"/>
<path d="M6.10352 19.7266C6.64286 19.7266 7.08008 19.2893 7.08008 18.75C7.08008 18.2107 6.64286 17.7734 6.10352 17.7734C5.56418 17.7734 5.12695 18.2107 5.12695 18.75C5.12695 19.2893 5.56418 19.7266 6.10352 19.7266Z" fill="#191E6F"/>
<path d="M10.3516 11.2305C10.8909 11.2305 11.3281 10.7932 11.3281 10.2539C11.3281 9.71457 10.8909 9.27734 10.3516 9.27734C9.81222 9.27734 9.375 9.71457 9.375 10.2539C9.375 10.7932 9.81222 11.2305 10.3516 11.2305Z" fill="#191E6F"/>
<path d="M10.3516 15.4785C10.8909 15.4785 11.3281 15.0413 11.3281 14.502C11.3281 13.9626 10.8909 13.5254 10.3516 13.5254C9.81222 13.5254 9.375 13.9626 9.375 14.502C9.375 15.0413 9.81222 15.4785 10.3516 15.4785Z" fill="#191E6F"/>
<path d="M10.3516 19.7266C10.8909 19.7266 11.3281 19.2893 11.3281 18.75C11.3281 18.2107 10.8909 17.7734 10.3516 17.7734C9.81222 17.7734 9.375 18.2107 9.375 18.75C9.375 19.2893 9.81222 19.7266 10.3516 19.7266Z" fill="#191E6F"/>
<path d="M14.5996 15.4785C15.1389 15.4785 15.5762 15.0413 15.5762 14.502C15.5762 13.9626 15.1389 13.5254 14.5996 13.5254C14.0603 13.5254 13.623 13.9626 13.623 14.502C13.623 15.0413 14.0603 15.4785 14.5996 15.4785Z" fill="#191E6F"/>
<path d="M18.8477 15.4785C19.387 15.4785 19.8242 15.0413 19.8242 14.502C19.8242 13.9626 19.387 13.5254 18.8477 13.5254C18.3083 13.5254 17.8711 13.9626 17.8711 14.502C17.8711 15.0413 18.3083 15.4785 18.8477 15.4785Z" fill="#191E6F"/>
<path d="M14.5996 19.7266C15.1389 19.7266 15.5762 19.2893 15.5762 18.75C15.5762 18.2107 15.1389 17.7734 14.5996 17.7734C14.0603 17.7734 13.623 18.2107 13.623 18.75C13.623 19.2893 14.0603 19.7266 14.5996 19.7266Z" fill="#191E6F"/>
</g>`,
      name: `Lịch sử \n đơn thuốc`,
      screen: "/historyOrder",
    },
    {
      id: 2,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
    <path opacity="0.977974" d="M3.99758 0C1.78992 0 0 1.8905 0 4.22222V14.7778C0 17.1095 1.78992 19 3.99758 19H13.9915C16.1992 19 17.9891 17.1095 17.9891 14.7778V10.5556C17.9891 9.97289 17.5414 9.5 16.9897 9.5C16.4381 9.5 15.9903 9.97289 15.9903 10.5556V14.7778C15.9903 15.9442 15.0959 16.8889 13.9915 16.8889H3.99758C2.89325 16.8889 1.99879 15.9442 1.99879 14.7778V4.22222C1.99879 3.05583 2.89325 2.11111 3.99758 2.11111H11.9927C12.5444 2.11111 12.9921 1.63822 12.9921 1.05556C12.9921 0.472889 12.5444 0 11.9927 0H3.99758ZM17.9891 1.05556C17.7333 1.05556 17.4654 1.15056 17.2706 1.35217L8.55682 10.3909C8.29998 10.6579 8.04113 10.639 7.83925 10.3244L6.83986 8.77379C6.53404 8.29774 5.89244 8.15945 5.43472 8.47717C4.97599 8.7949 4.84707 9.45251 5.15289 9.92856L6.15228 11.4792C7.05274 12.882 8.81466 13.0678 9.96297 11.875L18.7077 2.80356C19.0974 2.39928 19.0974 1.75751 18.7077 1.35217C18.5128 1.14951 18.245 1.05556 17.9891 1.05556Z" fill="#191E6F"/>
    </svg>`,
      name: "Tích điểm",
    },
    {
      id: 2,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 0C8.621 0 7.49199 0.876004 7.14099 2.143C6.23599 2.394 5.38999 3.233 5.17499 4.001L4 3.99999C1.791 3.99999 0 5.79099 0 7.99999V16C0 18.209 1.791 20 4 20H16C18.209 20 20 18.209 20 16V7.99999C20 5.79099 18.209 3.99999 16 3.99999L14.859 4.01C14.484 3.10801 13.772 2.376 12.867 2.125C12.516 0.857999 11.379 0 10 0ZM10 2C10.552 2 11 2.448 11 3C11 3.55199 11.448 3.99999 12 3.99999C12.552 3.99999 13 4.44799 13 4.99999C13 5.55199 12.552 5.99999 12 5.99999H8C7.448 5.99999 7 5.55199 7 4.99999C7 4.44799 7.448 3.99999 8 3.99999C8.552 3.99999 9 3.55199 9 3C9 2.448 9.448 2 10 2ZM4 5.99999L5.17499 5.993C5.58599 7.226 6.732 7.99999 8 7.99999H12C13.268 7.99999 14.341 7.28 14.851 6.002L16 5.99999C17.105 5.99999 18 6.89499 18 7.99999V16C18 17.105 17.105 18 16 18H4C2.895 18 2 17.105 2 16V7.99999C2 6.89499 2.895 5.99999 4 5.99999Z" fill="#1C2272"/>
    </svg>
    `,
      name: "Đổi quà",
    },
    {
      id: 2,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 0C4.477 0 0 4.4772 0 10C0 11.434 0.319988 12.8622 0.937988 14.1875C0.117988 18.4225 0.0310059 18.8125 0.0310059 18.8125C-0.102994 19.5061 0.492988 20.1001 1.18799 19.9688C1.18799 19.9688 1.56699 19.9032 5.84399 19.0938C7.13499 19.7074 8.566 20 10 20C15.523 20 20 15.5228 20 10C20 4.4772 15.523 0 10 0ZM10 2C14.418 2 18 5.5817 18 10C18 14.4183 14.418 18 10 18C8.743 18 7.53599 17.7048 6.43799 17.1562C6.24199 17.0586 6.02701 17.0218 5.81201 17.0625C2.26201 17.7345 2.544 17.6944 2.25 17.75C2.308 17.4524 2.25799 17.7613 2.93799 14.25C2.97999 14.0326 2.94299 13.7915 2.84399 13.5938C2.28599 12.4881 2 11.2676 2 10C2 5.5817 5.582 2 10 2ZM7.18799 5C6.24999 5 5 6.25 5 7.1875C5 8.3957 6.25 10.625 7.5 11.875C7.635 12.0095 7.99 12.3655 8.125 12.5C9.375 13.75 11.604 15 12.812 15C13.75 15 15 13.75 15 12.8125C15 11.875 13.75 10.625 12.812 10.625C12.5 10.625 11.369 11.2715 11.25 11.25C10.254 11.0702 8.958 9.7428 8.75 8.75C8.721 8.6114 9.375 7.5 9.375 7.1875C9.375 6.25 8.12499 5 7.18799 5Z" fill="#2A343D"/>
    </svg>`,
      name: "Hỗ trợ \n tư vấn",
    },
  ];

  const { data: dataPostHome } = useQuery({
    queryKey: ["dataPostHomeFetch"],
    queryFn: () => postApis.getPostHome(),
  });
  const dataPost = dataPostHome?.data.data;
  return (
    <div className="w-full h-full bg-bg overflow-x-hidden no-scrollbar relative pb-32">
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
          {!!isLoggedIn ? (
            <div className="flex items-center gap-2">
              <img
                src={Images.imgTest}
                alt=""
                className="w-[35px] h-[35px] object-contain"
              />
              <div className="">
                <p className="text-white text-xs">Xin chào,</p>
                <div className="flex items-center gap-1">
                  <p className="text-white text-base">{user?.name}</p>
                  <img
                    src={Images.iconArrBottom}
                    alt=""
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col  gap-3 ">
              <div
                className="bg-[#0CA29C] flex justify-between self-start px-3 rounded-sm py-1 "
                onClick={() => {
                  refModalLogin.current?.setVisible(true);
                }}
              >
                <p className="text-white font-semibold text-[15px]">
                  Đăng nhập
                </p>
              </div>
              <p className="text-white text-[13px] font-normal">
                Xin chào đến với Ngọc Đông
              </p>{" "}
            </div>
          )}
          <div
            className="bg-[#464DBE] rounded-[10px] flex items-center px-[10px] gap-2 py-1"
            onClick={() => {
              navigate("/qrCode");
            }}
          >
            <img
              src={Images.iconQr}
              alt=""
              className="w-5 h-5 object-contain"
            />
            <div>
              <p className="text-white text-xs font-medium">Tích điểm</p>
              <div className="flex items-center gap-1">
                <img
                  src={Images.iconXu}
                  alt=""
                  className="w-[14px] h-[14px] object-contain"
                />
                <p className="text-[#F9DF44] text-[10px]">
                  60 <span className="text-white">điểm</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <BannerHome />
      </div>
      <div className="flex  justify-between mt-3 px-3 ">
        {itemTabs.map((tab, indTab) => (
          <div
            key={indTab}
            className="flex flex-col items-center"
            onClick={() => {
              navigate(tab.screen);
            }}
          >
            <div
              className="bg-[#9CC0F6] rounded-full w-[48px] h-[48px] flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: tab.icon }}
            />
            <p className="text-center mt-1" style={{ whiteSpace: "pre-line" }}>
              {tab.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-10 px-3">
        <p className="text-main tex-base font-semibold">
          Bạn cần tìm sản phẩm gì...
        </p>
        <p className="text-[#626262] text-[13px] font-medium">
          Lịch sử tìm kiếm {">"}
        </p>
      </div>
      <div className="bg-white flex items-center gap-3 w-[90%] mx-auto mt-6 rounded-[20px]">
        <img
          src={Images.iconSearch}
          alt=""
          className="w-6 h-6 object-contain my-[9px]  ml-4"
          onClick={() => {
            navigate("/listProduct");
          }}
        />
        <input
          type="text"
          name=""
          id=""
          className="flex flex-col flex-1 text-sm font-normal text-[#8F90A6]"
          placeholder="Tìm tên thuốc, bệnh lý, TPCN,... "
        />
      </div>
      <div className="flex items-center justify-between mt-10 px-3">
        <p className="text-main tex-base font-semibold">
          Nội dung bổ ích cho bạn
        </p>
        <p
          className="text-[#626262] text-[13px] font-medium"
          onClick={() => {
            navigate("/listOrder");
          }}
        >
          Xem tất cả {">"}
        </p>
      </div>
      {!!dataPost &&
        !!dataPost.length &&
        dataPost.map((post, postIndex) => {
          return (
            <div className="px-3 flex items-center gap-3 mt-4" key={postIndex}>
              <img
                src={API_URL_IMAGE + post.imgage_home}
                alt=""
                className="w-[115px] h-[77px] object-cover rounded-[13px]"
              />
              <div>
                <p className="text-[#2399E1] font-medium text-xs line-clamp-1">
                  {post.title}
                </p>
                <div
                  className="text-[13px] text-main line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />
                {/* <p className="text-[13px] text-main line-clamp-3 ">
                {post.description}
                </p> */}
              </div>
            </div>
          );
        })}

      {/* Thương hiệu yêu thích */}
      <div className="flex items-center justify-between mt-10  px-3">
        <p className="text-main tex-base font-semibold">
          Thương hiệu yêu thích
        </p>
        <p className="text-[#626262] text-[13px] font-medium">
          Xem tất cả {">"}
        </p>
      </div>
      <SliderHome />
      <div>
        <img
          src={Images.iconNgocDong}
          alt=""
          className="w-[50%] h-auto object-contain mx-auto"
        />
      </div>
      <ModalLogin ref={refModalLogin} />
    </div>
  );
};

export default Home;
