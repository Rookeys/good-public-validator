import { menus } from "@/app/dummy/menus";
import { ComplaintCategory } from "@/components/complaintCategory";
import { Sidebar } from "@/components/sidebar";
import { SmallBanner } from "@/components/smallBanner";
import { PrinterIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "civilComplaintRequest",
};

export default function Home() {
  return (
    <section className="w-full justify-center mt-[40px] flex gap-[60px]">
      <Sidebar />
      <section className="max-w-[880px] flex flex-col gap-[12px]">
        <SmallBanner />
        <article className="flex justify-between">
          <p className="text-[28px] font-bold">온라인 민원 신청</p>
          <div className="border border-solid flex items-center gap-[4px] text-gray border-gray rounded-[4px] px-2">
            <PrinterIcon width={16} height={16} />
            <p className="text-[12px] text-nowrap font-bold">인쇄하기</p>
          </div>
        </article>
        <hr />
        <article className="flex gap-[40px] items-center">
          <Image
            src={"/images/img_appeal01.png"}
            alt=""
            width={210}
            height={75}
            className="flex-shrink-0"
          />
          <div className="flex flex-col gap-[4px]">
            <p className="text-[12px] leading-4">
              온라인 민원신청은 행정기관 민원서비스 통합에 따라
              국민권익위원회에서 운영하는 국민신문고(www.epeople.go.kr)를 통해
              서비스하고 있습니다.
            </p>
            <div className="flex text-[14px] font-bold gap-[2px] mt-[4px]">
              <p className="font-bold">국민신문고 문의 :</p>
              <p className="text-primary">{"1600-8172"}</p>
            </div>
          </div>
        </article>
        <article className="flex flex-col">
          {menus.map(data => (
            <ComplaintCategory
              key={data.title}
              title={data.title}
              description={data.description}
              department={data.department}
            />
          ))}
        </article>
      </section>
    </section>
  );
}
