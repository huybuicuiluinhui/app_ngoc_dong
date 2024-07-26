import React from "react";
import Images from "../../static";
import { useAuth } from "../../context/authContext";

const Profile = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="bg-main flex items-center justify-between pt-12 px-3 pb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="13"
          viewBox="0 0 28 13"
          fill="none"
        >
          <rect
            width="27.8223"
            height="2.1532"
            rx="1.0766"
            transform="matrix(-1 0 0 1 27.8223 0)"
            fill="white"
          />
          <rect
            width="17.8063"
            height="2.1532"
            rx="1.0766"
            transform="matrix(-1 0 0 1 17.8066 5.02417)"
            fill="white"
          />
          <rect
            width="22.2579"
            height="2.1532"
            rx="1.0766"
            transform="matrix(-1 0 0 1 22.2578 10.0483)"
            fill="white"
          />
        </svg>
        <div className="flex items-center gap-1">
          <img
            src={Images.imgTest}
            alt=""
            className="w-[35px] h-[35px] object-contain rounded-full"
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
        <img src={Images.iconNoti} alt="" className="w-6 h-6 object-contain" />
      </div>
      <div className="bg-bg px-3 flex flex-col flex-1">
        <p className="text-main text-base font-semibold py-3 ">Tài khoản</p>
        <div className="bg-white  px-3  rounded-[10px] w-full py-3">
          {Array(4)
            .fill(0)
            .map((item, index) => {
              return (
                <div
                  className="flex items-center  justify-between px-[18px] py-3   "
                  key={index}
                >
                  <div className="gap-2 flex items-center">
                    <img
                      src={Images.imgTest}
                      alt=""
                      className="w-8 h-[26px] rounded-[5px]"
                    />
                    <p className="text-main text-[13px] font-medium">
                      Đơn thuốc của tôi
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M13.2677 12.0865L8.27813 7.17635L9.68074 5.75106L16.0956 12.0638L9.78285 18.4786L8.35755 17.076L13.2677 12.0865Z"
                      fill="#191E6F"
                    />
                  </svg>
                </div>
              );
            })}
        </div>
        <p className="text-main text-base font-semibold py-3 ">Về chúng tôi</p>
        {/* 1 */}
        <div className="flex items-stretch justify-between px-3">
          <div className="flex items-center gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13 21V23.5L10 21.5L7 23.5V21H6.5C5.57174 21 4.6815 20.6313 4.02513 19.9749C3.36875 19.3185 3 18.4283 3 17.5V5C3 4.20435 3.31607 3.44129 3.87868 2.87868C4.44129 2.31607 5.20435 2 6 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H13ZM13 19H19V16H6.5C6.10218 16 5.72064 16.158 5.43934 16.4393C5.15804 16.7206 5 17.1022 5 17.5C5 17.8978 5.15804 18.2794 5.43934 18.5607C5.72064 18.842 6.10218 19 6.5 19H7V17H13V19ZM19 14V4H6V14.035C6.16563 14.0115 6.33271 13.9998 6.5 14H19ZM7 5H9V7H7V5ZM7 8H9V10H7V8ZM7 11H9V13H7V11Z"
                fill="#191E6F"
              />
            </svg>
            <p className="text-main text-[13px] font-medium">
              Quy chế và chính sách
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M13.2677 12.0865L8.27813 7.17635L9.68074 5.75106L16.0956 12.0638L9.78285 18.4786L8.35755 17.076L13.2677 12.0865Z"
              fill="#191E6F"
            />
          </svg>
        </div>
        {/* 2 */}
        <div className="flex items-stretch justify-between px-3 mt-[25px]">
          <div className="flex items-center gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.763 17H20V5H4V18.385L5.763 17ZM6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM11 14H13V16H11V14ZM8.567 8.813C8.69692 8.16279 9.00882 7.56285 9.4664 7.08298C9.92397 6.60311 10.5084 6.26304 11.1517 6.10236C11.795 5.94167 12.4707 5.96697 13.1002 6.17532C13.7297 6.38366 14.287 6.76647 14.7075 7.27922C15.1279 7.79196 15.394 8.41355 15.475 9.07166C15.5559 9.72976 15.4483 10.3973 15.1646 10.9966C14.881 11.596 14.433 12.1024 13.8727 12.4571C13.3125 12.8118 12.6631 13 12 13H11V11H12C12.2841 11 12.5623 10.9193 12.8023 10.7673C13.0423 10.6154 13.2343 10.3984 13.3558 10.1416C13.4773 9.8848 13.5234 9.5988 13.4887 9.31684C13.454 9.03489 13.34 8.76858 13.1598 8.54891C12.9797 8.32924 12.7409 8.16523 12.4712 8.07597C12.2015 7.98671 11.912 7.97587 11.6364 8.04471C11.3608 8.11354 11.1104 8.25923 10.9144 8.46482C10.7183 8.6704 10.5847 8.92743 10.529 9.206L8.567 8.813Z"
                fill="#191E6F"
              />
            </svg>

            <p className="text-main text-[13px] font-medium">
              Quy chế và chính sách
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M13.2677 12.0865L8.27813 7.17635L9.68074 5.75106L16.0956 12.0638L9.78285 18.4786L8.35755 17.076L13.2677 12.0865Z"
              fill="#191E6F"
            />
          </svg>
        </div>
        {/* 3 */}

        <div className="flex items-stretch justify-between px-3 mt-[25px]">
          <div className="flex items-center gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.366 10.682C10.3043 12.3305 11.6695 13.6957 13.318 14.634L14.202 13.396C14.3442 13.1969 14.5543 13.0569 14.7928 13.0023C15.0313 12.9478 15.2814 12.9825 15.496 13.1C16.9103 13.8729 18.4722 14.3378 20.079 14.464C20.3298 14.4839 20.5638 14.5975 20.7345 14.7823C20.9052 14.9671 21 15.2094 21 15.461V19.923C21.0001 20.1706 20.9083 20.4094 20.7424 20.5932C20.5765 20.777 20.3483 20.8927 20.102 20.918C19.572 20.973 19.038 21 18.5 21C9.94 21 3 14.06 3 5.5C3 4.962 3.027 4.428 3.082 3.898C3.10725 3.6517 3.22298 3.42352 3.40679 3.25763C3.5906 3.09175 3.82941 2.99995 4.077 3H8.539C8.79056 2.99997 9.0329 3.09475 9.21768 3.26545C9.40247 3.43615 9.51613 3.67022 9.536 3.921C9.66222 5.52779 10.1271 7.08968 10.9 8.504C11.0175 8.71856 11.0522 8.96874 10.9977 9.2072C10.9431 9.44565 10.8031 9.65584 10.604 9.798L9.366 10.682ZM6.844 10.025L8.744 8.668C8.20478 7.50409 7.83535 6.26884 7.647 5H5.01C5.004 5.166 5.001 5.333 5.001 5.5C5 12.956 11.044 19 18.5 19C18.667 19 18.834 18.997 19 18.99V16.353C17.7312 16.1646 16.4959 15.7952 15.332 15.256L13.975 17.156C13.4287 16.9437 12.898 16.6931 12.387 16.406L12.329 16.373C10.3676 15.2567 8.74328 13.6324 7.627 11.671L7.594 11.613C7.30691 11.102 7.05628 10.5713 6.844 10.025Z"
                fill="#191E6F"
              />
            </svg>
            <p className="text-main text-[13px] font-medium">
              Liên hệ hỗ trợ chăm sóc
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M13.2677 12.0865L8.27813 7.17635L9.68074 5.75106L16.0956 12.0638L9.78285 18.4786L8.35755 17.076L13.2677 12.0865Z"
              fill="#191E6F"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Profile;
