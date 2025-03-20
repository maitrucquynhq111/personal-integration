"use client";
import React from "react";
import { API_URL } from "~app/utils/constants";
// import Image from "next/image";
// import { useNavigate } from "react-router-dom";
// import { useStripe } from "@stripe/react-stripe-js";

function ProductDetails() {
  //   const stripe = useStripe();

  // Thông tin sản phẩm
  const product = {
    name: "Marketing plan",
    price: 150,
    description:
      "Sed non massa pharetra, hendrerit turpis in, fermentum enim. Quisque elementum blandit massa eget egestas. Vivamus malesuada vehicula condimentum. Praesent quis erat nisi. Donec varius risus non sapien convallis vehicula. Proin suscipit auctor dictum. Pellentesque et est non lorem sollicitudin euismod. ",
  };

  const submitCheckout = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const windowVar: any = window;
    const response = await fetch(API_URL + "/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productName: product.name,
        price: product.price,
        quantity: 1,
        affiliateId: windowVar?.affiliateId || "",
      }),
    });

    const session = await response.json();
    console.log("🚀 ~ submitCheckout ~ session:", session);

    // Redirect to Stripe Checkout
    if (session.url) {
      window.location.href = session.url;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {product.name}
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          Price: <span className="font-semibold">${product.price}</span>
        </p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <button
          onClick={() => submitCheckout()}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
