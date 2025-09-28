import { IconArrowAutofitUp, IconArrowUpRight } from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/cards";

export const ContactUs = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-center h-screen p-6">
      <div className="flex flex-col leading-none">
        <span
          className="text-white font-semibold text-[156px] "
          style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 400 }}
        >
          Let's
        </span>{" "}
        <span
          className="text-orange-400 font-semibold text-[156px] -mt-8"
          style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 400 }}
        >
          Talk
        </span>
      </div>
      <div>
        <Card className="bg-[#161616]/50 border py-11 px-2 rounded-4xl">
          <CardContent>
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="text" className="text-gray-400">
                    Name
                  </label>
                  <input
                    id="text"
                    type="text"
                    placeholder="Alice"
                    className="bg-[#2F2F2F]/30 p-3 rounded-md w-full outline-none border border-gray-800 text-white "
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-gray-400">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="bg-[#2F2F2F]/30 p-3 rounded-md w-full outline-none border border-gray-800 text-white"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="textarea" className="text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="textarea"
                    placeholder="Type..."
                    className="bg-[#2F2F2F]/30 p-3 rounded-md w-full outline-none border border-gray-800 text-white h-24 "
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <button className="w-full font-semibold text-black bg-orange-400 hover:bg-white hover:text-orange-400 transition-all duration-75 py-2 px-4 rounded-lg shadow-xl">
              Submit
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
