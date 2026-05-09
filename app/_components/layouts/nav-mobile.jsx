"use client";

import Logo from "ui/logo";
import Button from "ui/button";
import { IconMenu, IconTimes } from "../icons/magicoon/regular";
import Nav from "./nav";
import { useState } from "react";

export default function NavMobile({ them }) {
  const [isNavOpen, setIsNavOpen] = useState(true);
  function toggleNavMobile() {
    setIsNavOpen((toggle) => !toggle);
  }

  return (
    <>
      <div className="md:hidden flex items-center gap-x-4">
        <Button to="/signup" style="filled" size="md">
          Get Started
        </Button>
        <span onClick={toggleNavMobile}>
          <IconMenu className="p-2 size-9 text-neutral-600" />
        </span>
      </div>
      <div className={`z-50 fixed container flex-col inset-0 md:hidden bg-white pt-5 h-dvh text-neutral-700 duration-1000 transition-transform ${isNavOpen ? "hidden" : "flex"}`}>
        <div className="flex justify-between items-center mb-4">
          <Logo type="blue" variant="mark" className="size-8" />
          <span onClick={toggleNavMobile}>
            <IconTimes className="p-2 size-10 text-neutral-600" />
          </span>
        </div>
        <Nav isPhone={true} onToggle={toggleNavMobile} />
        <div className="flex sm:flex-row flex-col gap-2 mt-auto mb-[4dvh]">
          <Button to="/login" style="filled" size="lg" className="w-full">
            Login
          </Button>
          <Button to="/signup" style="outlined" size="lg" className="w-full">
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
}
