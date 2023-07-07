import Image from "next/image";
import Link from "next/link";
import React from "react";
import HomePage from "./Home/page";
// import LoginPage from "./Desktop/SignIn/page";

export default function Home() {
  return (
    <div>
      <div className="w-full">
        <div className="md:hidden">
          <HomePage />
        </div>
        <div className="hidden md:block">{/* <LoginPage /> */}</div>
      </div>
    </div>
  );
}
