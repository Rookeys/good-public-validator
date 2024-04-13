"use client";

import { formatUTCDateToLocalDateString } from '@/app/utils/timeFormat';
import { Sidebar } from '@/components/sidebar';
import { SmallBanner } from '@/components/smallBanner';
import { PrinterIcon } from '@heroicons/react/16/solid';
import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function MyWrite() {
  
  const [data, setData] = useState<any>();

  const router = useRouter()

  const sbApiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  const getAll = async () => {
    if (!sbUrl || !sbApiKey) return;
    const client = createClient(sbUrl, sbApiKey);
    const { data: complaints, error } = await client
      .from("complaints")
      .select("*");
    setData(complaints);
  };

  useEffect(() => {
    getAll();
  }, [sbApiKey, sbUrl]);

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
        <article className="grid grid-cols-9 bg-[#f4f5f9]">
          <div className="col-span-1 px-[4px] py-[12px] text-center font-semibold border-t-2 border-solid">번호</div>
          <div className="col-span-2 px-[4px] py-[12px] text-center font-semibold border-t-2 border-solid">신청번호</div>
          <div className="col-span-2 px-[4px] py-[12px] text-center font-semibold border-t-2 border-solid">제목</div>
          <div className="col-span-1 px-[4px] py-[12px] text-center font-semibold border-t-2 border-solid">신청일</div>
          <div className="col-span-1 px-[4px] py-[12px] text-center font-semibold border-t-2 border-solid">처리기관</div>
          <div className="col-span-1 px-[4px] py-[12px] text-center font-semibold border-t-2 border-solid">추진상황</div>
          <div className="col-span-1 px-[4px] py-[12px] text-center font-semibold border-t-2 border-solid">만족도 조사</div>
        </article>
        {data && Array.isArray(data) && data.length > 0 && 
        data.map((data) => <article className="grid grid-cols-9 cursor-pointer" key={data.id}>
          <div className="col-span-1 px-[4px] py-[12px] text-center" onClick={() => {router.push(`/civilComplaintRequest/myWrite/${data.id}`)}}>{data.id}</div>
          <div className="col-span-2 px-[4px] py-[12px] text-center">{data.id}</div>
          <div className="col-span-2 px-[4px] py-[12px] text-center">{data.title}</div>
          <div className="col-span-1 px-[4px] py-[12px] text-center">{formatUTCDateToLocalDateString(data.created_at)}</div>
          <div className="col-span-1 px-[4px] py-[12px] text-center">행정안전부</div>
          <div className="col-span-1 px-[4px] py-[12px] text-center">진행중</div>
          <div className="col-span-1 px-[4px] py-[12px] text-center"onClick={() => {router.push(`/publicOfficial/${data.id}`);}} >-</div>
        </article>)}
      </section>
    </section>
  );
}
