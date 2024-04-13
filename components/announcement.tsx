import { PrinterIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export const Announcement = () => {
  return (
    <>
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
            온라인 민원신청은 행정기관 민원서비스 통합에 따라 국민권익위원회에서
            운영하는 국민신문고(www.epeople.go.kr)를 통해 서비스하고 있습니다.
          </p>
          <div className="flex text-[14px] font-bold gap-[2px] mt-[4px]">
            <p className="font-bold">국민신문고 문의 :</p>
            <p className="text-primary">{"1600-8172"}</p>
          </div>
        </div>
      </article>
    </>
  );
};
