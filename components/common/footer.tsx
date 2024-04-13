import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";

const footerLinks = [
  "이용안내",
  "문서보기 프로그램",
  "저작권정책",
  "개인정보처리방침",
  "찾아오시는길",
  "담당자연락처",
  "고객만족도조사",
  "조사지자체 기관정보(정부24)",
];

const footerInfo = [
  "본관 : 30112 세종특별자치시 도움6로 42(어진동) / 별관 : 30116 세종특별자치시 가름로 143(어진동)",
  "정부민원안내콜센터 국번없이110(무료)",
  "행정안전부 콜센터 02-2100-3399(월~금 9:00~18:00, 공휴일 제외, 유료) / 팩스 044-204-8911",
  "(근무시간 외) 당직실 044-205-1600",
  "© Ministry of the Interior and Safety. All rights reserved.",
];

const Footer = () => {
  return (
    <footer className="w-full h-auto">
      <div className="w-full h-auto grid grod-cols-1 xl:grid-cols-5 items-center bg-[#333333] px-0 2xl:px-[130px]">
        <div className="flex col-span-1 xl:col-span-3 flex-wrap xl:flex-nowrap xl:text-[12px] gap-[16px] text-[#d1d1d1] text-[15px] px-[10px] py-[16px] xl:py-0">
          {footerLinks.map((link) => (
            <div key={link}>{link}</div>
          ))}
        </div>
        <div className="flex col-span-1 xl:col-span-2  ">
          <div className="w-full h-[62px] flex justify-between items-center gap-[16px] bg-black/20 text-[#7f7f7f] px-[16px] text-[13px]">
            <p>소속기관 누리집</p>
            <span>⏷</span>
          </div>
          <div className="w-full h-[62px] flex justify-between items-center gap-[16px] bg-black/20 text-[#7f7f7f] px-[16px] text-[13px]">
            <p>소속기관 누리집</p>
            <span>⏷</span>
          </div>
        </div>
      </div>
      <div className="bg-[#393b44] w-full  flex flex-col items-end lg:items-center lg:flex-row justify-between p-[30px] gap-[8px]">
        <div className="w-full flex flex-col gap-[8px] items-start">
          {footerInfo.map((info) => (
            <p key={info} className="text-[#B2B4BC]">
              {info}
            </p>
          ))}
        </div>
        <Image
          src="/images/a11y.png"
          alt="a11y"
          width={115}
          height={79}
          className="flex-shrink-0"
        />
      </div>
    </footer>
  );
};

export default Footer;
