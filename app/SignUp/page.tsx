import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Textarea } from "@/components/ui/textarea";

const SignUpPage = () => {
  return (
    <section className="bg-white h-screen">
      <div className="flex items-center justify-center bg-white ">
        <div className="max-w-md w-full mx-auto p-6 sm:px-8 ">
          <div className="flex flex-col pt-[10%]">
            <h1 className="font-bold text-5xl">Hi!</h1>
            <p className="font-light text-md pt-2 text-gray-500">
              Create a new account
            </p>
          </div>
          <form className="pt-[20%]">
            <div className="flex flex-col-2 justify-between">
              <div className="mr-2 mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-[12px] font-reguler mb-1"
                >
                  Nama Lengkap
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-200 px-2 py-2 rounded-[8px] focus:outline-none focus:ring focus:ring-[#4F78E1]"
                />
              </div>
              <div className="ml-2">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-[12px] font-reguler mb-1"
                >
                  NIK
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-200 px-3 py-2 rounded-[8px] focus:outline-none focus:ring focus:ring-[#4F78E1]"
                />
              </div>
            </div>
            <div className="flex flex-col-2 justify-between">
              <div className="mr-2 mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-[12px] font-reguler mb-1"
                >
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-200 px-2 py-2 rounded-[8px] focus:outline-none focus:ring focus:ring-[#4F78E1]"
                />
              </div>
              <div className="ml-2">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-[12px] font-reguler mb-1"
                >
                  Nomor Handphone
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-200 px-3 py-2 rounded-[8px] focus:outline-none focus:ring focus:ring-[#4F78E1]"
                />
              </div>
            </div>
            <div className="flex flex-col-2 justify-between">
              <div className="mr-2 mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-[12px] font-reguler mb-1"
                >
                  Kata sandi
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-200 px-2 py-2 rounded-[8px] focus:outline-none focus:ring focus:ring-[#4F78E1]"
                />
              </div>
              <div className="ml-2">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-[12px] font-reguler mb-1"
                >
                  Tipe
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-200 px-3 py-2 rounded-[8px] focus:outline-none focus:ring focus:ring-[#4F78E1]"
                />
              </div>
            </div>
            <div className="mr-2 mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-[12px] font-reguler mb-1"
              >
                Kata sandi
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-200 px-2 py-2 rounded-[8px] focus:outline-none focus:ring focus:ring-[#4F78E1]"
              />
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="block text-gray-700 text-[12px] font-reguler mb-1"
              >
                Alamat
              </label>
              <Textarea
                placeholder=""
                className="border-none bg-gray-200 rounded-[8px]"
              />
            </div>

            <div className="pt-10">
              <div className="my-2">
                <div className="my-2">
                  <Link href="/member/Dashboard">
                    <button
                      type="submit"
                      className="w-1/2 bg-[#4F78E1] text-white py-2 px-4 rounded-[10px] hover:shadow-lg transition-all duration-300 ease-in-out"
                    >
                      Daftar Sebagai Anggota
                    </button>
                  </Link>
                </div>
                <div>
                  <Link href="/customer/Dashboard">
                    <button
                      type="submit"
                      className="w-1/2 bg-[#4F78E1] text-white py-2 px-4 rounded-[10px] hover:shadow-lg transition-all duration-300 ease-in-out"
                    >
                      Daftar Sebagai Nasabah
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
