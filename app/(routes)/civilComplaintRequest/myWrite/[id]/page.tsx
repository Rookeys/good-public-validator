"use client";
import { Announcement } from '@/components/announcement';
import { Sidebar } from '@/components/sidebar';
import { SmallBanner } from '@/components/smallBanner';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';
import { useParams } from "next/navigation";
import { useEffect, useState } from 'react';

export default function MyWriteDetail() {
  const params = useParams<{ id: string }>();
  const [data, setData] = useState<any>();

  const sbApiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  const getOne = async () => {
    if (!sbUrl || !sbApiKey || !params?.id) return;
    const client = createClient(sbUrl, sbApiKey);
    const { data, error } = await client
      .from("complaints")
      .select("*")
      .eq("id", params?.id); // Condition to filter data
    if(data && Array.isArray(data) && data?.length > 0) setData(data[0])
  };

  useEffect(() => {
    getOne();
  }, [sbApiKey, sbUrl]);

  return (
    <section className="w-full justify-center mt-[40px] flex gap-[60px]">
      <Sidebar />
      <section className="max-w-[880px] flex flex-col gap-[12px]">
        <SmallBanner />
        <Announcement />
        <div className="flex flex-col gap-[8px] p-[10px] border-b-[1px] border-solid border-[#dddddd]">
          <label htmlFor="name" className="text-[14px]">
            민원제목 <span className="text-[#e11d1d]">*</span>
          </label>
          <input
            type="text"
            id="name"
            defaultValue={data?.title}
            readOnly
            // onChange={e => setTitle(e.target.value)}
            className="border border-solid border-[#c4c9ce] p-[8px] rounded"
            max={200}
          />
          <label htmlFor="name" className="text-[14px]">
            민원내용 <span className="text-[#e11d1d]">*</span>
          </label>
          <textarea
            className="border border-solid border-[#c4c9ce] p-[8px] rounded resize-none"
            name="pttnCntnCl"
            id="pttnCntnCl"
            data-limit="40000"
            rows={10}
            title="민원내용"
            defaultValue={data?.content}
            // onChange={e => setContent(e.target.value)}
            maxLength={40000}
            readOnly
          />
          {!data?.validation && (
            <div className="flex justify-between items-center">
              <label htmlFor="name" className="text-[14px]">
                부적절한 민원 글로 감지되었습니다
              </label>
            </div>
          )}
          <div className="w-full text-[#fc2121] text-[12px]">
            <span className='text-black'>감지된 글: </span>{data?.why_bad && data?.why_bad.toString()}
          </div>
        </div>

        <article className="mt-[10px] flex justify-between bg-[#f4f5f9] items-center border-t border-solid border-[#c4c9ce] pr-4">
          <div className="p-[16px] text-[18px]">기존 민원 첨부</div>
          <div className="w-6 h-6 bg-white rounded-full">
            <ChevronDownIcon className="text-secondary w-6 h-6" />
          </div>
        </article>

        <article className="mt-[10px] flex bg-[#f4f5f9] items-center border-t border-solid border-[#c4c9ce]">
          <div className="p-[16px] text-[18px]">나의 민원 공개</div>
          <Image
            src="/images/exclamation.png"
            alt="exclamation"
            width={22}
            height={23}
          />
        </article>

        <div className="px-4 border-b-[1px] border-solid border-[#555555] py-[10px]">
          <div className="flex gap-4 pb-4">
            <label
              htmlFor="yes"
              className="text-[14px] flex items-center gap-2"
            >
              <input
                type="radio"
                id="yes"
                name="answer"
                defaultValue="yes"
                checked
                readOnly
                // onChange={() => setThirdInput(true)}
              />
              예
            </label>
            <label htmlFor="no" className="text-[14px] flex items-center gap-2">
              <input
                type="radio"
                id="no"
                name="answer"
                defaultValue="no"
                readOnly
                // checked={!thirdInput}
                // onChange={() => setThirdInput(false)}
              />
              아니요
            </label>
          </div>
          <p className="text-[12px] text-[#555555]">
            민원 내용에 본인 및 제3자의 개인정보가 포함되어 있을 경우 비공개로
            선택하시기 바랍니다. 단,{" "}
            <span className="font-semibold">
              공개를 선택하셨어도 민원 내용에 개인정보 등 공개에 부적절한 내용이
              포함되었거나 공개 목적에 부합하지 않을 경우 민원처리자가 비공개로
              전환할 수 있습니다.
            </span>
          </p>
        </div>

        <div className="px-4 mb-4">
          <p className="text-[12px] pb-[4px]">
            ※ 공개에 동의하시면 아래와 같이 민원 관련 내용이 공개될 수 있습니다.
          </p>
          <ul className="text-[12px] flex flex-col gap-[2px]">
            <li className="flex items-center gap-[4px]">
              <div className="w-[5px] h-[5px] rounded-full bg-[#555555]" />
              <p>
                공개장소: 국민신문고 이용기관의 누리집(홈페이지),
                「국민신문고」누리집(홈페이지), 「공공데이터포털」민원분석정보
                유사사례 OpenAPI
              </p>
            </li>
            <li className="flex items-center gap-[4px]">
              <div className="w-[5px] h-[5px] rounded-full bg-[#555555]" />
              <p>공개목적: 정책 질의응답 및 유사한 민원의 답변 참고</p>
            </li>
            <li className="flex items-center gap-[4px]">
              <div className="w-[5px] h-[5px] rounded-full bg-[#555555]" />
              <p>공개항목: 민원내용, 민원답변</p>
            </li>
            <li className="flex items-center gap-[4px]">
              <div className="w-[5px] h-[5px] rounded-full bg-[#555555]" />
              <p>공개기간: 민원 처리 완료일로부터 2년간</p>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
