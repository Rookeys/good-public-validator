"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "../ui/input";
import {
  AlignJustify,
  ChevronDownIcon,
  Search,
  Star,
  Stethoscope,
} from "lucide-react";
import { StarIcon } from "@heroicons/react/24/solid";

export const Header = () => {
  return (
    <section className="w-full">
      <div className="w-full  h-[57px] flex justify-between items-center px-[16px]">
        <div className="flex gap-[16px]">
          <ul className="w-auto flex gap-[4px]">
            <Image
              src="/images/secondary_header_image_1.png"
              alt="secondary-image-1"
              width={44}
              height={15}
            />
            <p className="text-[12px] text-[#4f6280] whitespace-nowrap">
              이 누리집은 대한민국 공식 전자정부 누리집입니다.
            </p>
          </ul>
          <ul className="hidden lg:flex w-auto gap-[10px] text-[12px] text-[#4f6280]">
            <div className="flex gap-[4px]">
              <p className="whitespace-nowrap">누리집(ENG)</p>
              <ChevronDownIcon className="w-[4px] h-[4px]" />
            </div>
            <p className="whitespace-nowrap">누리집 안내지도</p>
          </ul>
        </div>
        <ul className="hidden lg:flex gap-[10px]">
          <Image
            src="/images/secondary_header_image_2.png"
            alt="secondary-image-2"
            width={130}
            height={35}
          />
          <Image
            src="/images/secondary_header_image_3.png"
            alt="secondary-image-3"
            width={97}
            height={35}
          />
        </ul>
      </div>
      <div className="w-full  h-auto flex justify-between items-center px-[16px]">
        <Image
          src="/images/행정안전부.png"
          alt="logo"
          layout=""
          width={146}
          height={44}
        />
        <ul className="w-auto hidden lg:flex justify-around gap-[16px] xl:gap-[32px] text-[16px] font-normal whitespace-nowrap">
          <li>정보공개</li>
          <li>참여 · 민원</li>
          <li>뉴스 · 소식</li>
          <li>정책자료</li>
          <li>업무안내</li>
          <li>기관소개</li>
        </ul>
        <div className="w-[238px] h-[30px]  justify-between items-center border-[1px] border-solid border-gray hidden xl:flex">
          <p className="pl-[6px] text-[14px]">검색어를 입력하세요</p>
          <div className="w-[32px] h-[32px] bg-gray flex justify-center items-center">
            <Search className="text-white w-[16px] h-[16px]" />
          </div>
        </div>
        <div className="w-auto flex items-center gap-[8px] xl:gap-[16px] ">
          <p className="hidden xl:flex p-[6px] bg-[#f7f7f7] rounded text-[14px]">
            ⭐️ 자주 찾는 정보
          </p>
          <StarIcon className="flex xl:hidden w-[24px] h-[24px] text-[#e0e348]" />
          <Search className="flex xl:hidden  w-[24px] h-[24px] text-black" />
          <AlignJustify className="w-[32px] h-[32px]" />
        </div>
      </div>
    </section>
  );
};
