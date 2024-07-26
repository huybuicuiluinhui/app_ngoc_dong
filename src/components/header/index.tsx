import React from "react";
import Images from "../../static";
import { useNavigate } from "react-router-dom";

const Header = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 999 }}>
      <div className="w-full bg-main flex items-center justify-between py-5 px-[20px]  pt-14">
        <div className="flex items-center gap-5">
          <div
            onClick={() => {
              navigate(-1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <rect width="35" height="35" rx="17.5" fill="#FEFEFE" />
              <path
                d="M14.828 17.364L19.778 22.314L18.364 23.728L12 17.364L18.364 11L19.778 12.414L14.828 17.364Z"
                fill="#191E6F"
              />
            </svg>
          </div>
          <p className="text-white text-base ">{title}</p>
        </div>
        <img src={Images.iconNoti} alt="" className="w-6 h-6 object-contain" />
      </div>
    </div>
  );
};

export default Header;
