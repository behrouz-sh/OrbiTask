"use client";
import { useState } from "react";
import { IconMinus, IconPlus, IconShieldCheck } from "../icons/magicoon/regular";

function Accordion({ icon, iconFill, title = "Title Empty!", description = "Description Empty!", isOpen, onToggle }) {
  return (
    <div className={`flex gap-x-2 h-fit transition-transform w-full duration-1000 ease-linear shadow-low p-6 border-2 ${isOpen ? "border-primary-500" : "border-white"} rounded-2xl [&_>svg]:p-1.5 [&_>svg]:size-8 lg:[&_>svg]:size-9 ${isOpen ? "[&_>svg]:text-primary-500" : "[&_>svg]:text-neutral-500"}`}>
      {isOpen ? iconFill || icon : icon}
      <div className="flex flex-col gap-y-5 w-full">
        <button onClick={onToggle} className={`flex justify-between cursor-pointer items-center ${isOpen ? "text-primary-500" : "text-neutral-800"}`}>
          <span className="text-label-sm lg:text-label-md text-left">{title}</span>
          <span className={`hidden sm:block ml-auto p-2 [&_svg]:size-4 rounded-lg ${isOpen ? "bg-primary-500" : "bg-neutral-50"} ${isOpen ? "text-white" : "text-neutral-700"}`}>{isOpen ? <IconMinus /> : <IconPlus />}</span>
        </button>
        {isOpen && <p className="text-body-sm text-neutral-800 lg:text-body-md">{description}</p>}
      </div>
    </div>
  );
}

export default Accordion;
