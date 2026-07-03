"use client";

import { Terminal } from "@/components/ui/terminal";

export default function TerminalDemo() {
  return (
    <div className="w-full pt-2 pr-8">
      <Terminal
        commands={[
          "How I work?",
          "Understand the goal",
          "Build with clarity",
          "Launch with confidence",
        ]}
        outputs={{
          0: [
            "✔ Start by understanding your needs.",
            "✔ Communicate clearly throughout the project.",
            "✔ Build secure, scalable, and user-friendly solutions.",
            "✔ Focus on delivering work that is ready to launch.",
          ],
          1: ["✔ Clear planning and project direction."],
          2: ["✔ Clean UI, strong backend, and reliable logic."],
          3: ["✔ Final product optimized for real-world use."],
        }}
        typingSpeed={45}
        delayBetweenCommands={1000}
      />
    </div>
  );
}