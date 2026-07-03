import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import CanvasTextDemo from "./canvas-text-demo";

export function DottedGlowBackgroundDemoSecond() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full h-[24vh] overflow-hidden">
                        <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-300"
        glowColorLightVar="--color-violet-500"
        colorDarkVar="--color-neutral-800"
        glowColorDarkVar="--color-violet-600"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
      </div>
      <div className="relative z-10 -mt-16 sm:-mt-20 md:-mt-24 px-4 flex w-full flex-col items-center justify-center">
        <CanvasTextDemo />
      </div>
    </div>
  );
}
