"use client";
import React from "react";
import Image from "next/image";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function BackgroundRippleEffectDemo() {
  const logos = [
    "HTML5.svg","CSS3.svg","Bootstrap.svg","Tailwind CSS.svg","React.svg","Vite.js.svg",
    "shadcn-ui.svg","JavaScript.svg","Node.js.svg","Express.svg","TypeScript.svg",
    "PostgresSQL.svg","icons8-prisma-orm.svg","MongoDB.svg","Mongoose.js.svg",
    "Postman.svg","Git.svg","GitHub.svg","Next.js.svg","Clerk.svg","Zod.svg", 
    "Pusher.svg","cloudinary.svg",
    "Digital Ocean.svg","Vercel.svg","Docker.svg","GitHub Actions.svg",
    "NGINX.svg","Cloudflare.svg",
  ];

  const [deviceType, setDeviceType] = React.useState<"mobile" | "tablet" | "desktop">("desktop");

  React.useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth < 768) setDeviceType("mobile");
      else if (window.innerWidth < 1280) setDeviceType("tablet");
      else setDeviceType("desktop");
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const logoIndicesDesktop = [
    30, 32, 56, 58, 60, 84, 86, 40, 66, 68, 94, 48, 74, 76, 102, 148, 174, 176, 202, 165, 139, 193, 167, 155, 157, 159, 183, 185, 211
  ];

  // Aesthetically staggered honeycomb pattern for a 7-column mobile grid
  const logoIndicesMobile = [
    14, 16, 18, 20,
    22, 24, 26,
    28, 30, 32, 34,
    36, 38, 40,
    42, 44, 46, 48,
    50, 52, 54,
    56, 58, 60, 62,
    64, 66, 68,
    71, 73, 74
  ];

  // Tablet grid (13 columns) to fit perfectly between 768px and 1280px without overflowing
  const logoIndicesTablet = [
    17, 19, 21,
    29, 31, 33, 35,
    41, 43, 45, 47, 49,
    53, 55, 57, 59, 61, 63,
    67, 69, 71, 73, 75,
    81, 83, 85, 87,
    95, 97, 99, 101
  ];

  const config = {
    mobile: { indices: logoIndicesMobile, rows: 12, cols: 7, height: 672 },
    tablet: { indices: logoIndicesTablet, rows: 9, cols: 13, height: 504 },
    desktop: { indices: logoIndicesDesktop, rows: 9, cols: 27, height: 504 },
  }[deviceType];

  const activeIndices = config.indices;

  const cellContent: Record<number, React.ReactNode> = {};
  logos.forEach((logo, i) => {
    cellContent[activeIndices[i]] = (
      <div className="flex items-center justify-center w-full h-full select-none pointer-events-auto group z-20">
        <div className="w-10 h-10 md:w-12 md:h-12 p-1.5 rounded-lg bg-neutral-100 shadow-md flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 relative border border-neutral-200">
          <Image
            src={`/${logo}`}
            alt={logo.replace('.svg', '')}
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
          
          {/* Animated Tooltip */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none whitespace-nowrap bg-neutral-900/90 text-violet-400 px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.3)] backdrop-blur-md scale-95 group-hover:scale-100 flex flex-col items-center">
            {logo.replace('.svg', '').replace('icons8-', '').replace('-svgrepo-com', '').replace('-icon', '')}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900/90 border-b border-r border-white/10 rotate-45"></div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center py-24 px-4 overflow-hidden">
      {/* Heading completely separated from the grid */}
      <div className="relative z-10 w-full mb-12 flex flex-col items-center justify-center">
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold text-neutral-800 md:text-5xl lg:text-7xl dark:text-neutral-100">
          My <span className="text-violet-400">Tech Stack</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-400">
          Click anywhere on the grid to see the ripple effect across the logos!
        </p>
      </div>

      {/* Beautifully styled card container for the grid */}
      <div 
        className="relative w-full max-w-[1512px] rounded-3xl border border-white/20 bg-neutral-900/40 shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden flex items-center justify-center backdrop-blur-md transition-all duration-500"
        style={{ height: config.height }}
      >
        {/* Subtle inner vignette shadow to give the card depth */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.4)] z-10 rounded-3xl" />
        
        <BackgroundRippleEffect 
          cellContent={cellContent} 
          rows={config.rows} 
          cols={config.cols} 
        />
      </div>
    </div>
  );
}
