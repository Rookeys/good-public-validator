import Stepper from "@/components/common/stepper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main",
};

export default function Home() {
  return (
    <>
      <div className="flex gap-4 p-4">
        <Button>Test</Button>
        <Button variant={"outline"}>Test</Button>
        <Button variant={"secondary"}>Test</Button>
        <Button variant={"ghost"}>Test</Button>
        <Input />
        <Input variant={"gray"} />
      </div>
      <Stepper step={1} />
    </>
  );
}
