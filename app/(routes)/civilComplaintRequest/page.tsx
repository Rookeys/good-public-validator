import { SmallBanner } from '@/components/smallBanner';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "civilComplaintRequest",
};

export default function Home() {
  return (
    <SmallBanner />
  );
}
