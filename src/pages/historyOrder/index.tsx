import React from "react";
import Header from "../../components/header";

const HistoryOrder = () => {
  return (
    <div className="w-screen h-full bg-bg overflow-x-hidden no-scrollbar pb-32">
      <Header title="Lịch sử đơn" />
      <div className="flex flex-col  bg-bg px-3 pt-8   ">
        {Array(10)
          .fill(0)
          .map((item, index) => {
            return (
              <div className="w-full">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-main text-sm font-bold">
                    Đơn hàng: ZNjkA9G8hSD
                  </p>
                  <p className="text-[#666] text-xs font-normal">
                    20:00 - 23/12/2023
                  </p>
                </div>
                <div className="border border-[#C7C7C7] rounded-[10px] py-2 px-3">
                  <div className="flex  justify-between">
                    <div className=" flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="21"
                        viewBox="0 0 19 21"
                        fill="none"
                      >
                        <path
                          d="M9 2.23801e-08C7.3431 2.23801e-08 6.0001 1.34 6 3V4.0625H5C4.0855 4.0257 2.6819 4.6231 2.1563 6.0938L1 6.0625C0.4477 6.0625 -9.99833e-05 6.5092 1.67453e-08 7.0625C1.67453e-08 7.6158 0.4477 8.063 1 8.062H2V9.062H1C0.4477 9.062 -9.99833e-05 9.509 1.67453e-08 10.062C1.67453e-08 10.616 0.4477 11.062 1 11.062H2V12.062H1C0.4477 12.062 -9.99833e-05 12.509 1.67453e-08 13.062C1.67453e-08 13.616 0.4477 14.063 1 14.062H2V15.062H1C0.4477 15.062 -9.99833e-05 15.509 1.67453e-08 16.062C1.67453e-08 16.616 0.4477 17.063 1 17.062H2C2 18.719 3.3431 20.063 5 20.062H12C13.6569 20.062 15 18.719 15 17.062V16.062L16 16.031C17.6569 16.031 18.9999 14.691 19 13.031V3C19 1.3401 17.6568 -0.000199978 16 2.23801e-08H9ZM16 2C16.5523 2 17.0001 2.4467 17 3V13C17 13.553 16.5523 14 16 14L15 14.031V7.0625C15 5.4056 13.6569 4.0625 12 4.0625H8V3.0312C8 2.478 8.4477 2.0312 9 2.0312L16 2ZM5 6.0625H12C12.5523 6.0625 13 6.5102 13 7.0625V16.031V17.062C13 17.615 12.5523 18.063 12 18.062H5C4.4477 18.062 4 17.615 4 17.062V16.031V15.062V7.0625C4 6.7859 4.1003 6.5246 4.2813 6.3438C4.4622 6.1628 4.7239 6.0625 5 6.0625Z"
                          fill="#191E6F"
                        />
                      </svg>
                      <div>
                        <p className="text-sm text-main">
                          Đơn hàng : 098123786781263
                        </p>
                        <p className="text-[#D60013] font-bold text-sm">
                          899.000 đ
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-[#D60013]  font-semibold">
                      +12 điểm
                    </p>
                  </div>
                  <p className="text-right text-[#666] text-xs">
                    20:00 - 23/12/2023
                  </p>
                </div>
                <div className="w-full rounded-[4px] bg-[#E6E6E6] px-[14px] py-3 my-5 h-[100px] relative">
                  <div className="absolute bg-white top-[-10px] rounded-[4px] left-[15px] px-4 py-[2px]">
                    <p className="text-black text-xs">Note đơn thuốc</p>
                  </div>
                  <p className="text-black text-xs line-clamp-5">
                    Thuốc Metalogin Sáng 1 viên, chiều 1 viên, tối 2 viên uống
                    liên tục trong vòng 1 tuầnhuốc Metalogin Sáng 1 viên, chiều
                    1 viên, tối 2 viên uống liên tục trong vòng 1 tuần huốc
                    Metalogin Sáng 1 viên, chiều 1 viên, tối 2 viên uống liên
                    tục trong vòng 1 tuầnhuốc Metalogin Sáng 1 viên, chiều 1
                    viên, tối 2 viên uống liên tục trong vòng 1 tuầnhuốc
                    Metalogin Sáng 1 viên, chiều 1 viên, tối 2 viên uống liên
                    tục trong vòng 1 tuần
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HistoryOrder;
