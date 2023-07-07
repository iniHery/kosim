"use client";
import Image from "next/image";
import Link from "next/link";
import DropdownTransaksiPage from "../DropdownTransaksi/page";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

const DisplayPage = () => {
  return (
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

                <Link href="/customer/Profile" className="w-full max-w-full">
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
  );
};

export default DisplayPage;
