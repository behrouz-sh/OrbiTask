import clsx from 'clsx';

export default function Toggle({
  isChecked = false,
  setIsChecked,
}) {
  return (
    <div
      className={clsx(
        'relative h-10 w-20 rounded-full p-1.25 transition-colors',
        isChecked ? 'bg-primary-500' : 'bg-neutral-100'
      )}>
      <input
        type='checkbox'
        className='peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0'
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <span className='block h-full w-8 rounded-full bg-white transition-all duration-300 peer-checked:translate-x-9.5'></span>
    </div>
  );
}
