import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import React from "react";
import { CustomNavigationBotom } from "./bottomTab";
import Profile from "../pages/profile";
import QrCode from "../pages/qrCode";
import ListProduct from "../pages/listProduct";
import HistoryOrder from "../pages/historyOrder";
import Coins from "../pages/coins";
import DetailPost from "../pages/listPost/detailPost";
import ListPost from "../pages/listPost";
const AppNavigation = () => {
  return (
    <div className="h-screen relative flex flex-col ">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/coins" element={<Coins />}></Route>
          <Route path="/qrCode" element={<QrCode />}></Route>
          <Route path="/listProduct" element={<ListProduct />}></Route>
          <Route path="/historyOrder" element={<HistoryOrder />}></Route>
          <Route path="/listOrder" element={<ListPost />}></Route>
          <Route path="/detailPost/:id" element={<DetailPost />}></Route>
        </Routes>
      </div>
      <CustomNavigationBotom />
    </div>
  );
};
export default AppNavigation;
