import { Sidebar } from '@/components/sidebar';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "civilComplaintRequest",
};

export default function Home() {
  return (
    <Sidebar />
  );
}
