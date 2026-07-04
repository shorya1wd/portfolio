"use client";
import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { IconBrandYoutubeFilled, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo";
import CarouselDemo from "./carousel-demo";

export default function OpusAIFeatureSection() {
  const features = [
    {
      title: "Project Details",
      description:
        "I architected and developed OpusAI to solve a common business bottleneck: tool fatigue. By consolidating project management, live chat, AI assistance, and asset management, OpusAI provides teams with a structured, access-controlled workspace. My focus for this project was on building a highly scalable architecture, implementing strict security protocols, and ensuring a production-ready deployment workflow.",
      skeleton:<CarouselDemo />,
      className:
        "col-span-1 lg:col-span-6 border-b dark:border-neutral-800 ",
    },
    {
      title: "Why OpusAI?",
      description:
        "Teams often juggle too many tools for communication, file sharing, project work, and AI assistance, which creates confusion and slows execution. OpusAI solves this by combining organization management, project collaboration, live chat, documents, and asset handling inside a single access-controlled workspace. It is designed for teams that need structure, transparency, and a clean way to work together without losing control of permissions.",
      className: " col-span-1 lg:col-span-3 border-t dark:border-neutral-800",
    },
    {
      title: "Key Features",
      description: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Comprehensive Authentication & Onboarding: Engineered secure sign-up/in flows using Clerk, featuring email verification, Google/Microsoft SSO, and an invite-code-based organization joining system.</li>
          <li>Role-Based Access Control (RBAC): Built a strict permissions model from scratch. Organization and project admins can manage members, while content modification is strictly restricted to authorized creators, ensuring complete data privacy.</li>
          <li>Real-Time Collaboration: Integrated low-latency WebSockets via Pusher to power seamless, instantaneous team chat without performance degradation.</li>
          <li>AI Integration & Data Persistence: Leveraged the Vercel AI SDK and OpenRouter to build a flexible AI assistant. Engineered a system to persist AI conversations in a Neon Postgres database via Prisma, allowing users to export responses into structured, reusable documents.</li>
          <li>Secure Asset Management: Implemented reliable and secure file upload pipelines (PDFs, videos, images) using UploadThing.</li>
        </ul>
      ),
      className:
        "col-span-1 lg:col-span-3 border-t  dark:border-neutral-800",
    },
     {
      title: "Product Highlights",
      description:"",
      skeleton: <AnimatedTestimonialsDemo />,
      className:"col-span-1 lg:col-span-6 border-t border-b lg:border-neutral-800",
    },
    {
      title: "Technical Reasoning",
      description:(
        <ul className="list-disc pl-5 space-y-2">
          <li>Frontend: Chose Next.js for its robust full-stack capabilities and server-side rendering, paired with Shadcn UI to build a highly responsive, accessible, and modern user experience quickly.</li>
          <li>Backend & Database: Architected a scalable, relational database schema using Prisma and Neon Postgres. I specifically optimized the schema to handle complex, multi-tenant data relationships and maintain rapid query performance.</li>
          <li>DevOps & Deployment: Configured a complete production pipeline to demonstrate reliability. The app is containerized with Docker, utilizes GitHub Actions for CI/CD, and is deployed on DigitalOcean with Nginx and Cloudflare for caching and security.</li>
        </ul>
      ),
      className: "col-span-1 lg:col-span-3 border-t border-b lg:border-none",
    },
    {
      title:"Security & Access",
      description:"OpusAI was built with role-based access at its core so the right users can only do the actions they’re allowed to do. Organization admins and project admins can manage members, while creators and authorized users get edit or delete privileges for their own content.This keeps documents, assets, and project actions controlled instead of open to everyone.Strong password handling with zxcvbn and SSO support further improve account security and trust.",
      className:"col-span-1 lg:col-span-3  lg:border-neutral-800",
    },
   
  ];
  return (
    <div className="relative z-20 mx-auto max-w-7xl py-10 lg:py-40">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 translate-y-[-20%] rounded-full bg-sky-500/10 blur-[100px]" />

      <div className="relative px-8">
        <h4 className="mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight lg:text-5xl lg:leading-tight bg-clip-text text-transparent bg-linear-to-br from-neutral-900 to-neutral-500 dark:from-neutral-100 dark:to-neutral-500">
           Enterprise-Grade Multi-Tenant SaaS Workspace
        </h4>

        <p className="mx-auto my-4 max-w-2xl text-center text-sm font-normal text-neutral-500 lg:text-base dark:text-neutral-300">
        
          <Link href="https://opusai.online" target="_blank"
                rel="noopener noreferrer" className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-blue-600">
            OpusAI
          </Link>
          {" "}is a full-stack, AI-powered collaboration platform streamlining project management, real-time communication, and document handling into a single, secure environment.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://opusai.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-900 px-8 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-white dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:focus:ring-neutral-400 dark:focus:ring-offset-black"
          >
            Launch Live App
          </Link>
          <Link
            href="https://github.com/shorya1wd/opusAI"
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
              
              <div className="w-full mt-16">{feature.skeleton}</div>
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
      <div className="h-3 w-3 rounded-full bg-linear-to-br from-sky-400 to-blue-600 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
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
        "mx-0 my-2 max-w-full text-left md:text-sm",
        "font-normal text-neutral-500 dark:text-neutral-300"
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
          <Image
            src="/linear.webp"
            alt="header"
            width={800}
            height={800}
            className="aspect-square h-full w-full rounded-sm object-cover object-top-left"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-60 w-full bg-linear-to-t from-white via-white to-transparent dark:from-black dark:via-black" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-60 w-full bg-linear-to-b from-white via-transparent to-transparent dark:from-black" />
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
      <div className="group mx-auto h-1/2 w-3/4 bg-transparent dark:bg-transparent">
        <div className="relative flex h-full w-full flex-1 flex-col space-y-2">
          {/* TODO */}
          <IconBrandYoutubeFilled className="absolute inset-0 z-10 m-auto h-20 w-20 text-red-500" />
          <Image
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
              // eslint-disable-next-line react-hooks/purity
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="mt-4 -mr-4 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <Image
              src={image}
              alt="bali images"
              width={500}
              height={500}
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
              // eslint-disable-next-line react-hooks/purity
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="mt-4 -mr-4 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <Image
              src={image}
              alt="bali images"
              width={500}
              height={500}
              className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-40 md:w-40"
            />
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-100 h-full w-20 bg-linear-to-r from-white to-transparent dark:from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-100 h-full w-20 bg-linear-to-l from-white to-transparent dark:from-black" />
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
      // @ts-expect-error COBE types are missing onRender
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onRender: (state: Record<string, any>) => {
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
