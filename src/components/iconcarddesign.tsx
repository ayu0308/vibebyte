import { IconCloud } from "./ui/iconCard";
import { cn } from "../lib/utils";
import { HoverBorderGradient } from "./ui/hover-button";

const slugs = [
  "figma",
  "adobexd",
  "adobephotoshop",
  "adobeillustrator",
  "sketch",
  "invision",
  "principle",
  "zeplin",
  "abstract",
  "miro",
  "protopie",
  "framer",
  "materialdesign",
  "storybook",
  "adobeaftereffects",
  "adobeindesign",
  "adobelightroom",
  "adobepremierepro",
  "dribbble",
  "behance",
  "canva",
  "blender",
  "notion",
  "asana",
  "slack",
  "trello",
  "spotify",
  "pinterest",
  "awsamplify",
  "wordpress",
  "adobeacrobat",
  "adobeaudition",
  "adobedreamweaver",
  "adobefonts",
  "adobesubstance3d",
  "affinity",
  "affinitydesigner",
  "affinityphoto",
  "affinitypublisher",
  "cinema4d",
  "webflow",
  "wix",
  "shopify",
  "squarespace",
  "bootstrap",
  "tailwindcss",
  "chakraui",
  "antdesign",
  "fontawesome",
  "unsplash",
  "sketchup",
  "rhinoceros",
  "unity",
  "adobeanimate",
  "procreate",
];

export function IconCloudDesign() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="max-w-sm w-full mx-auto rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
      <div className="flex justify-center items-center p-4">
        <IconCloud images={images} />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-3">Web Design</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          Transform your digital presence with our creative web design services.
          We craft visually stunning, user-friendly interfaces that engage your
          audience and elevate your brand identity.
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
