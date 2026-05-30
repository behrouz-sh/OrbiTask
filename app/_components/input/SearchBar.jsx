import clsx from 'clsx';
import { IconSearch } from 'magicoon';

function SearchBar({
  // size: lg - md - sm - xsm
  size = 'md',
  placeholder = 'Search...',
  className,
}) {
  return (
    <div className={clsx('group relative h-fit', className)}>
      <IconSearch
        className={clsx(
          'absolute top-0 bottom-0 my-auto size-6',
          'group-focus-within:text-primary-500 text-neutral-500',
          (size === 'lg' || size === 'md') && 'left-4',
          size === 'sm' && 'left-3',
          size === 'xsm' && 'left-2.5 size-5!'
        )}
      />
      <input
        type='search'
        placeholder={placeholder}
        className={clsx(
          '[&::-webkit-search-cancel-button]:hidden [&::-webkit-search-cancel-button]:appearance-none',
          'size-full rounded-lg border outline-0',
          'border-neutral-100 bg-white placeholder:text-neutral-400',
          'focus:border-primary-100 focus:placeholder:text-primary-500 bg-white',

          (size == 'lg' || size == 'md') &&
            'text-body-md pl-12',
          size == 'lg' && 'p-4.5',
          size == 'md' && 'p-3.5',
          size == 'sm' && 'text-body-sm p-3 pl-11',
          size == 'xsm' && 'text-body-xsm p-2 pl-9.5'
        )}
      />
    </div>
  );
}

export default SearchBar;
