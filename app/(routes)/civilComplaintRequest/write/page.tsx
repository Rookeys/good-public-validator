"use client";
import { Announcement } from "@/components/announcement";
import Stepper from "@/components/common/stepper";
import { Sidebar } from "@/components/sidebar";
import { SmallBanner } from "@/components/smallBanner";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Write() {
  const [radio, setRadio] = useState<boolean>(true);
  const router = useRouter()
  return (
    <section className="w-full justify-center mt-[40px] flex gap-[60px] mb-[60px]">
      <Sidebar />
      <section className="max-w-[880px] flex flex-col gap-[12px] w-full">
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
        {/* start form section */}
        <section className="px-[20px] flex flex-col w-full gap-[20px]">
          <article className="flex items-center">
            <div className="w-[170px]">신청인</div>
            <div>김나쁨</div>
          </article>
          <article className="flex items-center">
            <div className="w-[170px]">신청인 구분</div>
            <div className="flex gap-[4px]">
              <div>
                <label
                  htmlFor="yes"
                  className="text-[14px] flex items-center gap-2"
                >
                  <input
                    type="radio"
                    id="yes"
                    name="answer"
                    value="yes"
                    checked={radio}
                    onChange={() => setRadio(true)}
                  />
                  개인
                </label>
              </div>
              <div>
                <label
                  htmlFor="no"
                  className="text-[14px] flex items-center gap-2"
                >
                  <input
                    type="radio"
                    id="no"
                    name="answer"
                    value="no"
                    checked={!radio}
                    onChange={() => setRadio(false)}
                  />
                  단체
                </label>
              </div>
            </div>
          </article>
          <article className="flex">
            <div className="w-[170px] items-center pt-[10px]">연락처</div>
            <div className="flex items-center gap-[4px]">
              <div className="flex flex-col">
                <div className="flex items-center gap-[4px]">
                  <Input variant={"gray"} className="w-[120px]" />
                  <span>-</span>
                  <Input variant={"gray"} className="w-[120px]" />
                  <span>-</span>
                  <Input variant={"gray"} className="w-[120px]" />
                </div>
                <p className="text-[#0075cf] my-[10px]">
                  ※ 타인의 휴대전화번호를 입력하여 피해 사례가 발생하고 있으니
                  정확히 입력하여 주시기 바랍니다.
                </p>
              </div>
            </div>
          </article>
          <article className="flex w-full">
            <div className="w-[170px] items-center pt-[10px]">주소</div>
            <div className="flex items-center gap-[4px]">
              <div className="flex flex-col gap-[4px]">
                <Input variant={"gray"} className="w-[200px]" />
                <Input variant={"gray"} className="w-[650px]" />
                <p className="text-[#0075cf] mt-[10px]">
                  ※ 주소찾기를 통해 자동 입력됩니다.
                </p>
                <Input variant={"gray"} className="w-[650px]" />
                <p className="text-[#0075cf] mt-[10px]">
                  ※ 상세 주소를 직접 입력해주세요.
                </p>
              </div>
            </div>
          </article>
          <article className="flex w-full">
            <div className="w-[170px] items-start pt-[10px] flex flex-col">
              <p>성별/생년</p>
              <p>(선택입력)</p>
            </div>
            <div className="flex items-center gap-[4px]">
              <div className="flex flex-col gap-[4px]">
                <div className="flex gap-[4px]">
                  <Input variant={"gray"} className="w-[100px]" />
                  <Input variant={"gray"} className="w-[100px]" />
                </div>
                <p className="text-[#0075cf] mt-[10px]">
                  ※ 성별, 세대별 민원분석 등을 위한 항목으로 선택사항 입니다.
                </p>
              </div>
            </div>
          </article>
          <article className="flex w-full">
            <div className="w-[170px] items-start pt-[10px] flex flex-col">
              <p>진행상황 통지방식</p>
            </div>
            <div className="flex items-center gap-[4px]">
              <div className="flex flex-col gap-[4px]">
                <div className="flex gap-[20px] items-center mt-[10px]">
                  <div className="flex gap-[2px] items-center">
                    <input
                      type="checkbox"
                      className="w-[20px] h-[20px]"
                      disabled
                      checked
                    />
                    <p>누리집(홈페이지)</p>
                  </div>
                  <div className="flex gap-[2px] items-center">
                    <input type="checkbox" className="w-[20px] h-[20px]" />
                    <p>전자우편</p>
                  </div>
                  <div className="flex gap-[2px] items-center">
                    <input type="checkbox" className="w-[20px] h-[20px]" />
                    <p>휴대전화</p>
                  </div>
                </div>
                <p className="text-[#0075cf]">
                  ※ 휴대전화 선택 시 카카오톡으로 진행상황이 통지(09시~18시)
                  됩니다.
                </p>
                <p className="text-[#0075cf]">
                  ※ 카카오톡 계정이 없거나 국민신문고 채널을 차단한 경우 문자로
                  발송됩니다.
                </p>
                <p className="text-[#0075cf]">
                  ※ 알림 수신 당시 인터넷에 연결되어 있지 않은 경우 문자와
                  카카오톡 모두 발송될 수 있습니다.
                </p>
              </div>
            </div>
          </article>
          <article className="flex w-full">
            <div className="w-[170px] items-start pt-[10px] flex flex-col">
              <p>진행상황 통지방식</p>
            </div>
            <div className="flex items-center gap-[4px]">
              <div className="flex flex-col gap-[4px]">
                <div className="flex gap-[20px] items-center mt-[10px]">
                  <div className="flex gap-[2px] items-center">
                    <input
                      type="checkbox"
                      className="w-[20px] h-[20px]"
                      disabled
                      checked
                    />
                    <p>누리집(홈페이지)</p>
                  </div>
                  <div className="flex gap-[2px] items-center">
                    <input type="checkbox" className="w-[20px] h-[20px]" />
                    <p>전자우편</p>
                  </div>
                  <div className="flex gap-[2px] items-center">
                    <input type="checkbox" className="w-[20px] h-[20px]" />
                    <p>서면(종이우편, 전자문서)</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="flex w-full">
            <div className="w-[170px] items-start pt-[10px] flex flex-col">
              <p>민원답변 통지방식</p>
            </div>
            <div className="flex items-center gap-[4px]">
              <div className="flex flex-col gap-[4px]">
                <div className="flex gap-[20px] items-center mt-[10px]">
                  <div className="flex gap-[2px] items-center">
                    <input
                      type="checkbox"
                      className="w-[20px] h-[20px]"
                      disabled
                      checked
                    />
                    <p>누리집(홈페이지)</p>
                  </div>
                  <div className="flex gap-[2px] items-center">
                    <input type="checkbox" className="w-[20px] h-[20px]" />
                    <p>전자우편</p>
                  </div>
                  <div className="flex gap-[2px] items-center">
                    <input type="checkbox" className="w-[20px] h-[20px]" />
                    <p>서면(종이우편, 전자문서)</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="flex w-full">
            <div className="w-[170px] items-start pt-[10px] flex flex-col">
              <p>민원확인 보안설정</p>
            </div>
            <div className="flex items-center gap-[4px]">
              <div className="flex flex-col gap-[4px]">
                <div className="flex gap-[20px] items-center mt-[10px]">
                  <div className="flex gap-[2px] items-center">
                    <input
                      type="checkbox"
                      className="w-[20px] h-[20px]"
                      disabled
                      checked
                    />
                    <p>설정</p>
                  </div>
                </div>
                <p className="text-[#0075cf]">
                  ※ 선택할 경우 회원은 비밀번호 재입력, 비회원은 신청번호를 입력
                  후 답변을 확인하실 수 있습니다.
                </p>
              </div>
            </div>
          </article>
          <Button
            variant={"default"}
            type="button"
            onClick={() => router.push("/civilComplaintRequest/validation")}
            className="rounded-full hover:border-[1px] hover:border-solid hover:border-secondary hover:bg-white hover:text-secondary  ! py-2 !px-6 !font-normal !text-[14px] bg-secondary text-white !w-[100px] self-end mt-[20px]"
          >
            다음
          </Button>
        </section>
      </section>
    </section>
  );
}
