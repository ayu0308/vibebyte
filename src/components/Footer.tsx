import {
  IconArrowAutofitUp,
  IconArrowUpRight,
  IconLocation,
  IconPhone,
  IconRecordMail,
} from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/cards";
import { Link, Links } from "react-router-dom";

export const Footer = () => {
  return (
    <Card className="bg-[#161616]/50 border py-10  px-6 rounded-4xl ">
      <div className="grid grid-cols-2 gap-x-7">
        <div className="flex flex-col gap-2 max-w-[80%]">
          {" "}
          <div className="flex flex-col leading-none bg-[#222222] rounded-3xl p-6 gap-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fb923c"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            <span className="text-white font-bold">+91-6202975103</span>
          </div>
          <div className="flex flex-col leading-none bg-[#222222] rounded-3xl p-6 gap-y-4">
            <IconPhone className="w-8 h-8 text-orange-400" />
            <span className="text-white font-bold">+91-6202975103</span>
          </div>
          <div className="flex flex-col leading-none bg-[#222222] rounded-3xl p-6 gap-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fb923c"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
            </svg>{" "}
            <span className="text-white font-bold">+91-6202975103</span>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="flex flex-col space-y-2">
            <h1 className="text-orange-400 font-semibold">Menu</h1>
            <Link className="text-white hover:text-orange-400" to="/">
              Home
            </Link>
            <Link className="text-white hover:text-orange-400" to="/about">
              About
            </Link>
            <Link className="text-white hover:text-orange-400" to="/services">
              Services
            </Link>
            <Link className="text-white hover:text-orange-400" to="/projects">
              Projects
            </Link>
            <Link className="text-white hover:text-orange-400" to="/blog">
              Blog
            </Link>
            <Link className="text-white hover:text-orange-400" to="/review">
              Review
            </Link>
            <Link className="text-white hover:text-orange-400" to="/contact">
              Contact
            </Link>{" "}
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-orange-400 font-semibold">Services</h1>
            <Link
              className="text-white hover:text-orange-400"
              to="/services/seo"
            >
              SEO
            </Link>
            <Link
              className="text-white hover:text-orange-400"
              to="/services/content-marketing"
            >
              Content Marketing
            </Link>
            <Link
              className="text-white hover:text-orange-400"
              to="/services/website-design"
            >
              Website Design
            </Link>
            <Link
              className="text-white hover:text-orange-400"
              to="/services/social-media-marketing"
            >
              Social Media Marketing
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-orange-400 font-semibold">Package</h1>{" "}
            <Link
              className="text-white hover:text-orange-400"
              to="/services/seo"
            >
              SEO
            </Link>
            <Link
              className="text-white hover:text-orange-400"
              to="/services/content-marketing"
            >
              Content Marketing
            </Link>
            <Link
              className="text-white hover:text-orange-400"
              to="/services/website-design"
            >
              Website Design
            </Link>
            <Link
              className="text-white hover:text-orange-400"
              to="/services/social-media-marketing"
            >
              Social Media Marketing
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};
