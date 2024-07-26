import React, { useState } from "react";
import Images from "../../static";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../context/authContext";
import BottomSheet from "../bottomSheet/BottomSheet";
import authApis from "../../apis/auth.apis";
import { useSnackbar } from "zmp-ui";
interface IProps {}
const ModalLogin = React.forwardRef(
  (
    props: IProps,
    ref: React.Ref<{ setVisible: (visible: boolean) => void }>
  ) => {
    const [visible, setVisible] = React.useState<boolean>(false);
    const { openSnackbar } = useSnackbar();
    React.useImperativeHandle(ref, () => {
      return {
        setVisible,
      };
    });
    const { setIsLoggedIn, setUser } = useAuth();
    const queryClient = useQueryClient();
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const loginMutation = useMutation({
      mutationFn: authApis.login,
      onSuccess: (data) => {
        if (data.data.status && data?.data?.data?.access_token) {
          console.log(data.data);
          localStorage.setItem("user", JSON.stringify(data.data.data.user)); // Lưu user vào localStorage
          setUser(data.data.data.user);
          localStorage.setItem("access_token", data?.data?.data?.access_token);
          setVisible(false);
          setIsLoggedIn(true);
          openSnackbar({
            text: "Đã đăng nhập thành công",
            type: "success",
          });
          // queryClient.invalidateQueries({
          //   predicate: (query) => query.queryKey[0] === "dataInfo",
          // });
        } else {
          return;
        }
      },
      onError: (err) => {
        console.log("lõi", err);
      },
    });
    const handleLogin = () => {
      if (phone.length === 0 || password.length === 0) {
        openSnackbar({
          text: "Nhập đủ thông tin đăng nhập",
          type: "warning",
        });
      } else {
        loginMutation.mutate({
          phone,
          password,
        });
      }
    };
    return (
      <BottomSheet isOpen={visible} setIsOpen={setVisible}>
        <div className="flex flex-col  gap-[10px] pb-10">
          <img
            src={Images.iconNgocDong}
            className="w-[100px] h-[100px] object-contain self-center "
          />
          <p className="text-[#09121F] text-xl font-semibold text-center">
            Tính năng cần kích hoạt tài khoản
          </p>
          <p className="text-center text-xs text-[#06070C] font-normal">
            Cho phép Hệ thống dược Ngọc Đông xác minh số điện thoại để có thể sử
            dụng đầy đủ tính năng của app. Điều này giúp tăng trải nghiệm của
            quý khách hàng
          </p>
          <input
            type="text"
            placeholder="Nhập số điện thoại..."
            value={phone}
            onChange={(e: any) => setPhone(e?.target?.value)}
            className="rounded-[5px] border  border-[#dedede] px-2 py-[4px] w-[90%] self-center placeholder:text-[#333] text-[#333] text-[15px] font-medium"
          />
          <input
            type="password"
            placeholder="Nhập mật khẩu..."
            value={password}
            onChange={(e: any) => setPassword(e?.target?.value)}
            className="rounded-[5px] border  border-[#dedede] px-2 py-[4px] w-[90%] self-center placeholder:text-[#333] text-[#333] text-[15px] font-medium"
          />
          <div
            className="bg-[#2691CB] rounded-[15px] py-[10px] w-[90%] self-center  mt-2"
            onClick={handleLogin}
          >
            <p className="text-white text-xs text-center">ĐĂNG NHẬP</p>
          </div>
        </div>
      </BottomSheet>
    );
  }
);

export default ModalLogin;
