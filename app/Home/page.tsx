import Image from "next/image";
import Link from "next/link";
import React from "react";
import SignInPage from "../SignIn/page";

const HomePage = () => {
  return (
    <div className="w-full h-screen">
      <div
        style={{
          backgroundImage: 'url("image/bg4.svg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="pt-[110%] w-full h-full flex justify-center items-center">
          <ul className="flex flex-col flex-shrink-0">
            <Link href="/SignIn" className="py-5 ">
              <button className="flex items-center justify-center bg-[#4F78E1] w-[320px] h-[40px] text-[14px] rounded-[10px] text-white">
                Masuk
              </button>
            </Link>
            <Link href="/SignUp" className="py-3">
              <button className="flex items-center justify-center bg-white border border-[#4F78E1] w-[320px] h-[40px] text-[14px] rounded-[10px] text-[#4F78E1]">
                Daftar Sekarang
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
