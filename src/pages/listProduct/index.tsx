import React from "react";
import Header from "../../components/header";
import Images from "../../static";

const ListProduct = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description 1",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description 2",
    },
    {
      id: 4,
      name: "Product 2",
      description: "Description 2",
    },
    {
      id: 3,
      name: "Product 2",
      description: "Description 2",
    },
    // Add more products as needed
  ];

  return (
    <div className="w-screen h-full bg-bg">
      <Header title="Danh sách sản phẩm" />
      <div className="flex flex-col flex-1 bg-bg px-3 mt-8 overflow-x-hidden no-scrollbar relative pb-32">
        <div className="grid grid-cols-3  gap-4">
          {products.map((product) => (
            <div key={product.id} className="  ">
              <div className="border border-[#1153DB] rounded-[10px] p-1">
                <img
                  src={Images.iconNgocDong}
                  alt={product.name}
                  className="w-[85px] h-[59px] mb-4 object-cover"
                />
              </div>
              <p className="font-semibold text-xs text-[#191E6F] mt-2 line-clamp-2">
                {product.name}
              </p>
              <p className="text-[#3E9FFE] text-sm font-bold line-clamp-1">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
