'use client'
import { useRouter } from 'next/navigation';
import React, { ReactNode } from "react";

const Menu = [
  "유사민원 검색",
  "온라인 민원FAQ",
  "온라인 민원신청",
  "나의민원보기",
];
export const Sidebar = () => {
  return (
    <section className="hidden xl:flex flex-col w-[260px]">
      <div className="bg-primary text-[28px] text-center text-white w-full py-[16px] mb-[8px]">
        온라인 민원신청
      </div>
      <div className="">
        {Menu.map((data, i) => (
          <SidebarBox key={data} isClick={i === 2}>
            {data}
          </SidebarBox>
        ))}
      </div>
    </section>
  );
};

type Props = {
  children: ReactNode
  isClick?: boolean
}
const SidebarBox = ({ children, isClick = false }: Props) => {
  const router = useRouter()
  return (
    <div
      className={`py-[8px] flex items-center border-b border-solid border-[#d5d5db] p-[8px] cursor-pointer ${
        isClick ? "bg-[#eff0f4] text-[#103e93] font-bold" : ""
      }`}
      onClick={() => router.push("/civilComplaintRequest")}
    >
      {children}
    </div>
  );
};