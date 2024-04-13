import { Announcement } from "@/components/announcement";
import Stepper from "@/components/common/stepper";
import { Sidebar } from "@/components/sidebar";
import { SmallBanner } from "@/components/smallBanner";

export default function Write() {
  return (
    <section className="w-full justify-center mt-[40px] flex gap-[60px]">
      <Sidebar />
      <section className="max-w-[880px] flex flex-col gap-[12px]">
        <SmallBanner />
        <Announcement />
        <Stepper step={1} />
        <article className="mt-[30px] flex justify-between bg-[#f4f5f9] items-center border-t border-solid border-[#c4c9ce]">
          <div className="p-[16px] text-[18px]">신청인 기본 정보</div>
          <div className="flex p-[16px] text-[14px] text-[#555] gap-[4px]">
            <span className="text-[#e11d1d]">*</span>
            <span>표는 필수 입력사항입니다.</span>
          </div>
        </article>
      </section>
    </section>
  );
}
