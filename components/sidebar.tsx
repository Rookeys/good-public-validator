import React, { ReactNode } from "react";

const Menu = [
  "유사민원 검색",
  "온라인 민원FAQ",
  "온라인 민원신청",
  "나의민원보기",
];
export const Sidebar = () => {
  return (
    <section className="flex flex-col w-[260px]">
      <div className="bg-primary text-[20px] text-center text-white w-full py-[16px] mb-[8px]">
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
  return (
    <div
      className={`py-[8px] flex items-center border-b border-solid border-[#303233] p-[8px] ${
        isClick ? "bg-[#eff0f4] text-[#103e93] font-bold" : ""
      }`}
    >
      {children}
    </div>
  );
};