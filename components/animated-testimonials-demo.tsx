import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "Secure Sign-up and Sign-in",
      name: "Authentication",
      src: "/Opus-Sign-up.png",
    },
    {
      quote:
        " Create a new organization or join one with an invite code.",
      name: "Organization Flow",
      src: "/Opus-Organization-flow.png",
    },
 
    {
      quote:
        "Communicate with teammates in real time.",
      name: "Live TeamChat",
      src: "/Opus-Project-teamchat.png",
    },
    {
      quote:"Promote admins and manage access.",
      name:"Team Settings",
      src:"/Opus-team-setting.png",
    },
    {
      quote:"Update name, avatar, and account details.",
      name:"Profile Settings",
      src:"/Opus-personal-setting.png",
    }
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
