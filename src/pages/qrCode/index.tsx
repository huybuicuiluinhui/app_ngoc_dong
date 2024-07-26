import React from "react";
import Header from "../../components/header";
import QRCode from "react-qr-code";
import { useAuth } from "../../context/authContext";

const QrCode = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className="w-screen h-full bg-bg">
      <Header title="QR Code khách hàng" />
      {!!isLoggedIn && !!user && (
        <>
          <div className=" bg-white p-6 m-3 rounded-xl">
            <QRCode
              size={256}
              value={user?.phone}
              className="w-full h-auto  mx-auto block object-contain b"
              viewBox={`0 0 256 256`}
            />
          </div>
          <p className="text-main text-base font-semibold text-center mt-3">
            Hãy đưa màn hình QR Code cho nhân viên
          </p>
          <p className="text-main text-base font-normal text-center">
            Thông tin: {user?.phone}
          </p>
        </>
      )}
    </div>
  );
};

export default QrCode;
