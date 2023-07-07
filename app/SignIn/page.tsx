import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <section className="bg-white h-screen">
      <div className="flex items-center justify-center bg-white ">
        <div className="max-w-md w-full mx-auto p-6 sm:px-8 ">
          <div className="flex flex-col pt-[10%]">
            <h1 className="font-bold text-5xl">Selamat Datang!</h1>
            <p className="font-light text-md pt-2 text-gray-500">
              Sign in to continue
            </p>
          </div>
          <div className="pt-[36%]">
            <ul>
              <Link
                href="/"
                className="flex justify-between items-center w-full max-w-full border-2 border-[#4F78E1] rounded-[10px] bg-[#4F78E1]"
              >
                <button className="w-full  text-white px-3 py-2 rounded-[10px] focus:outline-none focus:ring focus:ring-[#4F78E1]">
                  Masuk dengan Akun Google
                </button>
                <div className="bg-white w-[44px] h-[44px] flex items-center justify-center rounded-r-[10px]">
                  <Image
                    src="/image/cong.png"
                    alt="logo"
                    width={26}
                    height={26}
                    className=""
                  />
                </div>
              </Link>
            </ul>
          </div>
          <div className="my-4 pt-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-700 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-700">
            <p className="mx-4 mb-0 text-center font-light text-[#4F78E1]">
              Or
            </p>
          </div>
          <form className="pt-[4%]">
            <div className="mb-8">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-reguler mb-1"
              >
                Nama Pengguna atau Alamat Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-200 px-3 py-2 rounded-[10px] focus:outline-none focus:ring focus:ring-[#4F78E1]"
              />
            </div>
            <div className="mb-10">
              <div className="grid grid-cols-2">
                <label
                  htmlFor="password"
                  className="text-gray-700 text-sm font-reguler mb-1"
                >
                  Kata Sandi
                </label>
                <label
                  htmlFor="password"
                  className="pl-20 text-[#4F78E1] text-xs font-light mb-1"
                >
                  Lupa Password?
                </label>
              </div>

              <input
                type="password"
                id="password"
                className="w-full bg-gray-200 px-3 py-2 rounded-[10px] focus:outline-none focus:ring-2  focus:ring-[#4F78E1]"
              />
            </div>
            <div className="my-2">
              <Link href="/admin/Dashboard">
                <button
                  type="submit"
                  className="w-1/2 bg-[#4F78E1] text-white py-2 px-4 rounded-[10px] hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  Masuk Sebagai Admin
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
