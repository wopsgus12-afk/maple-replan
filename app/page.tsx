import type { Metadata } from "next";
import { ReplanApp } from "@/components/ReplanApp";

export const metadata: Metadata = {
  title: "메이플 재획 정산 | 2시간 시급 계산",
  description:
    "메이플스토리 2시간 재획(사냥) 시급 및 1·2·3차 재획 누적 정산 도구",
};

export default function MapleHomePage() {
  return <ReplanApp />;
}
