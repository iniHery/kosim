import Image from "next/image";
import Link from "next/link";
import React from "react";
import SidemenuPage from "../Sidemenu/page";
// import DataPinAnggotaPage from "../MemberLoanData/page";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DropdownTransaksiPage = () => {
  return (
    <section className="w-full">
      <div className="w-full flex justify-between items-center">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="max-w-1/2">
              <div className="w-full flex justify-start items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z" />
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="pl-2 pr-4">
                <div className="w-[100px]">Transaksi</div>
              </div>
              <div className="flex items-center ml-[50%]">
                <span className="pl-2"></span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="w-full max-w-full">
                <div className="flex flex-col">
                  <Link href="/member/MemberLoanDetail">
                    <p className="px-2 py-4 my-1">Detail Pinjaman Anggota</p>
                  </Link>
                  <Link href="/member/MemberSavingDetail">
                    <p className="px-2 py-4 my-1">Detail Simpanan Anggota</p>
                  </Link>
                  <Link href="/member/CustomerLoanData">
                    <p className="px-2 py-4 my-1">Pinjaman Nasabah</p>
                  </Link>
                  <Link href="/member/CustomerSavingData">
                    <p className="px-2 py-4 my-1">Simpanan Nasabah</p>
                  </Link>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default DropdownTransaksiPage;
