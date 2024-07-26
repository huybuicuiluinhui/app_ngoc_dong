import React from "react";
import Header from "../../components/header";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import postApis from "../../apis/post.apis";
import Images from "../../static";
import { API_URL_IMAGE } from "../../utils/contanst";
import LoadingScreen from "../../components/screenLoading/loading";

const DetailPost = () => {
  const { id } = useParams<{ id: string }>();
  const { data: dataDetailPost, isFetching } = useQuery({
    queryKey: ["dataDetailPostFetch", id],
    queryFn: () => postApis.getDetailPost(Number(id)),
  });
  const item = dataDetailPost?.data.data;
  return (
    <div className="w-screen  min-h-screen bg-background">
      <Header title="Chi tiết sự kiện" />
      <div>
        <img
          src={!!item ? API_URL_IMAGE + item?.banner : Images.bannerTest}
          alt=""
          className="w-screen h-auto object-contain"
        />
        <div className="px-3">
          <div className="border-l-main border-l-[4px] pl-2 mt-4">
            <p className="text-[#535353] text-[13px] font-semibold">
              {item?.title}
            </p>
          </div>
          <div
            className="text-[13px] text-main line-clamp-3"
            dangerouslySetInnerHTML={{ __html: item?.description }}
          />
          <div
            className="text-[13px] text-main line-clamp-3"
            dangerouslySetInnerHTML={{ __html: item?.note }}
          />
        </div>
      </div>
      {isFetching && <LoadingScreen />}
    </div>
  );
};

export default DetailPost;
