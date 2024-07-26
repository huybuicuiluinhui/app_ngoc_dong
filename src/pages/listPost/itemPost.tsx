import React from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../static";
import { API_URL_IMAGE } from "../../utils/contanst";
import { IPost } from "../../types/post.type";
const ItemPost = ({ item }: { item: IPost }) => {
  const navigate = useNavigate();
  return (
    // <div
    //   // className="w-[180px]"
    //   className={`w-[100%] px-2`}
    //   onClick={() => {
    //     navigate(`/detailEvent/${item?.id}`);
    //   }}
    // >
    //   <img
    //     src={item?.image ? item?.image : Images.bannerTest}
    //     alt=""
    //     className={`w-[100%] h-auto object-cover rounded-[9px] mx-auto `}
    //   />
    //   <p className="text-[#535353] text-[13px] line-clamp-2">
    //     {item?.description}
    //   </p>
    // </div>
    <div
      className="px-3 flex items-center gap-3 mt-4"
      key={item.id}
      onClick={() => {
        navigate(`/detailPost/${item?.id}`);
      }}
    >
      <img
        src={API_URL_IMAGE + item.imgage_home}
        alt=""
        className="w-[115px] h-[77px] object-cover rounded-[13px]"
      />
      <div>
        <p className="text-[#2399E1] font-medium text-xs line-clamp-1">
          {item.title}
        </p>
        <div
          className="text-[13px] text-main line-clamp-3"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      </div>
    </div>
  );
};

export default ItemPost;
