import React from "react";
import Images from "../../static";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import voucherApis from "../../apis/voucher.apis";
import { API_URL_IMAGE } from "../../utils/contanst";
import LoadingScreen from "../../components/screenLoading/loading";
import { useSnackbar } from "zmp-ui";

const ExchangeVoucher = () => {
  const queryClient = useQueryClient();
  const { openSnackbar } = useSnackbar();
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["dataVoucherExChangeFetchFetch"],
    queryFn: () => voucherApis.getListVoucherChange(),
  });
  const dataVoucherExChange = data?.data.data;
  const updateMutation = useMutation({
    mutationFn: voucherApis.updateVoucher,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["dataMyVoucherFetch"] });
      openSnackbar({
        text: `${data.data.message}`,
        type: "success",
      });
      refetch();
    },
    onError: (err) => {
      console.log("lõi", err);
    },
  });
  return (
    <div className="w-full h-full px-3 pt-3 overflow-x-hidden no-scrollbar relative pb-48">
      <div className="flex items-center justify-between">
        <p className="text-main text-xs font-medium">Đổi điểm lấy voucher</p>
        <p className="text-[#626262] text-xs font-medium">Xem tất cả {">"}</p>
      </div>
      {!!dataVoucherExChange &&
        !!dataVoucherExChange.length &&
        dataVoucherExChange.map((item, index) => {
          return (
            <div
              className="bg-white rounded-[4px] flex justify-between px-[10px] py-[10px] mt-3"
              key={index}
            >
              <img
                src={API_URL_IMAGE + item?.image}
                alt=""
                className="w-[79px] h-[73px] object-cover"
              />
              <div className="flex flex-1 flex-col ml-2">
                <p className="text-main text-[15px] font-medium line-clamp-1">
                  {item?.describe}
                </p>
                <p className="text-[#28293D] text-[11px] font-normal line-clamp-2">
                  {item?.note}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <img
                    src={Images.iconXu}
                    alt=""
                    className="w-[28px] h-[28px] object-contain"
                  />
                  <p className="text-[#B86609] text-[15px] font-semibold">
                    {item?.point} <span className="font-normal">điểm</span>
                  </p>
                </div>
                <div
                  className="bg-main  rounded-[12px] py-1 px-4 mt-1"
                  onClick={() => {
                    updateMutation.mutate(item.id);
                  }}
                >
                  <p className="text-[#E2EDF4] text-xs text-center">Đổi ngay</p>
                </div>
              </div>
            </div>
          );
        })}
      <div className="flex items-center justify-between my-3">
        <p className="text-main text-xs font-medium">Đổi quà tặng</p>
        <p className="text-[#626262] text-xs font-medium">Xem tất cả {">"}</p>
      </div>
      <div>
        <div className="grid grid-cols-2  gap-4">
          {Array(10)
            .fill(0)
            .map((product) => (
              <div className=" bg-white rounded-[10px] px-3  pb-1 ">
                <div className=" w-full flex items-center justify-center ">
                  <img
                    src={Images.iconNgocDong}
                    alt={product.name}
                    className="w-[90px] h-[90px] mb-4 object-cover"
                  />
                </div>
                <p className="font-semibold text-xs text-[#191E6F] mt-1 line-clamp-3">
                  Viên uống tiền đình khang kigona eloghe hỗ trợ lưu thông máu
                  não hỗ trợ điều trị đau đầu sổ mũi
                </p>
                <p className="text-[#B86609] text-xs font-normal line-clamp-1 mt-1">
                  1.000 điểm/ hộp
                </p>
                <div className="bg-main  rounded-[12px] py-1 px-4 mt-1 mx-auto w-fit mb-2">
                  <p className="text-[#E2EDF4] text-xs">Đổi ngay</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      {isFetching && <LoadingScreen />}
    </div>
  );
};

export default ExchangeVoucher;
