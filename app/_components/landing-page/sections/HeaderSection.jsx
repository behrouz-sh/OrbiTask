import clsx from 'clsx';

export default function HeaderSection({
  spaceY = 6,
  className,
  children,
}) {
  return (
    <div
      className={clsx(
        spaceY === 6 && 'space-y-4 lg:space-y-6',
        spaceY === 2 && 'space-y-2',
        className
      )}>
      {children}
    </div>
  );
}

HeaderSection.Title = Title;
function Title({ className, children }) {
  return (
    <h2
      className={clsx(
        'text-display-sm lg:text-display-lg',
        className
      )}>
      {children}
    </h2>
  );
}

HeaderSection.Description = Description;
function Description({ className, children }) {
  return (
    <p
      className={clsx(
        'text-body-sm lg:text-body-lg text-neutral-600',
        className
      )}>
      {children}
    </p>
  );
}
