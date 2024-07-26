import React from "react";
import Header from "../../components/header";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/authContext";
import ItemPost from "./itemPost";
import postApis from "../../apis/post.apis";
import { IPost } from "../../types/post.type";
import LoadingScreen from "../../components/screenLoading/loading";
import { Page } from "zmp-ui";
import LoadMore from "../../components/screenLoading/loadMore";

const ListPost = () => {
  const { user } = useAuth();
  const [dataOrder, setDataOrder] = React.useState<IPost[]>([]);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastpage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);

  const { data, isFetching } = useQuery({
    queryKey: ["dataListOrderFetch"],
    queryFn: async () => {
      try {
        const response = await postApis.getAllPost(1);
        if (!!response && !!response.data && !!response.data.data) {
          setDataOrder(response.data.data.data);
          setLastpage(response.data.data.last_page);
          return response.data.data.data; // Trả về dữ liệu để useQuery có thể làm việc đúng cách
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
  });

  const listInnerRef = React.useRef(null);
  const onScroll = () => {
    if (listInnerRef.current) {
      // @ts-ignore
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      console.log(scrollTop, scrollHeight, clientHeight);
      if (Math.ceil(scrollTop) + clientHeight === scrollHeight) {
        loadmore();
      }
    }
  };

  const loadmore = async () => {
    if (page >= lastPage) {
      return;
    } else {
      try {
        setIsLoading(true);
        const currentPage = page + 1;
        setPage(currentPage);
        const res = await postApis.getAllPost(currentPage);
        if (res.status) {
          const newData = res?.data?.data?.data.map((item: IPost) => {
            return {
              ...item,
            };
          });
          setDataOrder((prevData) => [...prevData, ...newData]);
        } else {
          alert("Có lỗi xảy ra");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  console.log("dataOrder", dataOrder);
  console.log("listInnerRef", listInnerRef.current);
  return (
    <div className="w-full h-full min-h-screen bg-background">
      <Header title="Danh sách sự kiện" />
      <Page
        className="w-full h-full pb-40 bg-[#E9F6FF]"
        hideScrollbar
        ref={listInnerRef}
        onScroll={onScroll}
      >
        {!!dataOrder &&
          !!dataOrder.length &&
          dataOrder.map((item, index) => {
            return <ItemPost key={index} item={item} />;
          })}
      </Page>
      {isLoading && <LoadMore />}
      {isFetching && <LoadingScreen />}
    </div>
  );
};

export default ListPost;
