"use client";
import Image from "next/image";
import Link from "next/link";
import NavbarPage from "../Navbar/page";
import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DataAnggotaPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-white w-full max-w-full h-full">
      <div>
        Data Anggota
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
                <div className="text-sm">Nama Lengkap</div>
                <div className="text-sm">Hery</div>
              </div>
            </div>

            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Nomor Telepon</div>
                <div>+62 81999392230</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Alamat</div>
                <div>Denpasar</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Status</div>
                <div>Active</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Email</div>
                <div>idabagusheryana@.gmail.com</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>NIK</div>
                <div>0000949283794278</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%] items-center">
                <div>Aksi</div>
                <div className="w-[36px] ">
                  <div className="bg-[#FF4B4B] p-2 rounded-[100%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
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
                <div className="text-sm">Nama Lengkap</div>
                <div className="text-sm">Hery</div>
              </div>
            </div>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Nomor Telepon</div>
                <div>+62 81999392230</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Alamat</div>
                <div>Denpasar</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Status</div>
                <div>Active</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Email</div>
                <div>idabagusheryana@.gmail.com</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>NIK</div>
                <div>0000949283794278</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%] items-center">
                <div>Aksi</div>
                <div className="w-[36px] ">
                  <div className="bg-[#FF4B4B] p-2 rounded-[100%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
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
                <div className="text-sm">Nama Lengkap</div>
                <div className="text-sm">Hery</div>
              </div>
            </div>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Nomor Telepon</div>
                <div>+62 81999392230</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Alamat</div>
                <div>Denpasar</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Status</div>
                <div>Active</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Email</div>
                <div>idabagusheryana@.gmail.com</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>NIK</div>
                <div>0000949283794278</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%] items-center">
                <div>Aksi</div>
                <div className="w-[36px] ">
                  <div className="bg-[#FF4B4B] p-2 rounded-[100%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
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
                <div className="text-sm">Nama Lengkap</div>
                <div className="text-sm">Hery</div>
              </div>
            </div>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Nomor Telepon</div>
                <div>+62 81999392230</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Alamat</div>
                <div>Denpasar</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Status</div>
                <div>Active</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Email</div>
                <div>idabagusheryana@.gmail.com</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>NIK</div>
                <div>0000949283794278</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%] items-center">
                <div>Aksi</div>
                <div className="w-[36px] ">
                  <div className="bg-[#FF4B4B] p-2 rounded-[100%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
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
                <div className="text-sm">Nama Lengkap</div>
                <div className="text-sm">Hery</div>
              </div>
            </div>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Nomor Telepon</div>
                <div>+62 81999392230</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Alamat</div>
                <div>Denpasar</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Status</div>
                <div>Active</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>Email</div>
                <div>idabagusheryana@.gmail.com</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%]">
                <div>NIK</div>
                <div>0000949283794278</div>
              </div>
            </AccordionContent>
            <AccordionContent className="pl-12">
              <div className="grid grid-cols-2 gap-10 grid-rows-1 w-[86%] items-center">
                <div>Aksi</div>
                <div className="w-[36px] ">
                  <div className="bg-[#FF4B4B] p-2 rounded-[100%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
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

export default DataAnggotaPage;
