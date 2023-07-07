import Image from "next/image";
import Link from "next/link";
import React from "react";
import DropdownTransaksiPage from "../DropdownTransaksi/page";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

const DisplayPage = () => {
  return (
    <section className="bg-gray-100 h-auto w-full max-w-full">
      <div
        style={{
          backgroundImage: 'url("/image/dsb.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
        className="custom-border-radius"
      >
        <header className="w-full h-[210px]">
          {/* <NavbarPage /> */}
          <div>
            <div className="navbar bg-base-100 px-4 flex flex-wrap pt-4 items-center">
              <div className="flex items-center">
                <button className="btn btn-square btn-ghost ">
                  <div>
                    {SHEET_SIDES.map((side) => (
                      <Sheet key={side}>
                        <SheetTrigger asChild>
                          <Button className="shadow-none p-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 text-white"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 012 10z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </Button>
                        </SheetTrigger>
                        <SheetContent
                          side={side}
                          className="bg-[#4F78E1] text-white border-0"
                        >
                          <SheetHeader>
                            <div className="w-full max-w-full">
                              <div className="flex justify-start items-center">
                                <Image
                                  src="/image/logo.jpg"
                                  alt="logo"
                                  width={200}
                                  height={137}
                                  className="mb-2"
                                />
                              </div>
                            </div>
                            <hr className="border-[#98B4FD]" />
                          </SheetHeader>
                          <div className="w-full max-w-full">
                            <div className="flex flex-col justtify-start items-start text-white">
                              <div className="w-full max-w-full border-b-[1px] border-[#98B4FD]">
                                <Link
                                  href="/customer/Dashboard"
                                  className="w-full max-w-full"
                                >
                                  <div className="flex flex-wrap  hover:bg-white hover:bg-opacity-[30%] my-4 p-4 w-full duration-300 transition-all ease-in-out rounded-xl">
                                    <div className="flex justify-start items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                      >
                                        <path d="M12 9a1 1 0 01-1-1V3c0-.553.45-1.008.997-.93a7.004 7.004 0 015.933 5.933c.078.547-.378.997-.93.997h-5z" />
                                        <path d="M8.003 4.07C8.55 3.992 9 4.447 9 5v5a1 1 0 001 1h5c.552 0 1.008.45.93.997A7.001 7.001 0 012 11a7.002 7.002 0 016.003-6.93z" />
                                      </svg>
                                    </div>
                                    <div className="pl-6">Dashboard</div>
                                  </div>
                                </Link>
                              </div>

                              <Link
                                href="/customer/Profile"
                                className="w-full max-w-full"
                              >
                                <div className="flex flex-wrap hover:bg-white hover:bg-opacity-[30%] my-2 p-4 w-full duration-300 transition-all ease-in-out rounded-xl">
                                  <div className="flex justify-start items-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="w-5 h-5"
                                    >
                                      <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                                    </svg>
                                  </div>
                                  <div className="pl-6">Profile</div>
                                </div>
                              </Link>

                              <Link href="" className="w-full max-w-full">
                                <div className="flex flex-wrap items-center hover:bg-white hover:bg-opacity-[30%] py-1 px-4 w-full duration-300 transition-all ease-in-out rounded-xl">
                                  <DropdownTransaksiPage />
                                </div>
                              </Link>
                            </div>
                          </div>

                          <SheetFooter className="mt-[124%] border-t-[1px] border-[#98B4FD]">
                            <SheetClose asChild>
                              <Link href="/home">
                                <div className="flex flex-wrap hover:bg-white hover:bg-opacity-[30%] my-2 p-4 w-full duration-300 transition-all ease-in-out rounded-xl text-white">
                                  <div className="flex justify-start items-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="w-5 h-5"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                  <div className="pl-6">Logout</div>
                                </div>
                              </Link>
                            </SheetClose>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>
                    ))}
                  </div>
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
      </div>
      {/* Profil Dashbord Start */}
      <section>
        <Link href="/customer/Profile">
          <div className="w-full max-w-full h-auto">
            <div className="container mx-auto relative">
              <div className="absolute -top-[80px] left-0 z-10 flex flex-wrap justify-center items-center bg-white mx-4 max-w-full w-[398px] p-6 h-[150px] rounded-[8px] drop-shadow-xl">
                <div className="flex flex-col pr-8 text-end mb-4">
                  <h1 className="font-medium text-2xl">GusHer</h1>
                  <p className=" text-sm text-gray-400">Nasabah</p>
                </div>
                <div>
                  <Image
                    src="/image/pf.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="mb-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>
      {/* Profil Dashboard End */}

      {/* Data Start */}
      <div>
        <div>
          {/* Data Pinjaman Start */}
          <Link href="/customer/DataAnggota">
            <div className="relative">
              <div className="pt-[100px] px-4">
                <div className="flex justify-center items-center w-full max-w-full">
                  <div className="bg-white flex flex-wrap justify-start pl-8 items-center w-full h-[150px] rounded-[8px] drop-shadow-xl">
                    <div className="pr-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-12 h-12 text-[#4F78E1]"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="font-bold text-2xl">Rp 94.405.000,-</h1>
                      <p className="text-[16px] mt-2 font-light text-gray-500">
                        Pinjaman
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Data Pinjaman End */}
          <Link href="/customer/DataAnggota">
            <div className="relative">
              <div className="pt-8 px-4">
                <div className="flex justify-center items-center w-full max-w-full">
                  <div className="bg-white flex flex-wrap justify-start pl-8 items-center w-full h-[150px] rounded-[8px] drop-shadow-xl">
                    <div className="pr-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-12 h-12 text-[#4F78E1]"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8.5H1v6A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-6zM3 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm4.75-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="font-bold text-2xl">Rp 12.017.000,-</h1>
                      <p className="text-[16px] mt-2 font-light text-gray-500">
                        Simpanan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/customer/DataAnggota">
            <div className="relative pb-10">
              <div className="pt-8 px-4">
                <div className="flex justify-center items-center w-full max-w-full">
                  <div className="bg-white flex flex-wrap justify-start pl-8 items-center w-full h-[150px] rounded-[8px] drop-shadow-xl">
                    <div className="pr-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-12 h-12 text-[#4F78E1]"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="font-bold text-2xl">Rp 0,-</h1>
                      <p className="text-[16px] mt-2 font-light text-gray-500">
                        Denda
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Data End */}
    </section>
  );
};

export default DisplayPage;
