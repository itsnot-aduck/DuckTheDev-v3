import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Divide, Download, Send } from "lucide-react";
import DevImg from "./DevImg";
import Divider from "./Divider";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

function Hero() {
  return (
    <div>
      <section className="xl:pt-28 bg-pink-100">
        <div className="container mx-auto">
          <div className="flex justify-between gap-x-8">
            {/* text */}
            <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
              <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                Web Developer
              </div>
              <h1 className="duck-h1 mb-4">Hello, my name is Duc HoangMinh</h1>
              <p className="duck-subtitle max-w-[490px] mx-auto">
                Brief description with insights into myself, my vocational
                journey, and what I engage in professionaly
              </p>
              {/* Buttons */}
              <div className="flex flex-col md:flex-row gap-x-3 mx-auto xl:mx-0">
                <Link href={"/contact"}>
                  <Button className="gap-x-2">
                    Contact me <Send size={18} />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="hidden xl:flex relative">Image</div>
          </div>
          {/* Icon */}
          <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </section>
      <Divider />
    </div>
  );
}

export default Hero;
