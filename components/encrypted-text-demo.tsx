import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export default function EncryptedTextDemo() {
  return (
    <div className="relative z-20 w-full">
      <div className="text-left text-lg sm:text-xl lg:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
        <span className="text-neutral-900 dark:text-neutral-100 font-bold block mb-5 text-3xl sm:text-4xl lg:text-4xl">What do I do?</span>
        <p className="mb-6">
          I’m a full-stack developer building modern, secure, and scalable web applications from idea to deployment.
          I create intuitive user interfaces, robust backend systems, and feature-rich products that are fast, reliable, and built to solve real client needs.
        </p>
        <div className="mt-4">
          <EncryptedText text="My work includes SaaS platforms, media-sharing systems, video platforms, AI-powered features, and collaboration tools." />
        </div>
      </div>
    </div>
  );
}
