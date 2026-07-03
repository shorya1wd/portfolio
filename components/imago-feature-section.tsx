"use client";
import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { IconBrandYoutubeFilled, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { FocusCards } from "@/components/ui/focus-cards";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function ImagoFeatureSection() {
  const imagoCards = [
    {
      title: "Image Gallery",
      src: "/Imago-Media-Gallery.png",
    },
    {
      title: "Media Studio (Image Upload)",
      src: "/Imago-Media-Studio-Unedited.png",
    },
    {
      title: "Media Studio (Edit using AI)",
      src: "/Imago-Media-Studio-Edited.png",
    },
    {
      title: "Video Gallery",
      src: "/Imago-Video-Gallery.png",
    },
  ];

  const imagoPreviewImages = [
    { src: "/Imago-MediaStudio-Light.png" },
    { src: "/Imago-My-Images.png" },
    { src: "/Imago-My-Videos.png" },
    { src: "/Imago-SIgnUp.png" },
    { src: "/Imago-Video-Upload.png" },
  ];

  const features = [
    {
      title: "Project Details",
      description:
      "Imago is a high-performance, full-stack media platform designed to streamline how users upload, optimize, and edit images and videos. By integrating seamless background compression and AI-driven transformations, Imago provides a professional-grade media studio directly in the browser. Built with Next.js (App Router), TypeScript, Tailwind CSS & DaisyUI, Prisma, PostgreSQL (Neon), Clerk Auth, Cloudinary (CDN & AI), it focuses on fast performance, smart media handling, and a clean user experience",
      skeleton: <FocusCards cards={imagoCards} />,
      className:
        "col-span-1 lg:col-span-6 border-b lg:border-r dark:border-neutral-800 pb-8",
    },
 
    {
      title: "Key Features & Capabilities",
      description:(
        <ul className="list-disc pl-5 space-y-2">
          <li>Asynchronous Video Processing: Built an intelligent auto-polling UI that allows users to seamlessly upload files up to 100MB without locking up their browser, displaying real-time bandwidth savings once Cloudinary finishes backend compression.</li>
          <li>AI-Powered Image Studio: Integrated advanced editing tools directly into the platform, including background removal, generative color replacement, image restoration, and smart-cropping for specific social media aspect ratios.</li>
          <li>Frictionless Media Delivery: Implemented automated hover-previews for videos and highly optimized download links, reducing average file payloads by 30-40% to drastically reduce bandwidth consumption.</li>
          <li>Tiered Access & Security: Engineered a seamless dual-access system. The platform allows for anonymous public browsing and downloading, while securing uploads, deletions, and personal dashboards ("My Videos" / "My Images") behind a robust authentication layer.</li>
        </ul>
      ),
  
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
       
    {
      title: "Why Imago?",
      description:
        "Content creators and marketing teams constantly struggle with bloated media files that slow down websites and eat up storage costs. Imago solves this by acting as an intelligent middleman. It automatically compresses heavy video files in the background, applies smart AI cropping for social media formats, and provides a frictionless UI. It’s designed for businesses that need their media to be fast to upload, cheap to store, and instantly ready for distribution.",
      
      className: "border-b col-span-1 lg:col-span-3 dark:border-neutral-800",
    },
        {
      title: "Product Highlights",
      description: "",
      skeleton: <InfiniteMovingCards items={imagoPreviewImages} speed="slow" />,
      className: "col-span-1 lg:col-span-6 border-b dark:border-neutral-800 pb-16",
    },

    {
      title: "Technical Architecture",
      description:(
        <ul className="list-disc pl-5 space-y-2">
          <li>Frontend & API: Built on Next.js using TypeScript to leverage server-side rendering for fast gallery loading and secure API routes for media syncing. Styled with Tailwind CSS and DaisyUI for a clean, responsive, and highly maintainable UI.</li>
          <li>Database & ORM: Powered by a PostgreSQL database (via Neon) and managed with Prisma, ensuring strict type safety when relational mapping users to their media assets.</li>
          <li>Media Infrastructure: Deep integration with Cloudinary for enterprise-grade CDN delivery, on-the-fly format shifting, and complex AI transformations, ensuring the app remains lightweight regardless of file sizes.</li>
          <li>Authentication: Secured by Clerk to handle session management and user identity without complicating the codebase.</li>
        </ul>
      ),
      
      className: "col-span-1 lg:col-span-6 border-b lg:border-none",
    },

    {
      title: "Security & Access",
      description:
        "Imago uses authentication only where it adds value, while keeping the public media browsing experience open and simple. Signed-in users can upload and manage their own content, while public visitors can browse and download anonymously. Media ownership stays private, so uploaded content does not expose user identity. That balance keeps the platform easy to use without giving up control or security.",
      
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Challenges Solved",
      description:(
        <ul className="list-disc pl-5 space-y-2">
          <li>Stale State & Background Syncing: Solved the challenge of asynchronous video processing by engineering a custom API route that polls Cloudinary for derived file sizes. This ensures the PostgreSQL database and the React UI stay perfectly in sync with Cloudinary’s background workers, automatically updating the client's screen from "Processing" to "Finished" without requiring a page refresh.</li>
          <li>Data Integrity & Format Shifting Discrepancies: Cloudinary's aggressive background optimization can cause database mismatches—for example, compressing a video to a tiny .webm file while the client requests an .mp4 download. I standardized the eager transformation pipeline to ensure the backend polling strictly filtered for specific formats and mathematically verified file sizes, guaranteeing that the "Bandwidth Saved" UI metrics perfectly matched the exact file delivered to the end user.</li>
          <li>Preventing Race Conditions & Dead Pages: Handling heavy media compression in the background created a timing gap where users could attempt to download a file before the server finished processing it, resulting in browser timeouts. I implemented a dynamic, auto-polling UI state that intercepts download requests, visually indicates "Processing," and automatically unlocks the exact millisecond the backend confirms the file is ready, completely eliminating dead navigation.</li>
        </ul>
      ),
      
      className: "border-b col-span-1 lg:col-span-4 dark:border-neutral-800",
    },

  ];
  return (
    <div className="relative z-20 mx-auto max-w-7xl py-10 lg:py-40">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 translate-y-[-20%] rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="relative px-8">
        <h4 className="mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight lg:text-5xl lg:leading-tight bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 to-neutral-500 dark:from-neutral-100 dark:to-neutral-500">
          AI-powered media sharing and editing
        </h4>

        <p className="mx-auto my-4 max-w-2xl text-center text-sm font-normal text-neutral-500 lg:text-base dark:text-neutral-300">
          <Link href="https://imagomediastudio.com" className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-600">
            Imago
          </Link>
          {" "}is a high-performance media platform for uploading, browsing, downloading, and editing images and videos with Cloudinary-powered optimization and AI transformations.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://imagomediastudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-900 px-8 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-white dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:focus:ring-neutral-400 dark:focus:ring-offset-black"
          >
            Launch Live App
          </Link>
          <Link
            href="https://github.com/shorya1wd/Imago"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-200 bg-white px-8 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-white dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-800 dark:focus:ring-neutral-800 dark:focus:ring-offset-black"
          >
            <IconBrandGithub className="mr-2 h-5 w-5" />
            View GitHub Code
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="mt-12 grid grid-cols-1 rounded-md lg:grid-cols-6 xl:border dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              {feature.skeleton && (
                <div className="w-full mt-16">{feature.skeleton}</div>
              )}
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`relative overflow-hidden p-4 sm:p-8 transition-colors duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-900/40 group/card`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="h-3 w-3 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-600 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
      <p className="max-w-5xl text-left text-xl tracking-tight text-black md:text-2xl md:leading-snug dark:text-white font-semibold">
        {children}
      </p>
    </div>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-4xl text-left text-sm md:text-base",
        "text-center font-normal text-neutral-500 dark:text-neutral-300",
        "mx-0 my-2 max-w-full text-left md:text-sm",
      )}
    >
      {children}
    </div>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex h-full gap-10 px-2 py-8">
      <div className="group mx-auto h-full w-full bg-white p-5 shadow-2xl dark:bg-neutral-900">
        <div className="flex h-full w-full flex-1 flex-col space-y-2">
          {/* TODO */}
          <img
            src="/linear.webp"
            alt="header"
            width={800}
            height={800}
            className="aspect-square h-full w-full rounded-sm object-cover object-left-top"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-60 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-60 w-full bg-gradient-to-b from-white via-transparent to-transparent dark:from-black" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <a
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="__blank"
      className="group/image relative flex h-full gap-10"
    >
      <div className="group mx-auto h-full w-full bg-transparent dark:bg-transparent">
        <div className="relative flex h-full w-full flex-1 flex-col space-y-2">
          {/* TODO */}
          <IconBrandYoutubeFilled className="absolute inset-0 z-10 m-auto h-20 w-20 text-red-500" />
          <img
            src="https://assets.aceternity.com/fireship.jpg"
            alt="header"
            width={800}
            height={800}
            className="aspect-square h-full w-full rounded-sm object-cover object-center blur-none transition-all duration-200 group-hover/image:blur-md"
          />
        </div>
      </div>
    </a>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex h-full flex-col items-start gap-10 overflow-hidden p-8">
      {/* TODO */}
      <div className="-ml-20 flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="mt-4 -mr-4 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-40 md:w-40"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="mt-4 -mr-4 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-40 md:w-40"
            />
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-[100] h-full w-20 bg-gradient-to-r from-white to-transparent dark:from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[100] h-full w-20 bg-gradient-to-l from-white to-transparent dark:from-black" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative mt-10 flex h-60 flex-col items-center bg-transparent md:h-60 dark:bg-transparent">
      <Globe className="absolute -right-10 -bottom-80 md:-right-10 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 4000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
