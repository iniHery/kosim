"use client";
import Image from "next/image";
import Link from "next/link";
import NavbarPage from "../Navbar/page";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DataPinAnggotaPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-white w-full max-w-full h-full">
      <div>
        Data Detail Pinjaman Nasabah
        <NavbarPage />
      </div>
      <div className="w-full px-4">
        <div className="flex w-full max-w-full rounded-[8px] items-center space-x-2 mt-6 border-[1.5px] border-[#4F78E1]">
          <Input
            type="search"
            placeholder="Search..."
            className="border-none text-gray-600 w-full pr-0"
          />
          <Button type="submit" className="bg-[#4F78E1] rounded-r-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Button>
        </div>
      </div>
      <div className="pt-6">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-t">
            <div className="flex flex-wrap items-center">
              <div className="p-3">
                <AccordionTrigger className="bg-[#4F78E1] text-white p-1 rounded-[100%]" />
              </div>
              <div className="grid grid-cols-2 grid-rows-1 w-[86%]">
                <div className="text-sm">Tanggal Pembayaran </div>
                <div className="text-sm">23 - 01 - 2023</div>
              </div>
            </div>

            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Total Pinjaman</div>
                <div>Rp 500.000,-</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Jumlah Pembayaran</div>
                <div>Rp 50.000,-</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Bunga</div>
                <div>Rp 25.000,-</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Sisa</div>
                <div>Rp 475.000,-</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Denda</div>
                <div>Rp 0,-</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%] items-center">
                <div>Aksi</div>
                <div className="w-[36px] flex flex-wrap items-center">
                  <div className="w-full">
                    <div className="flex w-[36px] max-w-full items-center">
                      <div className="flex justify-between items-center">
                        <div className="bg-[#FF4B4B] p-2 rounded-[100%] ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 text-white"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="bg-[#F3F3F3] p-2 ml-2 rounded-[100%]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 text-[#4F78E1]"
                          >
                            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                          </svg>
                        </div>
                        <div className="bg-[#F3F3F3] p-2 ml-2 rounded-[100%]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 text-[#4F78E1]"
                          >
                            <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
                            <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
                          </svg>
                        </div>
                        <div className="bg-[#F3F3F3] p-2 ml-2 rounded-[100%]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 text-[#4F78E1]"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2 4.75C2 3.784 2.784 3 3.75 3h4.836c.464 0 .909.184 1.237.513l1.414 1.414a.25.25 0 00.177.073h4.836c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0116.25 17H3.75A1.75 1.75 0 012 15.25V4.75zm8.75 4a.75.75 0 00-1.5 0v2.546l-.943-1.048a.75.75 0 10-1.114 1.004l2.25 2.5a.75.75 0 001.114 0l2.25-2.5a.75.75 0 10-1.114-1.004l-.943 1.048V8.75z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="bg-[#F3F3F3] p-2 ml-2 rounded-[100%]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 text-[#4F78E1]"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.046.752.097 1.126.153A2.212 2.212 0 0118 8.653v4.097A2.25 2.25 0 0115.75 15h-.241l.305 1.984A1.75 1.75 0 0114.084 19H5.915a1.75 1.75 0 01-1.73-2.016L4.492 15H4.25A2.25 2.25 0 012 12.75V8.653c0-1.082.775-2.034 1.874-2.198.374-.056.75-.107 1.127-.153L5 6.25v-3.5zm8.5 3.397a41.533 41.533 0 00-7 0V2.75a.25.25 0 01.25-.25h6.5a.25.25 0 01.25.25v3.397zM6.608 12.5a.25.25 0 00-.247.212l-.693 4.5a.25.25 0 00.247.288h8.17a.25.25 0 00.246-.288l-.692-4.5a.25.25 0 00-.247-.212H6.608z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <div className="flex flex-wrap items-center">
              <div className="p-3">
                <AccordionTrigger className="bg-[#4F78E1] text-white p-1 rounded-[100%]" />
              </div>
              <div className="grid grid-cols-2 grid-rows-1 w-[86%]">
                <div className="text-sm">Tanggal Pembayaran </div>
                <div className="text-sm">23 - 01 - 2023</div>
              </div>
            </div>

            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Total Pinjaman</div>
                <div>Rp 500.000,-</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Jumlah Pembayaran</div>
                <div>Rp 50.000,-</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Bunga</div>
                <div>Rp 25.000,-</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Sisa</div>
                <div>Rp 475.000,-</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Denda</div>
                <div>Rp 0,-</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%] items-center">
                <div>Aksi</div>
                <div className="w-[36px] flex flex-wrap items-center">
                  <div className="w-full">
                    <div className="flex w-[36px] max-w-full items-center">
                      <div className="flex justify-between items-center">
                        <div className="bg-[#FF4B4B] p-2 rounded-[100%] ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 text-white"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="bg-[#F3F3F3] p-2 ml-2 rounded-[100%]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 text-[#4F78E1]"
                          >
                            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                          </svg>
                        </div>
                        <div className="bg-[#F3F3F3] p-2 ml-2 rounded-[100%]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 text-[#4F78E1]"
                          >
                            <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
                            <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
                          </svg>
                        </div>
                        <div className="bg-[#F3F3F3] p-2 ml-2 rounded-[100%]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 text-[#4F78E1]"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2 4.75C2 3.784 2.784 3 3.75 3h4.836c.464 0 .909.184 1.237.513l1.414 1.414a.25.25 0 00.177.073h4.836c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0116.25 17H3.75A1.75 1.75 0 012 15.25V4.75zm8.75 4a.75.75 0 00-1.5 0v2.546l-.943-1.048a.75.75 0 10-1.114 1.004l2.25 2.5a.75.75 0 001.114 0l2.25-2.5a.75.75 0 10-1.114-1.004l-.943 1.048V8.75z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="bg-[#F3F3F3] p-2 ml-2 rounded-[100%]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 text-[#4F78E1]"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.046.752.097 1.126.153A2.212 2.212 0 0118 8.653v4.097A2.25 2.25 0 0115.75 15h-.241l.305 1.984A1.75 1.75 0 0114.084 19H5.915a1.75 1.75 0 01-1.73-2.016L4.492 15H4.25A2.25 2.25 0 012 12.75V8.653c0-1.082.775-2.034 1.874-2.198.374-.056.75-.107 1.127-.153L5 6.25v-3.5zm8.5 3.397a41.533 41.533 0 00-7 0V2.75a.25.25 0 01.25-.25h6.5a.25.25 0 01.25.25v3.397zM6.608 12.5a.25.25 0 00-.247.212l-.693 4.5a.25.25 0 00.247.288h8.17a.25.25 0 00.246-.288l-.692-4.5a.25.25 0 00-.247-.212H6.608z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default DataPinAnggotaPage;
