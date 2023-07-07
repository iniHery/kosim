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

const ProfilePage = () => {
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
                                  href="/member/Dashboard"
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
                                href="/member/Profile"
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

                              <Link
                                href="/member/CustomerData"
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
                                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                                    </svg>
                                  </div>
                                  <div className="pl-6">Data Nasabah</div>
                                </div>
                              </Link>
                              <Link href="" className="w-full max-w-full">
                                <div className="flex flex-wrap items-center hover:bg-white hover:bg-opacity-[30%] py-1 px-4 w-full duration-300 transition-all ease-in-out rounded-xl">
                                  <DropdownTransaksiPage />
                                </div>
                              </Link>
                            </div>
                          </div>

                          <SheetFooter className="mt-[100%] border-t-[1px] border-[#98B4FD]">
                            <SheetClose asChild>
                              <Link href="/">
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
                  Profile
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* Profil Dashbord Start */}

      <section>
        <div>
          <div className="relative">
            <div className="pt-[0%]">
              <div className="flex flex-wrap justify-between items-center w-full max-w-full">
                <div className="absolute -top-[130px] left-0 z-10 flex flex-col justify-center items-center bg-white mx-4 p-10 w-[414px] max-w-full h-[339px] rounded-[8px] drop-shadow-xl">
                  <div>
                    <Image
                      src="/image/pf.png"
                      alt="logo"
                      width={140}
                      height={137}
                      className="mb-6"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-wrap">
                      <h1 className="pr-4">GusHer</h1>
                      <div className="border-l border-gray-300"></div>
                      <p className="pl-4">Anggota</p>
                    </div>
                    <div className="flex justify-center items-center text-center">
                      <p className="text-sm pt-6 font-light">
                        Muzli Search is a tool for finding great design,
                        illustration, photography, mobile, color palettes, and
                        digital design inspiration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Profil Dashboard End */}
      {/* Data Profile Start */}
      <section>
        <div>
          <div className="relative">
            <div className="pt-[56%] px-4">
              <div className="flex flex-wrap justify-between items-center w-full max-w-full">
                <div className="bg-white w-full h-[150px] rounded-[8px] drop-shadow-lg p-10">
                  <div className=" flex flex-wrap justify-start items-center">
                    <div className="pr-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p>+62 81 - 999 - 392 - 230</p>
                    </div>
                  </div>
                  <div className="p- flex flex-wrap justify-start items-center pt-6">
                    <div className="pr-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                      </svg>
                    </div>
                    <div>
                      <p>idabagusheryana60@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Data Profile End */}
    </section>
  );
};

export default ProfilePage;
