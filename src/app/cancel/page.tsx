import Link from "next/link";
import React from "react";

const Cancel = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-red-600">
          Thanh toán thất bại!
        </h1>
        <p className="mt-4 text-gray-600">
          Có lỗi xảy ra trong quá trình thanh toán. Vui lòng thử lại sau.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="px-6 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
          >
            Quay về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
