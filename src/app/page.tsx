import { Metadata } from "next";
import { ModernAnimatedMarketingPageComponent } from "@/components/modern-animated-marketing-page";

export const metadata: Metadata = {
  title: "Fleeting Focus: Your Daily Productivity Companion",
  description:
    "Boost your productivity with Fleeting Focus. Set daily priorities, track progress, and achieve more with our minimalist iOS app.",
  keywords:
    "productivity, focus, task management, iOS app, daily goals, minimalist design, time management",
};

export default function Home() {
  return <ModernAnimatedMarketingPageComponent />;
}
