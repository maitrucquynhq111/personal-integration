"use client";
import React from "react";
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
    console.log(
      "🚀 ~ ProductDetails ~ window.affiliateId:",
      windowVar?.affiliateId
    );
    const response = await fetch(
      "https://demo-affiliate-backend.onrender.com/create-checkout-session",
      {
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
      }
    );

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

// export default function Home() {
//   // return (
//   //   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//   //     <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//   //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Thanh Toán</h2>

//   //       {/* Form thông tin thanh toán */}
//   //       <form>
//   //         <div className="mb-4">
//   //           <label
//   //             className="block text-gray-700 font-medium mb-2"
//   //             htmlFor="name"
//   //           >
//   //             Họ và tên
//   //           </label>
//   //           <input
//   //             type="text"
//   //             id="name"
//   //             placeholder="Nhập họ và tên"
//   //             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//   //           />
//   //         </div>

//   //         <div className="mb-4">
//   //           <label
//   //             className="block text-gray-700 font-medium mb-2"
//   //             htmlFor="email"
//   //           >
//   //             Email
//   //           </label>
//   //           <input
//   //             type="email"
//   //             id="email"
//   //             placeholder="Nhập email"
//   //             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//   //           />
//   //         </div>

//   //         <div className="mb-4">
//   //           <label
//   //             className="block text-gray-700 font-medium mb-2"
//   //             htmlFor="card"
//   //           >
//   //             Số thẻ
//   //           </label>
//   //           <input
//   //             type="text"
//   //             id="card"
//   //             placeholder="0000 0000 0000 0000"
//   //             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//   //           />
//   //         </div>

//   //         <div className="flex gap-4">
//   //           <div className="w-1/2">
//   //             <label
//   //               className="block text-gray-700 font-medium mb-2"
//   //               htmlFor="expiry"
//   //             >
//   //               Hạn dùng (MM/YY)
//   //             </label>
//   //             <input
//   //               type="text"
//   //               id="expiry"
//   //               placeholder="MM/YY"
//   //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//   //             />
//   //           </div>
//   //           <div className="w-1/2">
//   //             <label
//   //               className="block text-gray-700 font-medium mb-2"
//   //               htmlFor="cvc"
//   //             >
//   //               CVC
//   //             </label>
//   //             <input
//   //               type="text"
//   //               id="cvc"
//   //               placeholder="123"
//   //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//   //             />
//   //           </div>
//   //         </div>

//   //         <button
//   //           type="submit"
//   //           className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
//   //         >
//   //           Thanh Toán
//   //         </button>
//   //       </form>
//   //     </div>
//   //   </div>
//   // );
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
