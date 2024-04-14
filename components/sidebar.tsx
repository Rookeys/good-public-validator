"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const Menu = [
  { label: '유사민원 검색', link: undefined },
  { label: '온라인 민원FAQ', link: undefined },
  { label: '온라인 민원신청', link: "/civilComplaintRequest" },
  { label: '나의민원보기', link: "/civilComplaintRequest/myWrite" },
];
export const Sidebar = () => {
  return (
    <section className="hidden xl:flex flex-col w-[260px]">
      <div className="bg-primary text-[28px] text-center text-white w-full py-[16px] mb-[8px]">
        온라인 민원신청
      </div>
      <div className="">
        {Menu.map((data, i) => (
          <SidebarBox key={data.label} isClick={i === 2} link={data.link}>
            {data.label}
          </SidebarBox>
        ))}
      </div>
    </section>
  );
};

type Props = {
  children: ReactNode;
  isClick?: boolean;
  link?: string;
};
const SidebarBox = ({ children, isClick = false, link }: Props) => {
  const router = useRouter();
  return (
    <div
      className={`py-[8px] flex items-center border-b border-solid border-[#d5d5db] p-[8px] ${
        !!link ? "cursor-pointer" : ""
      } ${isClick ? "bg-[#eff0f4] text-[#103e93] font-bold" : ""}`}
      onClick={() => {
        link && router.push(`${link}`);
      }}
    >
      {children}
    </div>
  );
};
