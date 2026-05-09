import { IconAngleDownSmall, IconAngleUpSmall } from "magicoon/regular";
import useClickOutside from "@/app/_hooks/useClickOutside";
import { useRef, useState } from "react";

function Select({ label, options }) {
  // const options = ;

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => {
    if (isOpen) setIsOpen(false);
  });

  function handleSelection(option) {
    setIsOpen((toggle) => !toggle);
    setSelected(option);
  }
  return (
    <div ref={dropdownRef} className="relative">
      <span className="-top-4 left-3 absolute bg-white px-2 py-1 text-label-xsm group-focus-within:text-primary-500">{label}</span>
      <div onClick={() => setIsOpen((toggle) => !toggle)} className={`flex justify-between items-center px-4 py-3.25 border border-neutral-500 hover:border-neutral-600 rounded-lg outline-0 outline-primary-500  w-full text-neutral-600 hover:text-neutral-700 transition-colors  ${isOpen && "outline-1 border-primary-500!"}`}>
        <span>{selected.label}</span>
        {isOpen ? <IconAngleUpSmall className="size-6 text-neutral-950" /> : <IconAngleDownSmall className="size-6 text-neutral-950" />}
      </div>
      {isOpen && (
        <div className="*:block z-50 absolute bg-white shadow-medium mt-1 *:px-4 *:py-3 border border-neutral-50 rounded-lg w-full max-h-60 overflow-auto *:hover:text-primary-500 transition-colors">
          {options.map((option, index) => (
            <div className={`${selected.value === option.value && "text-primary-500"}`} onClick={() => handleSelection(option)} key={index}>
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
