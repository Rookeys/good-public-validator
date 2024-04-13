import { HomeIcon } from '@heroicons/react/16/solid';
import React, { ReactNode } from "react";

export const SmallBanner = () => {
  return (
    <div className="h-[20px] flex gap-[4px] items-center">
      <HomeIcon color="#ADADAD" width={20} height={20} />
      <p>{">"}</p>
      <p>{"참여·민원"}</p>
      <p>{">"}</p>
      <p>{"온라인 민원신청"}</p>
      <p>{">"}</p>
      <p className="font-bold text-primary">{"온라인 민원신청"}</p>
    </div>
  );
};

