"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

type Props = {
  title: string;
  department: string;
  description: string;
};

export const ComplaintCategory = ({
  title,
  department,
  description,
}: Props) => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-7 h-[70px]">
      <div className="col-span-1 flex bg-[#f6f7fb] items-center border border-solid border-x-0 px-[8px] text-center border-b-0 border-[#d5d5db]">
        {title}
      </div>
      <div className="col-span-4 flex flex-col items-start justify-center border border-solid px-[8px] border-b-0 border-[#d5d5db]">
        <p>담당부서 : {department}</p>
        <p>업무설명 : {description}</p>
      </div>
      <div className="col-span-2 flex items-center gap-[8px] border border-solid border-x-0 px-[8px] border-b-0 border-[#d5d5db]">
        <Button onClick={() => router.push("/civilComplaintRequest/write")}>
          민원신청
        </Button>
        <Button
          variant={"outline"}
          onClick={() => {
            router.push("/civilComplaintRequest/write");
          }}
        >
          공개민원
        </Button>
      </div>
    </div>
  );
};
