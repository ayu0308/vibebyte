import { IconCloud } from "./ui/iconCard";
import { cn } from "../lib/utils";
import { HoverBorderGradient } from "./ui/hover-button";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "androidstudio",
  "sonarqube",
  "python",
  "django",
  "flask",

  "go",
  
  "mongodb",
  "mysql",
  "redis",
  "graphql",
  "apollographql",
  "sass",
  "tailwindcss",
  "materialui",
  "chakraui",
  "styledcomponents",
  "vuedotjs",
  "angular",
  "kubernetes",
  "terraform",
  "jenkins",
  "amazonaws",
  "googlecloud",
  "intellijidea",
  "pycharm",
  "postman",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]"
      )}
    >
       <div className="flex justify-center items-center p-4">
        <IconCloud images={images} />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-3">Web Development</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          Build powerful, scalable web applications with our expert development
          services. We leverage cutting-edge technologies and best practices to
          deliver robust, high-performance solutions for your business.
        </p>

        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-black text-white flex items-center space-x-2 cursor-pointer"
        >
          <span className="text-orange-400 font-semibold">View Details</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
}
