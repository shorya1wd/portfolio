"use client";
import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { IconBrandYoutubeFilled, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function LuminaFeatureSection() {
  const luminaProjectCards = [
    { src: "/Lumina-YourChannel.png" },
    { src: "/Lumina-MainPage.png" },
    { src: "/Lumina-WatchVideo.png" },
  ];

  const luminaTestimonials = [
    {
      name: "Sign Up Flow",
      designation: "Authentication",
      quote: "Secure JWT-based auth with short-lived access tokens and HTTP-only cookies.",
      src: "/Lumina-signup.png",
    },
    {
      name: "Watch History",
      designation: "User Data",
      quote: "Complex MongoDB aggregations to instantly retrieve user's complete viewing history.",
      src: "/Lumina-watchhistory.png",
    },
    {
      name: "Liked Videos",
      designation: "Engagement",
      quote: "Real-time updates and seamless state management for user engagement metrics.",
      src: "/Lumina-likedvideos.png",
    },
    {
      name: "Create Playlist",
      designation: "Content Management",
      quote: "Flexible relational data schema allowing users to group videos effortlessly.",
      src: "/Lumina-createplaylist.png",
    },
    {
      name: "View Playlist",
      designation: "Content Management",
      quote: "Instantly accessible curated playlists reflecting scalable backend delivery.",
      src: "/Lumina-playlist.png",
    },
    {
      name: "Upload Video",
      designation: "Media Pipeline",
      quote: "Robust pipeline utilizing Cloudinary and Multer for large video chunks and images.",
      src: "/Lumina-uploadvideo.png",
    },
    {
      name: "Edit Video",
      designation: "Media Pipeline",
      quote: "Full CRUD operations on existing media with state synchronized to Cloudinary.",
      src: "/Lumina-editvideo.png",
    },
    {
      name: "Channel Posts",
      designation: "Social",
      quote: "Community interaction space showing dynamic content routing.",
      src: "/Lumina-channelposts.png",
    },
    {
      name: "Settings",
      designation: "Account Management",
      quote: "Granular user controls and account configurations.",
      src: "/Lumina-settings.png",
    },
  ];

  const features = [
    {
      title: "Project Details",
      description:
      "Lumina is a production-ready, full-stack video streaming and social platform built from scratch. Designed to handle complex user interactions and media management, it features secure JWT authentication, asynchronous video processing, and real-time social engagement metrics. It was engineered to go beyond a simple clone, demonstrating scalable backend architecture, efficient data flow, and a premium user experience.",
      skeleton: <InfiniteMovingCards items={luminaProjectCards} speed="slow" />,
      className:
        "col-span-1 lg:col-span-6 border-b lg:border-r dark:border-neutral-800 pb-16",
    },
    {
      title:"Tech Stack",
      description:(
        <ul>
          <li>Frontend: React 19, Vite, Tailwind CSS 4, React Router, Axios</li>
          <li>Backend: Node.js, Express.js, RESTful APIs</li>
          <li>Database: MongoDB, Mongoose (with complex aggregation pipelines)</li>
          <li>Media & Storage: Cloudinary, Multer</li>
          <li>Security & Auth: JWT (Access/Refresh), bcrypt, Node crypto, Resend API</li>
          <li>DevOps: Vercel (Frontend), Render (Backend), Custom DNS & CORS configuration</li>
        </ul>
      ),
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
    {
      title: "Why Lumina?",
      description:
        "Lumina was built to go beyond a simple clone and demonstrate real backend architecture, media handling, and user engagement features. It solves the core needs of a modern video platform: upload, discover, engage, search, and manage content securely. The goal was to build something production-ready, with proper schema design, controllers, routing, error handling, and deployment flow.",
      
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Key Features",
      description:(
        <ul>     
          <li>Enterprise-Grade Authentication System: Designed a highly secure, multi-step authentication flow using short-lived Access Tokens and long-lived Refresh Tokens stored in secure, HTTP-only cookies.</li>
          <li>Enterprise-Grade Authentication System: Implemented strict email verification workflows and a cryptographically secure &quot;Forgot Password&quot; system utilizing the Resend API for asynchronous email dispatch to prevent UI blocking</li>         
          <li>Advanced Social Architecture: Designed complex MongoDB relational schemas to handle subscriptions, comments, and playlists. Utilized advanced Aggregation Pipelines to instantly calculate subscriber counts and aggregate watch histories in highly optimized, single database queries.</li>
          <li>Seamless Media Pipeline: Engineered a robust upload pipeline using Cloudinary and Multer to handle large video files and high-resolution images, complete with automatic cloud storage cleanup to reduce server costs.</li>
          <li>Production-Ready Networking: Architected strict cross-origin resource sharing (CORS) between Vercel and Render environments, ensuring flawless secure cookie transmission and API protection across different domains. Views are strictly rate-limited and tracked to prevent metric manipulation.</li>
        </ul>
      ),
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Technical Reasoning",
      description:"I chose Node.js and Express to provide a lightweight, highly customizable backend foundation. MongoDB was selected for its flexibility in handling dynamic media and user interaction data, while its aggregation framework proved essential for complex content queries. By separating the frontend (Vercel) and backend (Render) deployments, I ensured the application mimics a true microservice-like production environment, optimizing for both scalability and maintainability.",
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
    {
      title: "Product Highlights",
      description: "",
      skeleton: <AnimatedTestimonials testimonials={luminaTestimonials} />,
      className: "col-span-1 lg:col-span-6 border-b dark:border-neutral-800 pb-16",
    },
    {
      title:"Security & Access",
      description:"Lumina uses JWT middleware to protect routes and control what users can do. Passwords are hashed with bcrypt, authentication relies on access and refresh tokens, and media actions are restricted to the proper owner. This keeps uploads, deletions, and account operations secure while still giving users a smooth experience.",
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    }
  ];
  return (
    <div className="relative z-20 mx-auto max-w-7xl py-10 lg:py-40">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 translate-y-[-20%] rounded-full bg-orange-500/10 blur-[100px]" />

      <div className="relative px-8">
        <h4 className="mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight lg:text-5xl lg:leading-tight bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 to-neutral-500 dark:from-neutral-100 dark:to-neutral-500">
          A production-ready video platform built from scratch
        </h4>

        <p className="mx-auto my-4 max-w-2xl text-center text-sm font-normal text-neutral-500 lg:text-base dark:text-neutral-300">
          <Link href="https://watchlumina.space" className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
            Lumina
          </Link>
          {" "}is a full-stack video platform with uploads, playlists, subscriptions, comments, search, watch history, and secure authentication.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://watchlumina.space"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-900 px-8 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-white dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:focus:ring-neutral-400 dark:focus:ring-offset-black"
          >
            Launch Live App
          </Link>
          <Link
            href="https://github.com/shorya1wd/Lumina"
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
      <div className="h-3 w-3 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
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
