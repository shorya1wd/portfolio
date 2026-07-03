"use client";

import Carousel from "@/components/ui/carousel";
export default function CarouselDemo() {
  const slideData = [
    {
      title: "Dashboard Overview",
      button: "",
      src: "/Opus-Dashboard-flow.png",
    },
    {
      title: "Organization Workspace",
      button: "",
      src: "/Opus-Project-workspace.png",
    },
    {
      title: "Ai Assistant Chat",
      button: "",
      src: "/Opus-Project-aichat.png",
    },
  ];
  return (
    <div className="relative w-full mt-12 pb-8 flex flex-col items-center">
      <Carousel slides={slideData} />
    </div>
  );
}
