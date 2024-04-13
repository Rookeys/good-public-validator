"use client";

import { Announcement } from "@/components/announcement";
import Loading from "@/components/common/loading";
import Stepper from "@/components/common/stepper";
import { Sidebar } from "@/components/sidebar";
import { SmallBanner } from "@/components/smallBanner";
import { Button } from "@/components/ui/button";
import { getTranslateBadToGood } from "@/services";
import { createClient } from "@supabase/supabase-js";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const cautions = [
  "제목과 내용은 접수 후 수정, 삭제가 불가능하므로 다시 확인하시고 신청해 주시기 바랍니다.",
  "규제 관련 민원의 경우 규제개혁신문고로 이관될 수 있습니다.",
  "신고성 민원의 경우 청렴포털시스템으로 이관될 수 있습니다.",
  "허위신고 등은 명예훼손, 무고죄 등으로 처벌될 수 있습니다.",
  "민원 내용에 따라 여러 부처에서 처리될 수 있으니, 민감한 내용이 포함되어 있을 경우 기관별로 해당내용을 제출해주시기 바랍니다.",
  "공무원에 대한 폭언, 욕설 등은 관련 법령(형법, 경범죄처벌법)에 따라 법적조치를 받을 수 있습니다.",
];

const cautions2 = [
  "※ 민원신청을 유도한 후 금융 정보(계좌, 카드, 비밀번호 등)를 요구하는 전화사기(보이스피싱)에 주의하시기 바랍니다.",
  "※ 고소장 등 법정서식이 필요한 신청은 해당 기관에 사전 문의하시기 바랍니다.",
  "※ 현금영수증 미발급·발급거부, 신용카드 결제거부 신고는 국세청 홈(손)택스로 접속> 상담/제보를 이용하여 주시기 바랍니다.",
  "※ 로그인 유지시간은 120분이며, 민원 내용을 자세히 작성해주시면 원활한 민원 처리에 도움이 됩니다.",
];

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thirdInput, setThirdInput] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [GoodText, setGoodText] = useState("");
  // const [data, setData] = useState<any>();

  const sbApiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  // const getAll = async () => {
  //   if (!sbUrl || !sbApiKey) return;
  //   const client = createClient(sbUrl, sbApiKey);
  //   const { data: complaints, error } = await client
  //     .from("complaints")
  //     .select("*");
  //   setData(complaints);
  // };

  // useEffect(() => {
  //   getAll();
  // }, [sbApiKey, sbUrl]);

  // const getOne = async () => {
  //   if (!sbUrl || !sbApiKey) return;
  //   const client = createClient(sbUrl, sbApiKey);
  //   const { data, error } = await client
  //     .from("complaints")
  //     .select("*")
  //     .eq("id", 1); // Condition to filter data
  //     console.log(data)
  // };

  // useEffect(() => {
  //   getOne();
  // }, [sbApiKey, sbUrl]);

  const post = async () => {
    if (!sbUrl || !sbApiKey) return;
    // const client = createClient(sbUrl, sbApiKey);
    // const { data, error } = await client
    //   .from("complaints")
    //   .insert([{ title, content }])
    //   .select();
    // console.log(data);
  };

  const submit = async () => {
    try {
      setIsLoading(true);
      const response = await getTranslateBadToGood(content);
      setGoodText(response.content);
    } catch {
      console.log("error");
    } finally {
      setIsLoading(false);
    }

    // await post();
  };
  const router = useRouter();

  return (
    <section className="w-full justify-center mt-[40px] flex gap-[60px]">
      <Sidebar />
      <section className="max-w-[880px] flex flex-col gap-[12px]">
        <SmallBanner />
        <Announcement />
        <Stepper step={1} />
        <ul className="flex flex-col gap-[8px] p-[10px] border-b-[1px] border-solid border-[#dddddd]">
          {cautions.map((caution, index) => (
            <li key={caution} className="flex gap-[4px] items-center">
              <span className="bg-[#555555] w-[5px] h-[5px] rounded-full" />
              <span className="text-[#555555] text-[12px]">{caution}</span>
            </li>
          ))}
        </ul>
        <article className="mt-[10px] flex justify-between bg-[#f4f5f9] items-center border-t border-solid border-[#c4c9ce]">
          <div className="p-[16px] text-[18px]">민원 내용</div>
          <div className="flex p-[16px] text-[14px] text-[#555] gap-[4px]">
            <span className="text-[#e11d1d]">*</span>
            <span>표는 필수 입력사항입니다.</span>
          </div>
        </article>
        <ul className="flex flex-col gap-[8px] p-[10px] border-b-[1px] border-solid border-[#dddddd]">
          {cautions2.map((caution, index) => (
            <li key={caution} className="flex gap-[4px] items-center">
              <span className="bg-[#555555] w-[5px] h-[5px] rounded-full" />
              <span className="text-[#555555] text-[12px]">{caution}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-[8px] p-[10px] border-b-[1px] border-solid border-[#dddddd]">
          <label htmlFor="name" className="text-[14px]">
            민원제목 <span className="text-[#e11d1d]">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-solid border-[#c4c9ce] p-[8px] rounded"
            max={200}
          />
          <div className="w-full flex justify-end">
            <span className="text-[10px] text-[#555555]">{`(${title.length} / 200)`}</span>
          </div>

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
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={40000}
          />
          <div className="w-full flex justify-end">
            <span className="text-[10px] text-[#555555]">{`(${content.length} / 40000)`}</span>
          </div>
        </div>

        <label htmlFor="name" className="text-[14px] px-[10px]">
          순화된 문의 내용
        </label>

        <div className="w-full px-[10px]">
          <textarea
            className="w-full border border-solid border-[#c4c9ce] p-[8px] rounded resize-none text-gray"
            name="pttnCntnCl"
            id="pttnCntnCl"
            disabled
            data-limit="40000"
            rows={10}
            value={GoodText}
            maxLength={40000}
          />
        </div>

        <article className="mt-[10px] flex justify-between bg-[#f4f5f9] items-center border-t border-solid border-[#c4c9ce] pr-4">
          <div className="p-[16px] text-[18px]">기존 민원 첨부</div>
          <div className="w-6 h-6 bg-white rounded-full">
            <ChevronDownIcon className="text-secondary w-6 h-6" />
          </div>
        </article>

        <article className="mt-[10px] flex bg-[#f4f5f9] items-center border-t border-solid border-[#c4c9ce]">
          <div className="p-[16px] text-[18px]">나의 민원 공개(필수)</div>
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
                value="yes"
                checked={thirdInput}
                onChange={() => setThirdInput(true)}
              />
              예
            </label>
            <label htmlFor="no" className="text-[14px] flex items-center gap-2">
              <input
                type="radio"
                id="no"
                name="answer"
                value="no"
                checked={!thirdInput}
                onChange={() => setThirdInput(false)}
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

        <div className="px-4">
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
        <div className="w-full flex justify-between items-center py-6">
          <div className="flex gap-4">
            <Button
              variant={"default"}
              type="button"
              className="rounded-full hover:border-[1px] hover:border-solid hover:border-secondary hover:bg-white hover:text-secondary  ! py-2 !px-6 !font-normal !text-[14px] bg-[#555555]"
            >
              이전
            </Button>
            <Button
              variant={"default"}
              type="button"
              className="rounded-full hover:border-[1px] hover:border-solid hover:border-secondary hover:bg-white hover:text-secondary  ! py-2 !px-6 !font-normal !text-[14px] bg-[#555555]"
            >
              취소
            </Button>
          </div>

          <div className="flex gap-4">
            <Button
              variant={"default"}
              type="button"
              className="rounded-full hover:border-[1px] hover:border-solid hover:border-secondary hover:bg-white hover:text-secondary  ! py-2 !px-6 !font-normal !text-[14px] bg-white text-black border-[1px] border-solid border-[#c4c9ce]"
            >
              불러오기
            </Button>
            <Button
              variant={"default"}
              type="button"
              className="rounded-full hover:border-[1px] hover:border-solid hover:border-secondary hover:bg-white hover:text-secondary  ! py-2 !px-6 !font-normal !text-[14px] bg-white text-black border-[1px] border-solid border-[#c4c9ce]"
            >
              임시저장
            </Button>
            <Button
              variant={"default"}
              type="button"
              className="rounded-full hover:border-[1px] hover:border-solid hover:border-secondary hover:bg-white hover:text-secondary  ! py-2 !px-6 !font-normal !text-[14px] bg-secondary text-white border-[1px] border-solid border-[#c4c9ce]"
              onClick={async () => {
                await submit();
                // router.push('/');
              }}
            >
              신청
            </Button>
          </div>
        </div>
      </section>
      {isLoading && <Loading />}
    </section>
  );
}
