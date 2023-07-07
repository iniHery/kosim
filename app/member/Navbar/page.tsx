import Image from "next/image";
import Link from "next/link";
import React from "react";
import SidemenuPage from "../Sidemenu/page";

const NavbarPage = () => {
  return (
    <section>
      <header>
        <div className="bg-[#4F78E1] pb-4">
          <div className="navbar bg-base-100 px-4 flex flex-wrap pt-4 items-center">
            <div className="flex items-center">
              <button className="btn btn-square btn-ghost">
                <SidemenuPage />
              </button>
            </div>
            <div className="flex-1">
              <a className="btn btn-ghost normal-case font-light text-2xl ml-4 text-white">
                Dashboard
              </a>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default NavbarPage;
