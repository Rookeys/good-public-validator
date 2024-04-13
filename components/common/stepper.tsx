import {
  DocumentCheckIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { FC } from "react";

interface StepperProps {
  step: 1 | 2;
}

const Stepper: FC<StepperProps> = ({ step }) => {
  return (
    <div className="w-full h-auto flex border-[1px] border-solid border-[#555555]">
      <div
        className={`w-full h-[70px] flex justify-start items-center gap-[8px] pl-[32px] ${
          step === 1 ? "bg-secondary text-white" : "bg-white"
        }`}
      >
        <PencilSquareIcon className="w-[24px] h-[24px]" />
        <p>1. 신청서 작성</p>
      </div>
      <Image src="/images/stepper.png" alt="stepper" width={20} height={70} />
      <div
        className={`w-full h-[70px] flex justify-start items-center gap-[8px] ${
          step === 2 ? "bg-secondary text-white" : "bg-white"
        } pl-2`}
      >
        <DocumentCheckIcon className="w-[24px] h-[24px]" />
        <p>2. 신청완료</p>
      </div>
    </div>
  );
};

export default Stepper;
