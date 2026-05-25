import { useRef, useState } from 'react';
import useClickOutside from '@/app/_hooks/useClickOutside';
import { IconAngleDownSmall, IconAngleUpSmall } from 'magicoon';

function InputDropdown({
  label,
  options = [
    {
      value: 'default-value',
      text: 'is sample input dropdown',
    },
  ],
  register,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropdownRef = useRef(null);

  function handleSelection(option) {
    setIsDropdownOpen((toggle) => !toggle);
    setSelected(option);
  }

  useClickOutside(dropdownRef, () => {
    if (isDropdownOpen) setIsOpen(false);
  });
  return (
    <div ref={dropdownRef} className='relative'>
      {label && (
        <span className='text-label-xsm group-focus-within:text-primary-500 absolute -top-4 left-3 bg-white px-2 py-1'>
          {label}
        </span>
      )}
      <div
        onClick={() => setIsOpen((toggle) => !toggle)}
        className={`outline-primary-500 flex w-full items-center justify-between rounded-lg border border-neutral-500 px-4 py-3.25 text-neutral-600 outline-0 transition-colors hover:border-neutral-600 hover:text-neutral-700 ${isOpen && 'border-primary-500! outline-1'}`}>
        <span>{selected.label}</span>
        <span className='size-6 text-neutral-950'>
          {isDropdownOpen ? (
            <IconAngleUpSmall />
          ) : (
            <IconAngleDownSmall />
          )}
        </span>
      </div>
      {isDropdownOpen && (
        <ul className='shadow-medium *:hover:text-primary-500 absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-neutral-50 bg-white transition-colors *:block *:px-4 *:py-3'>
          {options.map((option, index) => (
            <li
              className={`${selected.value === option.value && 'text-primary-500'}`}
              onClick={() => handleSelection(option)}
              key={index}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
      <input type='hidden' value={selected} {...register} />
    </div>
  );
}

export default InputDropdown;
