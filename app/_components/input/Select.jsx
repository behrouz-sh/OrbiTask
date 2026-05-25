'use client';
import { IconAngleDownSmall, IconAngleUpSmall } from 'magicoon';
import useClickOutside from '@/app/_hooks/useClickOutside';
import { useRef, useState } from 'react';

function Select({ label, options, register }) {
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
    <div ref={dropdownRef} className='relative'>
      <input
        type='hidden'
        value={selected?.value}
        {...register}
      />
      <span className='text-label-xsm group-focus-within:text-primary-500 absolute -top-4 left-3 bg-white px-2 py-1'>
        {label}
      </span>
      <div
        onClick={() => setIsOpen((toggle) => !toggle)}
        className={`outline-primary-500 flex w-full items-center justify-between rounded-lg border border-neutral-500 px-4 py-3.25 text-neutral-600 outline-0 transition-colors hover:border-neutral-600 hover:text-neutral-700 ${isOpen && 'border-primary-500! outline-1'}`}>
        <span>{selected.label}</span>
        {isOpen ? (
          <IconAngleUpSmall className='size-6 text-neutral-950' />
        ) : (
          <IconAngleDownSmall className='size-6 text-neutral-950' />
        )}
      </div>
      {isOpen && (
        <div className='shadow-medium *:hover:text-primary-500 absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-neutral-50 bg-white transition-colors *:block *:px-4 *:py-3'>
          {options.map((option, index) => (
            <div
              className={`${selected.value === option.value && 'text-primary-500'}`}
              onClick={() => handleSelection(option)}
              key={index}>
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
